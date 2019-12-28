import React from "react";
import Word from "../Word/Word";
import classes from "./WordsRow.module.css";

const WordsRow = (props) => {
  return (
    <div className={classes.WordsRow}>
      {props.words.map((word) => {
        return <Word key={word} word={word} />;
      })}
    </div>
  );
};

export default WordsRow;
