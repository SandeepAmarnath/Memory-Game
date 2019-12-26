import React from "react";
import Word from "../Word/Word";
import classes from "./Words.module.css";

const Words = (props) => {
  return (
    <div className={classes.Words}>
      <Word word={"Word 1"} />
      <Word word={"Word 2"} />
    </div>
  );
};

export default Words;
