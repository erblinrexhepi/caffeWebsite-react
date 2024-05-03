import React from "react";
import { Link } from "react-router-dom";
import Cafe from "../assets/cafe.jpg"; // Corrected import path
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Cafe})` }}>
      <div className="headerContainer">
        <h1> Daily Coffee </h1>
        <p> Welcome to a world where every cup tells a story. </p>
        <Link to="/products">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;