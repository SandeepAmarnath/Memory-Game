import React from "react";
import classes from "./Word.module.css";
const word = (props) => {
  return (
    <div className={classes.Word}>
      <p>{props.word}</p>
    </div>
  );
};

export default word;
