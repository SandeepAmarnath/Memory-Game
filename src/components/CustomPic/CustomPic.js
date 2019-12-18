import React, { Component } from "react";
import classes from "./CustomPic.module.css";

class CustomPic extends Component {
  state = {
    cssprops: [classes.flipboxInner]
  };

  onFlipHandler = () => {
    const newCss = [...this.state.cssprops];
    newCss.push(classes.flip);
    this.setState({ cssprops: newCss });
  };

  render() {
    return (
      <div
        className={this.state.cssprops.join(" ")}
        onClick={this.onFlipHandler}
      >
        <div className={classes.flipboxFront}>
          <p>{this.props.word}</p>
        </div>
        <div className={classes.flipboxBack}>
          <p>Flip Me</p>
        </div>
      </div>
    );
  }
}

export default CustomPic;
