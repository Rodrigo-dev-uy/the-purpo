import React from "react";
import { Routes, Route } from "react-router-dom";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Home from "./components/Home";
import Cat from "./components/Cat";
import Dog from "./components/Dog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <ParallaxProvider>
      <div className="app-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cat" element={<Cat />} />
            <Route path="/dog" element={<Dog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="parallax-section">
          <Parallax y={[-10, 10]} tagOuter="figure">
            <Cat />
            <Dog />
            <Contact />
            <Footer />
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
