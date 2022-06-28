//any global changes concerning visuals
import { createRoot } from 'react-dom/client';

import "./index.css";
import "@fontsource/shrikhand"
import "@fontsource/urbanist"
import App from "./App";

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App/>);
