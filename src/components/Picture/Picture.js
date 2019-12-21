import React, { Component } from "react";
import classes from "./Picture.module.css";

class CustomPic extends Component {
  state = {
    cssprops: [classes.flipboxInner, classes.flip]
  };

  onFlipHandler = () => {
    const newCss = [...this.state.cssprops];
    if (newCss.includes(classes.flip)) {
      newCss.pop(classes.flip);
    } else {
      newCss.push(classes.flip);
    }
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
