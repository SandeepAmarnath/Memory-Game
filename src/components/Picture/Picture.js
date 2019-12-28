import React, { Component } from "react";
import classes from "./Picture.module.css";

class Picture extends Component {
  render() {
    const styles = [classes.Picture, classes.show];
    let word = this.props.word;
    if (this.props.status === "hide") {
      styles.pop(classes.show);
      styles.push(classes.hide);
      word = "cheating uh";

      // if (styles.includes(classes.hidePic)) {
      //   styles.pop(classes.hidePic);
      // }
    } else if (this.props.status === "show") {
      styles.pop(classes.hide);
      styles.push(classes.show);
      word = this.props.word;
    }

    if (this.props.invisible) {
      styles.push(classes.hidePic);
    }

    return (
      <div
        onClick={this.props.click.bind(this, this.props.word)}
        className={styles.join(" ")}
      >
        <div>
          <h3>{word}</h3>
        </div>
      </div>
    );
  }
}

export default Picture;
