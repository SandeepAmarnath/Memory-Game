import React, { Component } from "react";
import Pictures from "../../components/Pictures/Pictures";
import classes from "./Gameboard.module.css";
import CustomPic from "../../components/CustomPic/CustomPic";
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
