//shows routers, should not have logic
//ie. nft/:id
// <Route path="/products" element={ <Dashboard /> } />
//example github https://github.com/pedroagont/ecommerce-frontend-g7/blob/dev/src/App.js
//import logo from './logo.svg';
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./views/Homepage";
import Gallery from "./views/Gallery";
import NFT from "./views/NFT";
import PersonalCollection from "./views/PersonalCollection";
import AvailableNFT from "./views/AvailableNFT";
import SimpleGlobe from "./components/globe";
import useWeb3 from "./hooks/useWeb3";
import useGeolocation from "./hooks/useGeolocation";

function App() {
  const {
    items,
    store,
    account,
    isLoading,
    nft,
    web3Handler,
    loadStoreItems,
    buyStoreItem,
  } = useWeb3();
  const { location } = useGeolocation();

  useEffect(() => {
    web3Handler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("App variable", store);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage location={location} />} />
        <Route
          path="/gallery"
          element={
            <Gallery
              account={account}
              web3Handler={web3Handler}
              nft={nft}
              store={store}
              loadStoreItems={loadStoreItems}
              items={items}
              loading={isLoading}
              buyStoreItem={buyStoreItem}
            />
          }
        />
        <Route
          path="/personalcollection"
          element={
            <PersonalCollection
              account={account}
              web3Handler={web3Handler}
              nft={nft}
              store={store}
            />
          }
        />
        <Route
          path="/nft"
          element={
            <AvailableNFT
              location={location}
              items={items}
              account={account}
              web3Handler={web3Handler}
            />
          }
        />
        <Route path="/globe" element={<SimpleGlobe />} />
      </Routes>
    </Router>
  );
}

export default App;
