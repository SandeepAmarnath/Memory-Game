import React, { Fragment } from "react";
import classes from "./Word.module.css";
const word = (props) => {
  return (
    <div className={classes.Word}>
      <li>{props.word}</li>
    </div>
  );
};

export default word;
