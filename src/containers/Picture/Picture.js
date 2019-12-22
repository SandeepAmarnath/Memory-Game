import React, { Component } from "react";
import classes from "./Picture.module.css";

class Picture extends Component {
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

  // front = (
  //   <div className={classes.flipboxFront}>
  //     <p>{this.props.word}</p>
  //   </div>
  // );

  // back = (
  //   <div className={[classes.flipboxBack, classes.turnAround].join(" ")}>
  //     <p>I'm closed. Open me</p>
  //   </div>
  // );

  render() {
    if (this.props.status === "open") {
      console.log(this.props.status + " is the status");

      this.front = (
        <div className={[classes.flipboxFront, classes.turnAround].join(" ")}>
          <p>{this.props.word}</p>
        </div>
      );

      this.back = (
        <div className={classes.flipboxBack}>
          <p>I'm closed. Open me</p>
        </div>
      );
    } else if (this.props.status === "close") {
      console.log(this.props.status + " is the status");

      this.front = (
        <div className={classes.flipboxFront}>
          <p>{this.props.word}</p>
        </div>
      );

      this.back = (
        <div className={[classes.flipboxBack, classes.turnAround].join(" ")}>
          <p>I'm closed. Open me</p>
        </div>
      );
    }

    return (
      <div
        className={this.state.cssprops.join(" ")}
        onClick={this.onFlipHandler}
      >
        {this.front}
        {this.back}
      </div>
    );
  }
}

export default Picture;
