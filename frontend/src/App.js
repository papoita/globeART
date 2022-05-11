//shows routers, should not have logic
//ie. nft/:id
// <Route path="/products" element={ <Dashboard /> } />
//example github https://github.com/pedroagont/ecommerce-frontend-g7/blob/dev/src/App.js
//import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StoreAddress from "./contractsData/Store-address.json";
import StoreAbi from "./contractsData/Store.json";
import NFTAddress from "./contractsData/GlobeArtNFT-address.json";
import NFTAbi from "./contractsData/GlobeArtNFT.json";

import Homepage from "./views/Homepage";
import Gallery from "./views/Gallery";
import PersonalCollection from "./views/PersonalCollection";
import AvailableNFT from "./views/AvailableNFT";
import SimpleGlobe from "./components/globe";
import useWeb3 from "./hooks/useWeb3";
import useMetaMask from "./hooks/useMetamask";
import useGeolocation from "./hooks/useGeolocation";

function App() {
  // const {
  //   items,
  //   store,
  //   isLoading,
  //   nft,
  //   loadStoreItems,
  //   buyStoreItem,
  //   web3Handler,
  // } = useWeb3();
  const { location } = useGeolocation();
  const { connect, isActive, account, disconnect, isDisable } = useMetaMask();

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
    console.log(store);
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer);
    setNft(nft);
  };

  const web3Handler = async () => {
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

  const loadStoreItems = async (store, nft) => {
    // load all items
    try {
      console.log("Store", store);
      const itemCount = await store.callStatic.itemCount();
      console.log(Number(itemCount.toString()));

      for (let i = 1; i <= Number(itemCount.toString()); i++) {
        const item = await store.callStatic.items(i);
        // get uri url from nft contract
        const uri = await nft.tokenURI(item.tokenId);
        // use uri to fetch the nft metadata stored on ipfs
        const response = await axios.get(uri);
        console.log(response);
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

  useEffect(() => {
    web3Handler();
    loadStoreItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("App rendering");
  console.log(account);
  console.log("App variable", store);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              location={location}
              connect={connect}
              disconnect={disconnect}
              account={account}
              isActive={isActive}
              isDisable={isDisable}
            />
          }
        />
        <Route
          path="/gallery"
          element={
            <Gallery
              account={account}
              nft={nft}
              store={store}
              loadStoreItems={loadStoreItems}
              items={items}
              loading={isLoading}
            />
          }
        />
        <Route
          path="/personalcollection"
          element={
            <PersonalCollection account={account} nft={nft} store={store} />
          }
        />
        <Route
          path="/nft"
          element={
            <AvailableNFT
              location={location}
              items={items}
              account={account}
              buyStoreItem={buyStoreItem}
              loadStoreItems={loadStoreItems}
            />
          }
        />
        <Route path="/globe" element={<SimpleGlobe />} />
      </Routes>
    </Router>
  );
}

export default App;
