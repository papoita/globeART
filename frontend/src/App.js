//shows routers, should not have logic
//ie. nft/:id
// <Route path="/products" element={ <Dashboard /> } />
//example github https://github.com/pedroagont/ecommerce-frontend-g7/blob/dev/src/App.js
//import logo from './logo.svg';
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./views/Homepage";
import NftGallery from "./views/NftGallery";
import NftBuyItem from "./views/NftBuyItem";
import PersonalCollection from "./views/PersonalCollection";
import SimpleGlobe from "./components/globe";
import useWeb3 from "./hooks/useWeb3";
import useGeolocation from "./hooks/useGeolocation";

function App() {
  const { state, web3Handler, loadStoreItems, buyStoreItem } = useWeb3();
  const { location } = useGeolocation();

  useEffect(() => {
    web3Handler();
  }, []);

  console.log("App variable", state.store);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage location={location} />} />
        <Route
          path="/nftglobegallery"
          element={
            <NftGallery
              account={state.account}
              web3Handler={web3Handler}
              nft={state.nft}
              store={state.store}
              loadStoreItems={loadStoreItems}
              items={state.items}
              loading={state.loading}
              buyStoreItem={buyStoreItem}
            />
          }
        />
        <Route path="/nftbuyitem" element={<NftBuyItem />} />
        <Route
          path="/personalcollection"
          element={
            <PersonalCollection
              account={state.account}
              web3Handler={web3Handler}
              nft={state.nft}
              store={state.store}
            />
          }
        />
        <Route path="/globe" element={<SimpleGlobe />} />
      </Routes>
    </Router>
  );
}

export default App;
