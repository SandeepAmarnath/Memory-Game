import React, { Component } from "react";
import classes from "./Pictures.module.css";
import Pic from "../../containers/Pic/Pic";
import { Fragment } from "react";
import TestPicture from "../../containers/TestPicture/TestPicture";

class Pictures extends Component {
  state = {
    img: {
      words: [
        {
          word: "stand",
          imgStatus: "hide"
        },
        {
          word: "ard",
          imgStatus: "hide"
        },
        {
          word: "y",
          imgStatus: "hide"
        },
        {
          word: "ing",
          imgStatus: "hide"
        },
        {
          word: "sing",
          imgStatus: "hide"
        },
        {
          word: "ase",
          imgStatus: "hide"
        },
        {
          word: "er",
          imgStatus: "hide"
        },
        {
          word: "le",
          imgStatus: "hide"
        },
        {
          word: "sky",
          imgStatus: "hide"
        }
      ]
    }
  };

  imageClickHandler = (openWord) => {
    const newState = JSON.parse(JSON.stringify(this.state));

    for (let word of newState.img.words) {
      if (word.word === openWord) {
        word.imgStatus = "show";
      } else {
        word.imgStatus = "hide";
      }
    }
    this.props.clickedWord(openWord);
    this.setState({ img: newState.img });
  };

  render() {
    return (
      <Fragment>
        <div className={classes.Pictures}>
          <div>
            <div>
              <TestPicture
                word={this.state.img.words[0].word}
                click={this.imageClickHandler}
                {...{ status: this.state.img.words[0].imgStatus }}
              />
              <TestPicture
                word={this.state.img.words[1].word}
                click={this.imageClickHandler}
                {...{ status: this.state.img.words[1].imgStatus }}
              />
              <TestPicture
                word={this.state.img.words[2].word}
                click={this.imageClickHandler}
                {...{ status: this.state.img.words[2].imgStatus }}
              />
            </div>

            <div>
              <TestPicture
                word={this.state.img.words[3].word}
                click={this.imageClickHandler}
                {...{ status: this.state.img.words[3].imgStatus }}
              />
              <TestPicture
                word={this.state.img.words[4].word}
                click={this.imageClickHandler}
                {...{ status: this.state.img.words[4].imgStatus }}
              />
              <TestPicture
                word={this.state.img.words[5].word}
                click={this.imageClickHandler}
                {...{ status: this.state.img.words[5].imgStatus }}
              />
            </div>
            <div>
              <TestPicture
                word={this.state.img.words[6].word}
                click={this.imageClickHandler}
                {...{ status: this.state.img.words[6].imgStatus }}
              />
              <TestPicture
                word={this.state.img.words[7].word}
                click={this.imageClickHandler}
                {...{ status: this.state.img.words[7].imgStatus }}
              />
              <TestPicture
                word={this.state.img.words[8].word}
                click={this.imageClickHandler}
                {...{ status: this.state.img.words[8].imgStatus }}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Pictures;
