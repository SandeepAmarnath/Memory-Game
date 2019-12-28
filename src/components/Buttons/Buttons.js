import React from "react";
// import Button from "../Button/Button";
import classes from "./Buttons.module.css";
import Button from '@material-ui/core/Button';

const buttons = () => (
  <div className={classes.Buttons}>
    {/* <Button name="Add to the word" />
    <Button name="Create new word" /> */}
    <Button variant="contained" color="primary">
    Add to the word
    </Button> &nbsp;
    <Button variant="contained">Create new word</Button> <br/><br/>
    <Button variant="contained" color="primary">Check</Button>&nbsp;
    <Button variant="contained">Start Again</Button>
  </div>
);
export default buttons;
