import React from "react";
import classes from "./Word.module.css";
const word = (props) => {
  return <div className={classes.Word}>{props.word}</div>;
};

export default word;
