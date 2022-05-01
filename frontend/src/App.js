//import logo from './logo.svg';
import React from "react";
import './App.css';

import SceneView from "./components/SceneView";
import Header from './components/Header';
import Buy from './components/Buy';

import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "./assets";

function App() {
  return (
    <div className="App">
      <h1>globeART</h1>
      <SceneView />
      <Header className="" name="Julian" message="NFT art collection for wanderlusts" />
      <Buy></Buy>
      
    </div>
  );
}

export default App;




