import React, { Component } from "react";
import classes from "./Gameboard.module.css";
import Buttons from "../../components/Buttons/Buttons";
import Board from "../../components/Board/Board";
import { wordLibrary } from "../../components/WordLibrary/WordLibrary";

class Gameboard extends Component {
  state = {
    wordLibrary: wordLibrary,
    addWordEligible: false,
    createdWords: [],
    openWord: null,
    hiddenWords: [],
    wordAddable: true,
    matchEligible: false,
    finalizedWords: []
  };

  createWordClickHandler = () => {
    const hiddenWords = [...this.state.hiddenWords];
    const flattendWords = [...this.state.hiddenWords.flat(Infinity)];
    if (flattendWords.includes(this.state.openWord)) {
      this.setState({ wordAddable: false });
      return;
    }
    hiddenWords.push(this.state.openWord);
    const newWordArray = [];
    newWordArray.push(this.state.openWord);
    const wordsCopy = [...this.state.createdWords];
    wordsCopy.push(newWordArray);
    this.setState({
      createdWords: wordsCopy,
      addWordEligible: true,
      hiddenWords: hiddenWords,
      wordAddable: true
    });
  };

  addWordClickHandler = () => {
    const hiddenWords = [...this.state.hiddenWords];
    const flattendWords = [...this.state.hiddenWords.flat(Infinity)];
    if (flattendWords.includes(this.state.openWord)) {
      this.setState({ wordAddable: false });
      return;
    }
    hiddenWords.push(this.state.openWord);
    const wordsCopy = JSON.parse(JSON.stringify(this.state.createdWords));
    const lastElementArray = wordsCopy[wordsCopy.length - 1];
    lastElementArray.push(this.state.openWord);
    this.setState({
      createdWords: wordsCopy,
      hiddenWords: hiddenWords,
      wordAddable: true
    });
  };

  clikedWordHandler = (openWord) => {
    this.setState({ openWord: openWord });
  };

  rowDeleteHandler = (rowIndex, wordsSet) => {
    const hiddenWords = [...this.state.hiddenWords];
    const updatedHiddenWords = hiddenWords.filter(
      (element) => !wordsSet.includes(element)
    );
    const wordsCreated = [...this.state.createdWords];
    wordsCreated.splice(rowIndex, 1);
    this.setState({
      createdWords: wordsCreated,
      hiddenWords: updatedHiddenWords
    });

    if (updatedHiddenWords.length === 0) {
      this.setState({ addWordEligible: false });
    }
  };

  matchWordsHandler = () => {
    const words = [];
    const createdWords = [...this.state.createdWords];
    createdWords.map((individualArr) => {
      return words.push(individualArr.join(""));
    });
    this.setState({ finalizedWords: words });
    const myWords = wordLibrary.solutions;
    let allFounded = myWords.every((ai) => words.includes(ai));
    if (allFounded) {
      alert("YOU WIN, CONGRATS!! THE WORDS ARE :  \n\n\n" + myWords.join("\n"));
    } else {
      alert("YOU LOST, SORRY :( THE WORDS ARE \n\n\n" + myWords.join("\n"));
    }
    window.location.reload();
  };

  render() {
    return (
      <div className={classes.Gameboard}>
        <h1>Match Me</h1>
        <p
          className={classes.message}
          style={{ letterSpacing: "0.5px", color: "white" }}
        >
          Join to make{" "}
          <span
            style={{ fontWeight: "bold", color: "yellow", fontSize: "larger" }}
          >
            {wordLibrary.solutions.length}
          </span>{" "}
          words out of 9 subwords in the grid
        </p>
        <Buttons
          addWordClick={this.addWordClickHandler}
          createWordClick={this.createWordClickHandler}
          matchWordsClick={this.matchWordsHandler}
          status={this.state.openWord}
          btnShow={this.state.addWordEligible}
          wordAddable={this.state.wordAddable}
          matchWordEligible={this.state.addWordEligible}
        />
        <Board
          wordLibrary={this.state.wordLibrary}
          clickedWord={this.clikedWordHandler}
          words={this.state.createdWords}
          status={this.state.addWordEligible}
          openWord={this.state.openWord}
          hiddenWords={this.state.hiddenWords}
          iconClick={this.rowDeleteHandler}
        />
      </div>
    );
  }
}

export default Gameboard;
