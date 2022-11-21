import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Intro from "./Intro";
import Skills from "./Skills";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Intro />
    <Skills />
    <Gallery />
    <Contact />
    <Footer />
  </React.StrictMode>
);
