//shows routers, should not have logic
//ie. nft/:id
// <Route path="/products" element={ <Dashboard /> } />
//example github https://github.com/pedroagont/ecommerce-frontend-g7/blob/dev/src/App.js
//import logo from './logo.svg';
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Homepage from "./views/Homepage";
import NftGallery from "./views/NftGallery";
import NftBuyItem from "./views/NftBuyItem";
import PersonalCollection from "./views/PersonalCollection";
import SimpleGlobe from "./components/globe";
import SceneView from "./components/SceneView";
<<<<<<< HEAD
import Header from './components/Header';
import Buy from './components/Buy';
import Navbar from './components/Navbar'
=======
>>>>>>> fa696cdb0ea52e6929ec66b0bc87bc7656f90d6d

import esriConfig from "@arcgis/core/config.js";

esriConfig.assetsPath = "./assets";

function App() {
 

  return (
<<<<<<< HEAD
    <div className="App">
      <Navbar />
      
      <SceneView />
      <Header className="" name="Julian" message="NFT art collection for wanderlusts" />
      <Buy></Buy>
      
    </div>
=======
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/nftglobegallery" element={<NftGallery />} />
        <Route path="/nftbuyitem" element={<NftBuyItem />} />
        <Route path="/personalcollection" element={<PersonalCollection />} />
        <Route path="/globe" element={<SimpleGlobe />} />
        <Route path="/esri" element={<SceneView />} />

      </Routes>
    </Router>
>>>>>>> fa696cdb0ea52e6929ec66b0bc87bc7656f90d6d
  );
}

export default App;
