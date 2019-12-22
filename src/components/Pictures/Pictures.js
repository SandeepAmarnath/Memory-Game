// {...(this.props.words[0] === this.state.open
//   ? { status: this.state.img.word0.imgStatus }
//   : { status: null })}

import React, { Component } from "react";
import classes from "./Pictures.module.css";
// import Picture from "../../containers/Picture/Picture";
import { Fragment } from "react";
import TestPicture from "../../containers/TestPicture/TestPicture";

class Pictures extends Component {
  state = {
    clickedWord: "",
    // status: "close",
    test: true,
    // image: "show",
    open: null,

    img: {
      words: [
        {
          word: "thank",
          imgStatus: "hide"
        },
        {
          word: "you",
          imgStatus: "hide"
        },
        {
          word: "sandy",
          imgStatus: "hide"
        }
      ]
    }
  };

  clkWord = "";
  status = "close";

  onClickHandler = (openWord) => {
    console.log(openWord);
    this.clkWord = openWord;
    // this.setState({ clickedWord: openWord });
    if (this.state.test) this.setState({ test: false });
    else this.setState({ test: true });
  };

  imageClickHandler = (openWord) => {
    // this.setState({ open: openWord });
    // console.log(openWord);
    // if (this.state.image === "show") {
    //   this.setState({ image: "hide" });
    // } else {
    //   this.setState({ image: "show" });
    // }

    // this.setState({ open: openWord });
    console.log(openWord + " is the open word");

    // const newState = { ...this.state };
    // const newStateImg = { ...newState.img };
    // const newStateImgWords = [...newStateImg.words];

    // const newState = Object.create(this.state);

    // deep copy
    const newState = JSON.parse(JSON.stringify(this.state));

    for (let word of newState.img.words) {
      console.log("Image status is ", word.imgStatus);
      if (word.word === openWord) {
        // console.log("RIGHT");
        word.imgStatus = "show";
      } else {
        word.imgStatus = "hide";
      }
    }

    console.log(this.state);
    console.log(newState);

    this.setState({ img: newState.img });
  };

  render() {
    return (
      <Fragment>
        <div className={classes.Pictures}>
          <div>
            <button>Add To The Word</button>
            <button>New Word</button>
          </div>
          <div>
            <div>
              <TestPicture
                word={this.state.img.words[0].word}
                click={this.imageClickHandler}
                // {...    { this.props.words[0]==="stand"?{ status: this.state.image } :{status:null}}}

                // {...(this.props.words[0] === this.state.open
                //   ? { status: this.state.img.word0.imgStatus }
                //   : { status: null })}

                {...{ status: this.state.img.words[0].imgStatus }}
              />
              <TestPicture
                word={this.state.img.words[1].word}
                click={this.imageClickHandler}
                // {...{ status: this.state.image }}
                // {...(this.props.words[1] === this.state.open
                //   ? { status: this.state.image }
                //   : null)}
                {...{ status: this.state.img.words[1].imgStatus }}
              />
              <TestPicture
                word={this.state.img.words[2].word}
                click={this.imageClickHandler}
                // {...{ status: this.state.image }}
                // {...(this.props.words[2] === this.state.open
                //   ? { status: "open" }
                //   : { status: "close" })}
                {...{ status: this.state.img.words[2].imgStatus }}
              />
            </div>

            {/* <Picture
              word={this.props.words[0]}
              click={this.onClickHandler}
              // {...{ status: this.state.status }}

              {...(this.clkWord === this.props.words[0]
                ? { status: "open" }
                : { status: "close" })}
              {...this.state.test}

              // <Child {...(this.props.editable ? {editable: {this.props.editableOpts}} : undefined)} >
            />
            <Picture
              word={this.props.words[1]}
              click={this.onClickHandler}
              // {...{ status: this.state.status }}
              // {...(this.state.clickedWord === this.props.words[1]
              //   ? { status: "open" }
              //   : { status: "close" })}
            />
            <Picture
              word={this.props.words[2]}
              click={this.onClickHandler}
              // {...{ status: this.state.status }}
              // {...(this.state.clickedWord === this.props.words[2]
              //   ? { status: "open" }
              //   : { status: "close" })}
            />
          </div>

          <div>
            <Picture
              word={this.props.words[3]}
              click={this.onClickHandler}
              // {...{ status: this.state.status }}
            />
            <Picture
              word={this.props.words[4]}
              click={this.onClickHandler}
              // {...{ status: this.state.status }}
            />
            <Picture
              word={this.props.words[5]}
              click={this.onClickHandler}
              // {...{ status: this.state.status }}
            />
          </div>
          <div>
            <Picture
              word={this.props.words[6]}
              click={this.onClickHandler}
              // {...{ status: this.state.status }}
            />
            <Picture
              word={this.props.words[7]}
              click={this.onClickHandler}
              // {...{ status: this.state.status }}
            />
            <Picture
              word={this.props.words[8]}
              click={this.onClickHandler}
              // {...{ status: this.state.status }}
            /> */}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Pictures;
