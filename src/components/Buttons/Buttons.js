import React from "react";
import Button from "../Button/Button";
import classes from "./Buttons.module.css";

const buttons = (props) => (
  <div className={classes.Buttons}>
    <Button
      name="Add to the word"
      click={props.addWordClick}
      status={props.status}
    />
    <Button
      name="Create new word"
      click={props.createWordClick}
      status={props.status}
    />
  </div>
);
export default buttons;
