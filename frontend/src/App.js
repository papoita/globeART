//shows routers, should not have logic
//ie. nft/:id
// <Route path="/products" element={ <Dashboard /> } />
//example github https://github.com/pedroagont/ecommerce-frontend-g7/blob/dev/src/App.js
//import logo from './logo.svg';
import React from "react";
import "./App.css";

import SceneView from "./components/SceneView";
import Header from "./components/Header";
import Buy from "./components/Buy";
import useGeolocation from "./hooks/useGeolocation";
import Navigation from "./components/Navigation";

import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "./assets";

function App() {
  const location = useGeolocation();

  return (
    <div className="App">
      <Navigation />
      
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
