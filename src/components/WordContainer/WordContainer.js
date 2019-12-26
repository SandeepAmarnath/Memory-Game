import React from "react";
import classes from "./WordContainer.module.css";
import Words from "../Words/Words";

const wordcontainer = (props) => {
  return (
    <div className={classes.WordContainer}>
      <h4>Words Selected</h4>
      <Words />
    </div>
  );
};
export default wordcontainer;
