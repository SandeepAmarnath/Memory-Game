import React from "react";
import classes from "./WordContainer.module.css";
import WordsRow from "../WordsRow/WordsRow";

const wordcontainer = (props) => {
  const allWords = props.words;

  return (
    <div className={classes.WordContainer}>
      <h4>Words Selected</h4>
      {allWords.map((wordsSet, index) => {
        return (
          <WordsRow key={index} words={wordsSet} iconClick={props.iconClick} />
        );
      })}
    </div>
  );
};
export default wordcontainer;
