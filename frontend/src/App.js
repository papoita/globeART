import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import useWeb3 from "./hooks/useWeb3";
import useGeolocation from "./hooks/useGeolocation";
import useMetaMask from "./hooks/useMetamask";

export default function App() {
  // const { items, isLoading, web3Handler, buyStoreItem, purchases, account } =
  //   useWeb3();
  // const { location } = useGeolocation();
  // const { connect, isActive, disconnect, isDisable } = useMetaMask();

  // useEffect(() => {
  //   web3Handler();
  // }, []);

  // return (
  //   <Router>
  //     <Routes>
  //       <Route
  //         path="/"
  //         element={
  //           <Home
  //             location={location}
  //             connect={connect}
  //             disconnect={disconnect}
  //             account={account}
  //             isActive={isActive}
  //             isDisable={isDisable}
  //           />
  //         }
  //       />
  //     </Routes>
  //   </Router>
  // );
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>
    </div>
  );
}

