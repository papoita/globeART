//import logo from './logo.svg';
import React from "react";
import "./App.css";

import SceneView from "./components/SceneView";
import Header from "./components/Header";
import Buy from "./components/Buy";
import useGeolocation from "./hooks/useGeolocation";

import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "./assets";

function App() {
  const location = useGeolocation();

  return (
    <div className="App">
      <h1>globeART</h1>
      <SceneView />
      <Header
        className=""
        name="Julian"
        message="NFT art collection for wanderlusts"
      />
      <Buy></Buy>
      <div>
        {location.displayLocation ? JSON.stringify(location) : "Loading"}
      </div>
    </div>
  );
}

export default App;
