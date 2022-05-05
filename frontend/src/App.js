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
<<<<<<< HEAD
import NftCollections from "./components/NftCollections";
import Store from "./components/Store";
=======
import NftGallery from "./views/NftGallery";
import NftBuyItem from "./views/NftBuyItem";
>>>>>>> 086bddecf8c081b1cc3522f443edd6d86863f37a

import useWeb3 from "./hooks/useWeb3";

esriConfig.assetsPath = "./assets";

function App() {
 
  const { account, store, nft, web3Handler } = useWeb3();

  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Homepage account={ account} web3Handler= { web3Handler }/>} />
        <Route path="/nftcollection" element={<NftCollections />} />
        <Route path="/store" element={<Store account={ account } web3Handler= { web3Handler} nft={ nft } store={ store } />} />
=======
        <Route path="/" element={<Homepage />} />
        <Route path="/nftglobegallery" element={<NftGallery />} />
        <Route path="/nftbuyitem" element={<NftBuyItem />} />
>>>>>>> 086bddecf8c081b1cc3522f443edd6d86863f37a
      </Routes>
    </Router>
  );
}

export default App;
