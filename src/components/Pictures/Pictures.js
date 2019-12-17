import React, { Component } from "react";
import classes from "./Pictures.module.css";
import Picture from "../Picture/Picture";

class Pictures extends Component {
  state = {
    words: [
      "carbon",
      "nitro",
      "oxy",
      "gen",
      "dioxide",
      "free",
      "cat",
      "kit",
      "chen"
    ]
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
      <div className={classes.Pictures}>
        <div>
          <Picture word={this.state.words[0]} />
          <Picture word={this.state.words[1]} />
          <Picture word={this.state.words[2]} />
        </div>

        <div>
          <Picture word={this.state.words[3]} />
          <Picture word={this.state.words[4]} />
          <Picture word={this.state.words[5]} />
        </div>
        <div>
          <Picture word={this.state.words[6]} />
          <Picture word={this.state.words[7]} />
          <Picture word={this.state.words[8]} />
        </div>
      </div>
    );
  }
}

export default Pictures;
