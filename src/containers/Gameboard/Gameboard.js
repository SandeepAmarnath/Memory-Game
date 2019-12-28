import React, { Component } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



import Pictures from "../../components/Pictures/Pictures";
import ListContainer from "../../containers/ListContainer/ListContainer"
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
    this.setState({ words: shuffledWords });
  }

  render() {
    return (
      <div className={classes.Gameboard}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <h1>Match Me</h1>
        </Grid>
        <Grid item xs={12}>
        <p>Match the words in the pictures !!</p>
        </Grid>
        <Grid item xs={3}>
          <ListContainer/>
        </Grid>
        <Grid item xs={12}>
          <Pictures words={this.state.words} />
        </Grid>
        <Grid item xs={12}>
          <Buttons />
        </Grid>
      </Grid>

        
      </div>
    );
  }
}

export default Gameboard;
// This is Vijay's code