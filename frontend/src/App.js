//shows routers, should not have logic
//ie. nft/:id
// <Route path="/products" element={ <Dashboard /> } />
//example github https://github.com/pedroagont/ecommerce-frontend-g7/blob/dev/src/App.js
//import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ethers } from "ethers";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./views/Homepage";
import NftGallery from "./views/NftGallery";
import NftBuyItem from "./views/NftBuyItem";
import PersonalCollection from "./views/PersonalCollection";
import SimpleGlobe from "./components/globe";
import useWeb3 from "./hooks/useWeb3";

function App() {
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    web3Handler();
  }, []);

  const {
    account,
    store,
    nft,
    web3Handler,
    loadStoreItems,
    items,
    loading,
    buyStoreItem
  } = useWeb3();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Homepage alert={alert} setAlert={setAlert} />}
        />
        <Route
          path="/nftglobegallery"
          element={
            <NftGallery
              account={account}
              web3Handler={web3Handler}
              nft={nft}
              store={store}
              loadStoreItems={loadStoreItems}
              items={items}
              loading={loading}
              buyStoreItem={buyStoreItem}
            />
          }
        />
        <Route
          path="/nftbuyitem/:id"
          element={<NftBuyItem alert={alert} setAlert={setAlert} store={store} buyStoreItem={buyStoreItem} account={account} loadStoreItems={loadStoreItems}/>}
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
        <Route path="/globe" element={<SimpleGlobe />} />
      </Routes>
    </Router>
  );
}

export default App;
