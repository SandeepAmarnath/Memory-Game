import React, { Component } from "react";
import classes from "./Picture.module.css";

class Picture extends Component {
  render() {
    return (
      <div className={classes.Picture}>
        <p>{this.props.word}</p>
      </div>
    );
  }
}

export default Picture;
