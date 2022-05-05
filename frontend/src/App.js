//shows routers, should not have logic
//ie. nft/:id
// <Route path="/products" element={ <Dashboard /> } />
//example github https://github.com/pedroagont/ecommerce-frontend-g7/blob/dev/src/App.js
//import logo from './logo.svg';
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import esriConfig from "@arcgis/core/config.js";

import Homepage from "./views/Homepage";
import NftCollections from "./components/NftCollections";
import Store from "./components/Store";

import useWeb3 from "./hooks/useWeb3";

esriConfig.assetsPath = "./assets";

function App() {
 
  const { account, store, nft, web3Handler } = useWeb3();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage account={ account} web3Handler= { web3Handler }/>} />
        <Route path="/nftcollection" element={<NftCollections />} />
        <Route path="/store" element={<Store account={ account } web3Handler= { web3Handler} nft={ nft } store={ store } />} />
      </Routes>
    </Router>
  );
}

export default App;
