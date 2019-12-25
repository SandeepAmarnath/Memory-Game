import React from "react";
import classes from "./WordContainer.module.css";
import Word from "../Word/Word";

const wordcontainer = (props) => {
  return (
    <div className={classes.WordContainer}>
      <Word word={props.words} />
    </div>
  );
};
export default wordcontainer;
