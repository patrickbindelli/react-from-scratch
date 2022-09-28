import React from "react";
import praia from "../../public/praia.jpg";
import "./style.css";

export const ComponentTest = () => (
  <div className="container">
    <div className="classe">Hello, React!</div>
    <img src={praia} />
  </div>
);
