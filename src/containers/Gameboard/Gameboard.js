import React, { Component } from "react";
import Pictures from "../../components/Pictures/Pictures";

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
