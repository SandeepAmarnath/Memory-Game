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
    // create a new array and push this word
    // then push this array to the created words array
    // to do this, copy the state words and then push this array into it and then set state
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
    // here once the word is added or created, it should become invisble on the board. Also, if this word is deleted
    // on the left pannel then this word should again become visible on the board. So we pass css to the word through
    // the click of this handler

    // if (this.state.createdWords.length === 9) {
    //   this.setState({ matchEligible: true });
    // }
  };

  addWordClickHandler = () => {
    // console.log(this.state.createdWords.length);

    // To add to the existing, copy the state words
    // Then add this word to the last array . NOTE : DO THIS IS A IMMUTABLE WAY
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

    // here once the word is added or created, it should become invisble on the board. Also, if this word is deleted
    // on the left pannel then this word should again become visible on the board. So we pass css to the word through
    // the click of this handler

    // if (this.state.createdWords.length === 9) {
    //   this.setState({ matchEligible: true });
    // }
  };

  clikedWordHandler = (openWord) => {
    this.setState({ openWord: openWord });
  };

  rowDeleteHandler = (rowIndex, wordsSet) => {
    // I should first remove all these words from the hidden words array so that it
    // gains back its visibility on the board
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
          {...{
            status: this.state.openWord
          }}
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
