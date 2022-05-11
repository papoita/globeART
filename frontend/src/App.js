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
import useMetaMask from "./hooks/useMetamask";
import useGeolocation from "./hooks/useGeolocation";

function App() {
  const {
    items,
    store,
    isLoading,
    nft,
    loadStoreItems,
    buyStoreItem,
    web3Handler,
  } = useWeb3();
  const { location } = useGeolocation();
  const { connect, isActive, account, disconnect, isDisable } = useMetaMask();

  useEffect(() => {
    web3Handler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("App rendering");
  console.log(account);

  console.log("App variable", store);

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
              nft={nft}
              store={store}
              loadStoreItems={loadStoreItems}
              items={items}
              loading={isLoading}
            />
          }
        />
        <Route
          path="/personalcollection"
          element={
            <PersonalCollection account={account} nft={nft} store={store} />
          }
        />
        <Route
          path="/nft"
          element={
            <AvailableNFT
              location={location}
              items={items}
              account={account}
              buyStoreItem={buyStoreItem}
            />
          }
        />
        <Route path="/globe" element={<SimpleGlobe />} />
      </Routes>
    </Router>
  );
}

export default App;
