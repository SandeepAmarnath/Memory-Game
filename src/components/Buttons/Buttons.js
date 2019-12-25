import React from "react";
import Button from "../Button/Button";
import classes from "./Buttons.module.css";

const buttons = (props) => {
  return (
    <div className={classes.Buttons}>
      <Button
        name="Add to the word"
        click={props.addWordClick}
        disabled={!props.btnShow}
      />
      <Button
        name="Create new word"
        click={props.createWordClick}
        disabled={!props.status}
      />
    </div>
  );
};
export default buttons;
