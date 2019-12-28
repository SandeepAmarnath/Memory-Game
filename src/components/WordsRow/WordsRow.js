import React from "react";
import Word from "../Word/Word";
import classes from "./WordsRow.module.css";

const WordsRow = (props) => {
  return (
    <div className={classes.WordsRow}>
      {props.words.map((word) => {
        return <Word key={word} word={word} />;
      })}
      <div onClick={props.iconClick} className={classes.icon}>
        <i className={["far", "fa-window-close"].join(" ")}></i>
      </div>
    </div>
  );
};

export default WordsRow;
