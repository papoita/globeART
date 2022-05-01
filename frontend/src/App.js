//import logo from './logo.svg';
import React from "react";
import './App.css';

import SceneView from "./components/SceneView";
import Header from './components/Header';
import Buy from './components/Buy';
import Navbar from './components/Navbar'

import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "./assets";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <SceneView />
      <Header className="" name="Julian" message="NFT art collection for wanderlusts" />
      <Buy></Buy>
      
    </div>
  );
}

export default App;




