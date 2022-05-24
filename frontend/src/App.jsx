import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import UserCollection from "./views/UserCollection";

import useGeolocation from "./hooks/useGeolocation";

export default function App() {
  {/* const { location } = useGeolocation(); */}

  return (
    <Router>
      <div className="bg-black w-full min-h-screen overflow-hidden">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/mycollection"
            element={<UserCollection/>}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
