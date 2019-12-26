import React from "react";
import Pictures from "../../containers/Pictures/Pictures";
import WordContainer from "../../components/WordContainer/WordContainer";
import classes from "./Board.module.css";

const board = (props) => {
  return (
    <div className={classes.Board}>
      <WordContainer words={props.words} />
      <Pictures clickedWord={props.clickedWord} />
    </div>
  );
};
export default board;
