import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import UserCollection from "./views/UserCollection"

import useWeb3 from "./hooks/useWeb3";
import useGeolocation from "./hooks/useGeolocation";
import { getMarkers } from "./helpers/getMarkers";

export default function App() {
  const {
    items,
    isLoading,
    web3Handler,
    buyStoreItem,
    purchases,
  } = useWeb3();

  const { location } = useGeolocation();

  let markers;

  useEffect(() => {
    web3Handler();
    if(items.length && location.city.length){
      markers = getMarkers(items, location);
    }
  }, []);

  console.log("LOCATION:", location);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home items={ items }/>
          }
        />
        <Route
          path="/mycollection"
          element={
            <UserCollection purchases={ purchases }/>
          }
        />
      </Routes>
    </Router>
  );
  
}
