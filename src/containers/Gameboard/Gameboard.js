import React, { Component } from "react";
import Pictures from "../../components/Pictures/Pictures";
import CustomPic from "../../components/CustomPic/CustomPic";
class Gameboard extends Component {
  render() {
    return (
      <div>
        <p>Match the words in the pictures !!</p>
        <Pictures />
      </div>
    );
  }
}

export default Gameboard;
