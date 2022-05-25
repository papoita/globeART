//shows routers, should not have logic
//ie. nft/:id
// <Route path="/products" element={ <Dashboard /> } />
//example github https://github.com/pedroagont/ecommerce-frontend-g7/blob/dev/src/App.js
//import logo from './logo.svg';
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./views/Homepage";
import Gallery from "./views/Gallery";
import PersonalCollection from "./views/PersonalCollection";
import AvailableNFT from "./views/AvailableNFT";
import SimpleGlobe from "./components/globe";
import useWeb3 from "./hooks/useWeb3";
import useGeolocation from "./hooks/useGeolocation";
import useMetaMask from "./hooks/useMetamask";

function App() {
  const {
    items,
    isLoading,
    web3Handler,
    buyStoreItem,
    purchases,
    account,
    success,
  } = useWeb3();
  const { location } = useGeolocation();
  const { connect, isActive, disconnect, isDisable } = useMetaMask();

  useEffect(() => {
    web3Handler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              location={location}
              connect={connect}
              disconnect={disconnect}
              account={account}
              isActive={isActive}
              isDisable={isDisable}
            />
          }
        />
        <Route
          path="/gallery"
          element={
            <Gallery
              account={account}
              web3Handler={web3Handler}
              items={items}
              loading={isLoading}
              buyStoreItem={buyStoreItem}
            />
          }
        />
        <Route
          path="/personalcollection"
          element={
            <PersonalCollection
              items={items}
              web3Handler={web3Handler}
              account={account}
              purchases={purchases}
            />
          }
        />
        <Route
          path="/nft"
          element={
            <AvailableNFT
              location={location}
              items={items}
              account={account}
              web3Handler={web3Handler}
              buyStoreItem={buyStoreItem}
              purchases={purchases}
              success={success}
            />
          }
        />
        <Route path="/globe" element={<SimpleGlobe />} />
      </Routes>
    </Router>
  );
}

export default App;
