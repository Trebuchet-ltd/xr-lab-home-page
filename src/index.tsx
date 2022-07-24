import "./bootstrap.css";

import { Workbox } from "workbox-window";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HandleToken from "./pages/HandleToken";
import Home from "./pages/Home";
import Members from "./pages/members/index";
import { HandleAppState } from "./components/HandleAppState";
import Contact from "./components/contactUs/ContactUs";
const wb = new Workbox("/sw.js");
import About from "./pages/about/about";
import {createRoot} from "react-dom/client";

const isProduction =
  location.hostname !== "localhost" &&
  location.protocol !== "http:" &&
  "serviceWorker" in navigator;

if (isProduction) wb.register().catch(console.error);

function App()
{
  return (
    <>
      {isProduction && <HandleAppState wb={wb} />}
      <BrowserRouter>
        <Routes>
          <Route path="/set_token" element={<HandleToken />} />
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const render = createRoot(document.getElementById("root") as HTMLDivElement);
render.render(<App />);
