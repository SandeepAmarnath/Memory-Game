import React, { Component } from "react";
import Pictures from "../Pictures/Pictures";
import classes from "./Gameboard.module.css";
class Gameboard extends Component {
  render() {
    return (
      <div className={classes.Gameboard}>
        <h1>Match Me</h1>
        <p>Match the words in the pictures !!</p>
        <Pictures />
      </div>
    );
  }
}

export default Gameboard;
