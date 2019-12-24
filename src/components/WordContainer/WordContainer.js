import React from "react";
import classes from "./WordContainer.module.css";

const wordcontainer = (props) => {
  return (
    <div className={classes.WordContainer}>
      <p>{props.word}</p>
    </div>
  );
};
export default wordcontainer;
