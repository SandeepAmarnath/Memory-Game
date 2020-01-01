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
        openWord={props.status}
      />
      <Button
        name="Create new word"
        click={props.createWordClick}
        disabled={!props.status}
        openWord={props.status}
      />
      <Button
        name="Match the words"
        click={props.matchWordsClick}
        disabled={!props.matchWordEligible}
        danger
      />
    </div>
  );
};
export default buttons;
