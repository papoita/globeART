import { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

import StoreAddress from "../contractsData/Store-address.json";
import StoreAbi from "../contractsData/Store.json";
import NFTAddress from "../contractsData/GlobeArtNFT-address.json";
import NFTAbi from "../contractsData/GlobeArtNFT.json";

export default function useWeb3() {
  const [account, setAccount] = useState(null);
  const [nft, setNFT] = useState({});
  const [store, setStore] = useState({});
  const [items, setItems] = useState([]);

  const loadContracts = async (signer) => {
    // Get deployed copies of contracts
    const store = new ethers.Contract(
      StoreAddress.address,
      StoreAbi.abi,
      signer
    );
    setStore(store);
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer);
    setNFT(nft);
  };

  const web3Handler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Set signer
    const signer = provider.getSigner();

    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", async function (accounts) {
      // setAccount(accounts[0]);
      await web3Handler();
    });
    loadContracts(signer);
  };

  const loadStoreItems = async () => {
    // load all items
    console.log("Store", store);
    const itemCount = await store.callStatic.itemCount();
    console.log(Number(itemCount.toString()));
    let items = [];

    for (let i = 1; i <= Number(itemCount.toString()); i++) {
      const item = await store.callStatic.items(i);
      // get uri url from nft contract
      const uri = await nft.tokenURI(item.tokenId);
      // use uri to fetch the nft metadata stored on ipfs
      const response = await axios.get(uri);
      console.log(response.data);
      const metadata = await response.data;
      // get item price
      const price = await store.getPrice(item.itemId);
      console.log(ethers.utils.formatEther(item.price));

      // Add item to items array
      await items.push({
        price: ethers.utils.formatEther(item.price),
        itemId: item.itemId._hex,
        seller: item.seller,
        collection: item.collection,
        name: metadata.name,
        country: metadata.country,
        image: metadata.image,
      });
    }
    setItems(items);
  };

  return {
    account,
    store,
    nft,
    web3Handler,
    loadStoreItems,
    items,
  };
}
