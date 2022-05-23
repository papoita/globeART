import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import UserCollection from "./views/UserCollection";

import useWeb3 from "./hooks/useWeb3";
import useGeolocation from "./hooks/useGeolocation";

export default function App() {
  const { items, isLoading, web3Handler, buyStoreItem, purchases } = useWeb3();
  const { location } = useGeolocation();

  useEffect(() => {
    web3Handler();
  }, []);

  console.log("LOCATION:", location);

  return (
    <Router>
      <div className="bg-black w-full min-h-screen overflow-hidden">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/mycollection"
            element={<UserCollection purchases={purchases} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
