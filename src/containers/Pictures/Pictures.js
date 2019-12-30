import React, { Component } from "react";
import classes from "./Pictures.module.css";
import Picture from "../../components/Picture/Picture";

class Pictures extends Component {
  // words = stand, ing, cow,ard, hard,ship,space,craft,yard
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
          word: "ing",
          imgStatus: "hide"
        },
        {
          word: "cow",
          imgStatus: "hide"
        },
        {
          word: "ship",
          imgStatus: "hide"
        },
        {
          word: "hard",
          imgStatus: "hide"
        },
        {
          word: "craft",
          imgStatus: "hide"
        },
        {
          word: "yard",
          imgStatus: "hide"
        },
        {
          word: "space",
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
    console.log(this.props.openWord);

    return (
      <div className={classes.Pictures}>
        <div>
          <div className={classes.PictureRow}>
            <Picture
              word={this.state.img.words[0].word}
              click={this.imageClickHandler}
              {...{ status: this.state.img.words[0].imgStatus }}
              {...(this.props.hiddenWords.includes(this.state.img.words[0].word)
                ? { invisible: true }
                : { invisible: false })}
            />
            <Picture
              word={this.state.img.words[1].word}
              click={this.imageClickHandler}
              {...{ status: this.state.img.words[1].imgStatus }}
              {...(this.props.hiddenWords.includes(this.state.img.words[1].word)
                ? { invisible: true }
                : { invisible: false })}
            />
            <Picture
              word={this.state.img.words[2].word}
              click={this.imageClickHandler}
              {...{ status: this.state.img.words[2].imgStatus }}
              {...(this.props.hiddenWords.includes(this.state.img.words[2].word)
                ? { invisible: true }
                : { invisible: false })}
            />
          </div>

          <div className={classes.PictureRow}>
            <Picture
              word={this.state.img.words[3].word}
              click={this.imageClickHandler}
              {...{ status: this.state.img.words[3].imgStatus }}
              {...(this.props.hiddenWords.includes(this.state.img.words[3].word)
                ? { invisible: true }
                : { invisible: false })}
            />
            <Picture
              word={this.state.img.words[4].word}
              click={this.imageClickHandler}
              {...{ status: this.state.img.words[4].imgStatus }}
              {...(this.props.hiddenWords.includes(this.state.img.words[4].word)
                ? { invisible: true }
                : { invisible: false })}
            />
            <Picture
              word={this.state.img.words[5].word}
              click={this.imageClickHandler}
              {...{ status: this.state.img.words[5].imgStatus }}
              {...(this.props.hiddenWords.includes(this.state.img.words[5].word)
                ? { invisible: true }
                : { invisible: false })}
            />
          </div>
          <div className={classes.PictureRow}>
            <Picture
              word={this.state.img.words[6].word}
              click={this.imageClickHandler}
              {...{ status: this.state.img.words[6].imgStatus }}
              {...(this.props.hiddenWords.includes(this.state.img.words[6].word)
                ? { invisible: true }
                : { invisible: false })}
            />
            <Picture
              word={this.state.img.words[7].word}
              click={this.imageClickHandler}
              {...{ status: this.state.img.words[7].imgStatus }}
              {...(this.props.hiddenWords.includes(this.state.img.words[7].word)
                ? { invisible: true }
                : { invisible: false })}
            />
            <Picture
              word={this.state.img.words[8].word}
              click={this.imageClickHandler}
              {...{ status: this.state.img.words[8].imgStatus }}
              {...(this.props.hiddenWords.includes(this.state.img.words[8].word)
                ? { invisible: true }
                : { invisible: false })}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Pictures;
//Test vijay