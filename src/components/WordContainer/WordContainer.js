import React from "react";
import classes from "./WordContainer.module.css";
import WordsRow from "../WordsRow/WordsRow";

const wordcontainer = (props) => {
  return (
    <div className={classes.WordContainer}>
      <h4>Words Selected</h4>
      <WordsRow />
    </div>
  );
};
export default wordcontainer;
