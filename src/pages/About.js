import React from "react";
import Story from "../assets/about.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Story})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Welcome to Daily coffe, where every cup tells a story of passion and
          perfection. We're more than just coffee enthusiasts; we're dedicated
          to sourcing the finest beans, roasting them to perfection, and
          delivering an exceptional coffee experience to your cup. Join us on a
          journey of flavor exploration and discover the difference that quality
          and craftsmanship can make in every sip.
        </p>
      </div>
    </div>
  );
}

export default About;
