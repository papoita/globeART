// import logo from './logo.svg';
import './App.css';

import SceneView from "./components/SceneView";
import Header from './components/Header';
import Buy from './components/Buy';

// import esriConfig from "@arcgis/core/config.js";
// esriConfig.assetsPath = "./assets";

function App() {
  return (
    <div className="App">
      <h1>globeART</h1>
      <Header className="" name="Julian" message="NFT art collection for wanderlusts" />
      <Buy></Buy>
      <SceneView />
    </div>
  );
}

export default App;
