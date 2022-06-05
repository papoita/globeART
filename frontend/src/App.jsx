import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@rainbow-me/rainbowkit/styles.css";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import MyCollection from "./views/MyCollection";

const infuraId = process.env.INFURA_ID;
const alchemyId = process.env.ALCHEMY_ID;

const { chains, provider } = configureChains(
  [chain.polygon, chain.hardhat, chain.localhost, chain.rinkeby],
  [
    alchemyProvider({ alchemyId }),
    infuraProvider({ infuraId }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "Trotter",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App() {

  const [account, setAccount] = useState(null);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        theme={darkTheme({
          accentColor: "#7b3fe4",
          accentColorForeground: "white",
        })}
        chains={chains}
      >
        <Router>
          <div className="bg-black w-full min-h-screen overflow-hidden">
            <Navbar account={account} setAccount={setAccount} />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                path="/mycollection"
                element={<MyCollection account={account} />}
              />
            </Routes>
            <Footer />
          </div>
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
