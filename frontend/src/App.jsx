import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Globe from "./components/globe";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

import useWeb3 from "./hooks/useWeb3";
import useGeolocation from "./hooks/useGeolocation";

export default function App() {
  const {
    items,
    isLoading,
    web3Handler,
    buyStoreItem,
    purchases,
  } = useWeb3();
  const { location } = useGeolocation();

  useEffect(() => {
    web3Handler();
  }, []);

  console.log("LOCATION:", location);

  // return (
  //   <Router>
  //     <Routes>
  //       <Route
  //         path="/"
  //         element={
  //           <Home
  //           />
  //         }
  //       />
  //     </Routes>
  //   </Router>
  // );
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <Globe className="" />
        <Modal />
      </div>
    </>
  );
}
