import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import UserCollection from "./views/UserCollection";

import useGeolocation from "./hooks/useGeolocation";

export default function App() {
  // const { location } = useGeolocation()

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/mycollection"
          element={<UserCollection />}
        />
      </Routes>
    </Router>
  );
}
