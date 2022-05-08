//shows routers, should not have logic
//ie. nft/:id
// <Route path="/products" element={ <Dashboard /> } />
//example github https://github.com/pedroagont/ecommerce-frontend-g7/blob/dev/src/App.js
//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import esriConfig from "@arcgis/core/config.js";


import Homepage from "./views/Homepage";
import NftGallery from "./views/NftGallery";
import NftBuyItem from "./views/NftBuyItem";
import PersonalCollection from "./views/PersonalCollection";
import SimpleGlobe from "./components/globe";
import SceneView from "./components/SceneView";


esriConfig.assetsPath = "./assets";

function App() {

  const [alert, setAlert] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage alert={alert} setAlert={setAlert}/>} />
        <Route path="/nftglobegallery" element={<NftGallery />} />
        <Route path="/nftbuyitem" element={<NftBuyItem alert={alert} setAlert={setAlert}/>} />
        <Route path="/personalcollection" element={<PersonalCollection />} />
        <Route path="/globe" element={<SimpleGlobe />} />
        <Route path="/esri" element={<SceneView />} />

      </Routes>
    </Router>
  );
}

export default App;
