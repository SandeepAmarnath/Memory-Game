import React, { Component } from "react";
import classes from "./Pictures.module.css";
import Picture from "../Picture/Picture";

class Pictures extends Component {
  render() {
    return (
      <div className={classes.Pictures}>
        <div>
          <Picture />
          <Picture />
          <Picture />
        </div>

        <div>
          <Picture />
          <Picture />
          <Picture />
        </div>
        <div>
          <Picture />
          <Picture />
          <Picture />
        </div>
      </div>
    );
  }
}

export default Pictures;
