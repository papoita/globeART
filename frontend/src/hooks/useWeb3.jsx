import { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

import StoreAddress from "../contractsData/Store-address.json";
import StoreAbi from "../contractsData/Store.json";
import NFTAddress from "../contractsData/GlobeArtNFT-address.json";
import NFTAbi from "../contractsData/GlobeArtNFT.json";

export default function useWeb3() {
  const [store, setStore] = useState({});
  const [nft, setNft] = useState({});
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState({});

  const loadContracts = async (signer) => {
    // Get deployed copies of contracts
    const store = new ethers.Contract(
      StoreAddress.address,
      StoreAbi.abi,
      signer
    );
    setStore(store);
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer);
    setNft(nft);
  };

  const web3Handler = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });
    // window.ethereum.on("accountsChanged", async function (accounts) {
    //   await web3Handler();
    // });
    loadContracts(signer);
  };

  const loadStoreItems = async (store, nft) => {
    let items = [];
    // load all items
    try {
      const itemCount = await store.callStatic.itemCount();
      console.log("Store", store);
      console.log(Number(itemCount.toString()));

      for (let i = 1; i <= Number(itemCount.toString()); i++) {
        const item = await store.callStatic.items(i);
        // get uri url from nft contract
        const uri = await nft.tokenURI(item.tokenId);
        // use uri to fetch the nft metadata stored on ipfs
        const response = await axios.get(uri);
        console.log(response.data);
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
      console.log(items);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const buyStoreItem = async (item) => {
    const price = ethers.utils.parseEther(item.price);
    await (await store.purchaseItem(item.itemId, { value: price })).wait();
    loadStoreItems();
  };

  return {
    items,
    store,
    isLoading,
    web3Handler,
    loadStoreItems,
    buyStoreItem,
    nft,
  };
}
