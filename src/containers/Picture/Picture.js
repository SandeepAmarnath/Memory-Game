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
      this.props.click(this.props.word);
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
          <p>I'm closed. Open me</p>
        </div>
      </div>
    );
  }
}

export default CustomPic;