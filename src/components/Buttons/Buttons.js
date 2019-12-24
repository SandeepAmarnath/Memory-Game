import React from "react";
import Button from "../Button/Button";
import classes from "./Buttons.module.css";

const buttons = () => (
  <div className={classes.Buttons}>
    <Button name="Add to the word" />
    <Button name="Create new word" />
  </div>
);
export default buttons;
