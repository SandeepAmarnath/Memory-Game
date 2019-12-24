import React, { Component, Fragment } from "react";
import classes from "./Pic.module.css";

class Pic extends Component {
  state = {
    mycss: [classes.FlipBoxInner],
    back: [classes.FlipBoxInner, classes.rotate],
    front: [classes.FlipBoxInner]
  };

  mycss = { ...this.state };
  onImageHandler = () => {
    this.props.click(this.props.word);
    if (this.mycss.mycss.includes(classes.rotate)) {
      this.mycss.mycss.pop(classes.rotate);
    } else {
      this.mycss.mycss.push(classes.rotate);
    }
    this.setState({ mycss: this.mycss });
  };

  render() {
    let front = null;

    let back = null;
    let card = null;
    if (this.props.status === "hide") {
      console.log("HIDE");
      card = (
        <div className={[classes.FlipBoxInner, classes.rotate].join(" ")}>
          <div className={[classes.FlipBoxFront].join(" ")}>
            <p>Front</p>
          </div>
          <div className={[classes.FlipBoxBack].join(" ")}>
            <p>Back</p>
          </div>
        </div>
      );
    } else if (this.props.status === "show") {
      console.log("SHOW");
      card = (
        <div className={[classes.FlipBoxInner]}>
          <div className={[classes.FlipBoxFront].join(" ")}>
            <p>Front</p>
          </div>
          <div className={[classes.FlipBoxBack, classes.rotate].join(" ")}>
            <p>Back</p>
          </div>
        </div>
      );
    }

    // if (this.props.status === "hide") {
    // console.log("hide h");
    // front = (
    //   <div className={[classes.FlipBoxFront].join(" ")}>
    //     <p>Front</p>
    //   </div>
    // );
    // back = (

    //   <div className={[classes.FlipBoxBack].join(" ")}>
    //     <p>Back</p>
    //   </div>
    // );
    // } else if (this.props.status === "show") {
    // console.log("show h");

    // this.mycss.push(classes.rotate);

    // front = (
    //   <div className={[classes.FlipBoxFront].join(" ")}>
    //     <p>Front</p>
    //   </div>
    // );
    // back = (

    //   <div className={[classes.FlipBoxBack].join(" ")}>
    //     <p>Back</p>
    //   </div>
    // );

    // front = (
    //   <div className={classes.FlipBoxFront}>
    //     <h1>Front</h1>
    //   </div>
    // );
    // back = (
    //   <div className={[classes.FlipBoxBack, classes.rotate].join(" ")}>
    //     <h2>Back</h2>
    //   </div>
    // );

    return (
      <Fragment>
        <div className={classes.FlipBox} onClick={this.onImageHandler}>
          {card}
        </div>
      </Fragment>
    );
  }
}

export default Pic;
