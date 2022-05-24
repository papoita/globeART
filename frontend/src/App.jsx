import React, { useState } from "react";
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

// import useGeolocation from "./hooks/useGeolocation";

export default function App() {
  {/* const { location } = useGeolocation(); */}

  const [account, setAccount ] = useState(null);

  return (
    <Router>
      <div className="bg-black w-full min-h-screen overflow-hidden">
        <Navbar account={account} setAccount={setAccount}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/mycollection"
            element={<UserCollection account={account}/>}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
