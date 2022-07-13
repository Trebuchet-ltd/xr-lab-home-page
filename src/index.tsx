import "./bootstrap.css";

import ReactDOM from "react-dom";
import {Workbox} from "workbox-window";
import {BrowserRouter, Route, Routes} from "react-router-dom";


import HandleToken from "./pages/HandleToken";
import Home from "./pages/Home/index";
import Members from "./pages/members/index";
import {HandleAppState} from "./components/HandleAppState";
import ContactUs from "./pages/contactUs/ContactUs";
import About from "./pages/about/About";

const wb = new Workbox("/sw.js");

const isProduction = location.hostname !== "localhost" && location.protocol !== "http:" && "serviceWorker" in navigator;

if (isProduction)
    wb.register().catch(console.error);


function App()
{
    return (
        <>
            {isProduction && <HandleAppState wb={wb}/>}
            <BrowserRouter>
                <Routes>
                    <Route path="/set_token" element={<HandleToken/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/members" element={<Members/>} />
                    <Route path="/contact" element={<ContactUs/>} />
                    <Route path="/about" element={<About/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));
