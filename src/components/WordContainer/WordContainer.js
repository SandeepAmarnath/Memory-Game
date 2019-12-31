import React from "react";
import classes from "./WordContainer.module.css";
import WordsRow from "../WordsRow/WordsRow";

const wordcontainer = (props) => {
  const allWords = props.words;
  let styles = [classes.WordContainer];
  if (allWords.length === 0) {
    styles.push(classes.hideWordContainer);
  } else {
    if (styles.includes(classes.hideWordContainer)) {
      styles.pop(classes.hideWordContainer);
    }
  }
  return (
    <div className={styles.join(" ")}>
      <h4 className={classes.WordsSelectedText}>Words Selected</h4>
      {allWords.map((wordsSet, index) => {
        return (
          <WordsRow
            key={index}
            words={wordsSet}
            iconClick={props.iconClick.bind(this, index, wordsSet)}
          />
        );
      })}
    </div>
  );
};
export default wordcontainer;
