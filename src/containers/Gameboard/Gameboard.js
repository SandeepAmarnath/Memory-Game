import React, { Component } from "react";
import classes from "./Gameboard.module.css";
import Buttons from "../../components/Buttons/Buttons";
import Board from "../../components/Board/Board";
class Gameboard extends Component {
  state = {
    addWordEligible: false,
    createdWords: [],
    openWord: null
  };

  createWordClickHandler = () => {
    // create a new array and push this word
    // then push this array to the created words array
    // to do this, copy the state words and then push this array into it and then set state

    const newWordArray = [];
    newWordArray.push(this.state.openWord);
    const wordsCopy = [...this.state.createdWords];
    wordsCopy.push(newWordArray);
    this.setState({
      createdWords: wordsCopy,
      addWordEligible: true
    });
  };

  addWordClickHandler = () => {
    // To add to the existing, copy the state words
    // Then add this word to the last array . NOTE : DO THIS IS A IMMUTABLE WAY

    const wordsCopy = JSON.parse(JSON.stringify(this.state.createdWords));
    const lastElementArray = wordsCopy[wordsCopy.length - 1];
    lastElementArray.push(this.state.openWord);
    this.setState({
      createdWords: wordsCopy
    });
  };

  clikedWordHandler = (openWord) => {
    console.log("The open word is ", openWord);
    this.setState({ openWord: openWord });
  };

  render() {
    return (
      <div className={classes.Gameboard}>
        <h1>Match Me</h1>
        <Buttons
          addWordClick={this.addWordClickHandler}
          createWordClick={this.createWordClickHandler}
          {...{
            status: this.state.openWord
          }}
          btnShow={this.state.addWordEligible}
        />
        <Board
          clickedWord={this.clikedWordHandler}
          words={this.state.createdWords}
        />
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
