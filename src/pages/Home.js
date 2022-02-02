import React from "react";
import Section from "../components/Section";
import Navbar from "../components/Navbar";
import Cuisine from "../components/Cuisine";
import "../styles/Home.css";

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Cuisine />
      <h2>Featured Recipes</h2>
      <Section />
      <div className="result_recipes"></div>
    </React.Fragment>
  );
}

export default Home;
