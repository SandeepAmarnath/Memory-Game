import React from "react";
import Word from "../Word/Word";
import classes from "./WordsRow.module.css";

const WordsRow = (props) => {
  return (
    <div className={classes.WordsRow}>
      <Word word={"Word 1"} />
      <Word word={"Word 1"} />
    </div>
  );
};

export default WordsRow;
