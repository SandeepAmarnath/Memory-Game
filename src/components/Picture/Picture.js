import React, { Component } from "react";
import classes from "./Picture.module.css";
import { Fragment } from "react";

class Picture extends Component {
  render() {
    return (
      <div className={classes.outer}>
        <div className={classes.inner}>
          <div className={classes.Picture}>
            <p>{this.props.word}</p>
          </div>

          <div className={classes.backside}>
            <p>Back Side</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Picture;
