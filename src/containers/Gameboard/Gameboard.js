import React, { Component } from "react";
import Pictures from "../../components/Pictures/Pictures";
import classes from "./Gameboard.module.css";
import Pic from "../Pic/Pic";
import Buttons from "../../components/Buttons/Buttons";
import WordContainer from "../../components/WordContainer/WordContainer";
class Gameboard extends Component {
  state = {
    words: ["stand", "ard", "y", "ing", "sing", "ase", "er", "le", "sky"],
    cssprop: "open"
  };
  shuffle = (array) => {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  };
  componentDidMount() {
    const newWords = [...this.state.words];
    const shuffledWords = this.shuffle(newWords);
    console.log("Called cdm");
    this.setState({ words: shuffledWords });
  }

  render() {
    return (
      <div className={classes.Gameboard}>
        <h1>Match Me</h1>
        <p>Match the words in the pictures !!</p>
        <Buttons />
        <Pictures words={this.state.words} />
        {/* <WordContainer /> */}
      </div>
    );
  }
}

export default Gameboard;
