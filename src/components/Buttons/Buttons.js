import React from "react";
import Button from "../Button/Button";
import classes from "./Buttons.module.css";

const buttons = (props) => (
  <div className={classes.Buttons}>
    <Button name="Add to the word" click={props.addWordClick} />
    <Button name="Create new word" click={props.createWordClick} />
  </div>
);
export default buttons;
