import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./components/Home.jsx";
import Cat from "./components/Cat";
import Dog from "./components/Dog.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
