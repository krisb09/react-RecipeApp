import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";
import Section from "./components/Section";
import Axios from "axios";
import "reactstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" exact element={<Recipes />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
