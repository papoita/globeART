//any global changes concerning visuals
import React from "react";
import { createRoot } from 'react-dom/client';

import "./index.css";
import "@fontsource/shrikhand"
import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
