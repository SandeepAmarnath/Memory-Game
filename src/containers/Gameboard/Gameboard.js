import React, { Component } from "react";
import Pictures from "../../components/Pictures/Pictures";
import classes from "./Gameboard.module.css";
import Pic from "../Pic/Pic";
import Buttons from "../../components/Buttons/Buttons";
import WordContainer from "../../components/WordContainer/WordContainer";
class Gameboard extends Component {
  state = {
    existingWord: [],
    newWord: null,
    createdWords: []
  };
  // Steps:
  // 1. Create new word -> existing word array should be pushed to the createdWords
  // 2. Existing word array should become empty
  // 3. New word should be pushed to the exisitng word
  createWordClickHandler = () => {
    console.log("Clicked create word handler");
    // create a new array and push this word

    const newWordArray = [];
    newWordArray.push("New Word");

    // then push this array to the created words array
    // to do this, copy the state words and then push this array into it and then set state
    const wordsCopy = [...this.state.createdWords];
    wordsCopy.push(newWordArray);
    this.setState({ createdWords: wordsCopy });
    console.log(this.state.createdWords);
  };

  addWordClickHandler = () => {
    // To add to the existing, copy the state words
    // Then add this word to the last array . NOTE : DO THIS IS A IMMUTABLE WAY

    const wordsCopy = JSON.parse(JSON.stringify(this.state.createdWords));
    const lastElementArray = wordsCopy[wordsCopy.length - 1];
    lastElementArray.push("Existing word");
    this.setState({ createdWords: wordsCopy });
    console.log(this.state.createdWords);
  };
  render() {
    return (
      <div className={classes.Gameboard}>
        <h1>Match Me</h1>
        <p>Match the words in the pictures !!</p>
        <Buttons
          addWordClick={this.addWordClickHandler}
          createWordClick={this.createWordClickHandler}
        />
        <Pictures />
        <WordContainer word="word" />
      </div>
    );
  }
}

export default Gameboard;

// state = {
//   words: ["stand", "ard", "y", "ing", "sing", "ase", "er", "le", "sky"],
//   cssprop: "open"
// };
// shuffle = (array) => {
//   let counter = array.length;

//   // While there are elements in the array
//   while (counter > 0) {
//     // Pick a random index
//     let index = Math.floor(Math.random() * counter);

//     // Decrease counter by 1
//     counter--;

//     // And swap the last element with it
//     let temp = array[counter];
//     array[counter] = array[index];
//     array[index] = temp;
//   }

//   return array;
// };
// componentDidMount() {
//   const newWords = [...this.state.words];
//   const shuffledWords = this.shuffle(newWords);
//   console.log("Called cdm");
//   this.setState({ words: shuffledWords });
// }
