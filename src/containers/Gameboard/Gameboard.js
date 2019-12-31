import React, { Component } from "react";
import classes from "./Gameboard.module.css";
import Buttons from "../../components/Buttons/Buttons";
import Board from "../../components/Board/Board";
// import "font-awesome/css/font-awesome.min.css";
class Gameboard extends Component {
  state = {
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
    const matchableWords = [...this.state.createdWords];
    console.log("These are the matched words");
    console.log(matchableWords);

    const words = [];

    const createdWords = [...this.state.createdWords];

    createdWords.map((individualArr) => {
      return words.push(individualArr.join(""));
    });

    this.setState({ finalizedWords: words });
    console.log(words);

    const myWords = ["standing", "spacecraft", "coward", "hardship", "yard"];
    let allFounded = myWords.every((ai) => words.includes(ai));
    if (allFounded) {
      alert("You Win, congrats!! The words are \n" + myWords.join("\n"));
    } else {
      alert("You lost, sorry:( The words are \n" + myWords.join("\n"));
    }
    window.location.reload();
  };

  render() {
    return (
      <div className={classes.Gameboard}>
        <h1>Match Me</h1>
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
