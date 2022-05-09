import { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

import StoreAddress from "../contractsData/Store-address.json";
import StoreAbi from "../contractsData/Store.json";
import NFTAddress from "../contractsData/GlobeArtNFT-address.json";
import NFTAbi from "../contractsData/GlobeArtNFT.json";

export default function useWeb3() {
  const [state, setState] = useState({
    account: null,
    nft: {},
    store: {},
    items: [],
    item: {},
    loading: true,
  });

  const loadContracts = async (signer) => {
    // Get deployed copies of contracts
    const store = new ethers.Contract(
      StoreAddress.address,
      StoreAbi.abi,
      signer
    );
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer);

    setState((prev) => ({ ...prev, store, nft }));
  };

  const web3Handler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setState((prev) => ({ ...prev, account: accounts[0] }));
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Set signer
    const signer = provider.getSigner();

    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", async function (accounts) {
      await web3Handler();
    });
    loadContracts(signer);
  };

  const loadStoreItems = async () => {
    // load all items
    try {
      console.log("Store", state.store);
      const itemCount = await state.store.callStatic.itemCount();
      console.log(Number(itemCount.toString()));
      let items = [];

      for (let i = 1; i <= Number(itemCount.toString()); i++) {
        const item = await state.store.callStatic.items(i);
        // get uri url from nft contract
        const uri = await state.nft.tokenURI(item.tokenId);
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
      setState((prev) => ({ ...prev, loading: false, items }));
      console.log(state.items);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const buyStoreItem = async (item) => {
    const price = ethers.utils.parseEther(item.price);
    await (
      await state.store.purchaseItem(item.itemId, { value: price })
    ).wait();
    loadStoreItems();
  };

  const loadStoreItem = async(id) => {
    const items = loadStoreItems();
    const item = items.filter((i) => i.itemId === id);
    return item[0];
  }

  return { state, web3Handler, loadStoreItems, loadStoreItem, buyStoreItem };
}
