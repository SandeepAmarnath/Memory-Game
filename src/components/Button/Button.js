import React from "react";
import classes from "./Button.module.css";

const button = (props) => {
  const styles = [classes.btn];
  if (props.danger) {
    styles.push(classes.btnDanger);
  }
  return (
    <div className={classes.Button}>
      <button
        className={styles.join(" ")}
        onClick={props.click}
        disabled={props.disabled}
      >
        {props.name}
      </button>
    </div>
  );
};
export default button;
