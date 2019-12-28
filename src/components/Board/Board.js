import React from "react";
import Pictures from "../../containers/Pictures/Pictures";
import WordContainer from "../../components/WordContainer/WordContainer";
import classes from "./Board.module.css";

const board = (props) => {
  return (
    <div className={classes.Board}>
      {props.status ? (
        <WordContainer words={props.words} iconClick={props.iconClick} />
      ) : null}
      <Pictures
        clickedWord={props.clickedWord}
        openWord={props.openWord}
        hiddenWords={props.hiddenWords}
      />
    </div>
  );
};
export default board;
