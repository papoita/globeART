import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import useWeb3 from "./hooks/useWeb3";
import useGeolocation from "./hooks/useGeolocation";
import useMetaMask from "./hooks/useMetamask";

function App() {
  const { items, isLoading, web3Handler, buyStoreItem, purchases, account } =
    useWeb3();
  const { location } = useGeolocation();
  const { connect, isActive, disconnect, isDisable } = useMetaMask();

  useEffect(() => {
    web3Handler();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              location={location}
              connect={connect}
              disconnect={disconnect}
              account={account}
              isActive={isActive}
              isDisable={isDisable}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
