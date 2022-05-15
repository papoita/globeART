import { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

import StoreAddress from "../contractsData/Store-address.json";
import StoreAbi from "../contractsData/Store.json";
import NFTAddress from "../contractsData/GlobeArtNFT-address.json";
import NFTAbi from "../contractsData/GlobeArtNFT.json";

export default function useWeb3() {
  let store;
  let nft;
  const [account, setAccount] = useState(null);
  const [items, setItems] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [isLoading, setIsLoading] = useState({});

  const loadContracts = async (signer) => {
    // Get deployed copies of contracts
    const storeContract = new ethers.Contract(
      StoreAddress.address,
      StoreAbi.abi,
      signer
    );
    store = storeContract;
    const nftContract = new ethers.Contract(
      NFTAddress.address,
      NFTAbi.abi,
      signer
    );
    nft = nftContract;
  };

  const web3Handler = async () => {
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Set signer
    const signer = provider.getSigner();

    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });

    await loadContracts(signer);
    await loadStoreItems();
    await loadPurchasedItems();
  };

  const loadStoreItems = async () => {
    // load all items
    try {
      const itemCount = await store.callStatic.itemCount();

      for (let i = 1; i <= Number(itemCount.toString()); i++) {
        const item = await store.callStatic.items(i);
        // get uri url from nft contract
        const uri = await nft.tokenURI(item.tokenId);
        // use uri to fetch the nft metadata stored on ipfs
        const response = await axios.get(uri);
        const metadata = await response.data;

        // Add item to items array
        items.push({
          price: ethers.utils.formatEther(item.price),
          itemId: item.itemId._hex,
          seller: item.seller,
          collection: item.collection,
          name: metadata.name,
          country: metadata.country,
          image: metadata.image,
        });
      }
      setIsLoading(false);
      setItems(items);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const buyStoreItem = async (item) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const price = ethers.utils.parseEther(item.price);

      await loadContracts(signer);
      await (await store.purchaseItem(item.itemId, { value: price })).wait();
    } catch (error) {
      console.log("Error", error);
    }
  };

  const loadPurchasedItems = async () => {
    try {
      // Fetch purchased items from store by quering Bought events with the buyer set as the user acct
      const filter = store.filters.Bought(
        null,
        null,
        null,
        null,
        null,
        account
      );
      const results = await store.queryFilter(filter);
      //Fetch metadata of each nft and add that to listedItem object.
      const purchasedItems = await Promise.all(
        results.map(async (i) => {
          // fetch arguments from each result
          i = i.args;
          // get uri url from nft contract
          const uri = await nft.tokenURI(i.tokenId);
          // use uri to fetch the nft metadata stored on ipfs
          const response = await axios.get(uri);
          const metadata = await response.data;

          let purchasedItem = {
            price: ethers.utils.formatEther(i.price),
            itemId: i.itemId,
            name: metadata.name,
            description: metadata.description,
            image: metadata.image,
          };
          return purchasedItem;
        })
      );
      setPurchases(purchasedItems);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
    
    window.ethereum.on("accountsChanged", async function (accounts) {
      await connectWallet();
    });
  };

  const disconnectWallet = () => {
    setAccount(null);
  };

  return {
    items,
    purchases,
    account,
    isLoading,
    web3Handler,
    buyStoreItem,
    connectWallet,
    disconnectWallet,
  };
}
