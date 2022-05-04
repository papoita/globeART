//shows routers, should not have logic
//ie. nft/:id
// <Route path="/products" element={ <Dashboard /> } />
//example github https://github.com/pedroagont/ecommerce-frontend-g7/blob/dev/src/App.js
//import logo from './logo.svg';
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Homepage from "./views/Homepage";
import NftCollections from "./components/NftCollections";

import esriConfig from "@arcgis/core/config.js";

esriConfig.assetsPath = "./assets";

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/nftcollection" element={<NftCollections />} />
      </Routes>
    </Router>
  );
}

export default App;
