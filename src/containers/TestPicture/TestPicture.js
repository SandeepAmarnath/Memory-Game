import React, { Component } from "react";
import classes from "./TestPicture.module.css";

class TestPicture extends Component {
  render() {
    const styles = [classes.TestPicture, classes.show];

    if (this.props.status === "hide") {
      styles.pop(classes.show);
      styles.push(classes.hide);
    } else if (this.props.status === "show") {
      styles.pop(classes.hide);
      styles.push(classes.show);
    }
    // console.log(this.props.status + "is th e");

    return (
      <div
        onClick={this.props.click.bind(this, this.props.word)}
        className={styles.join(" ")}
      >
        <div>
          <p>{this.props.word}</p>
        </div>
      </div>
    );
  }
}

export default TestPicture;
