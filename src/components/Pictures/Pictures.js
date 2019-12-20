import React, { Component } from "react";
import classes from "./Pictures.module.css";
import Picture from "../../containers/Picture/Picture";
import { Fragment } from "react";

class Pictures extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <div className={classes.Pictures}>
          <div>
            <button>Add To The Word</button>
            <button>New Word</button>
          </div>
          <div>
            <Picture word={this.props.words[0]} click={this.props.click} />
            <Picture word={this.props.words[1]} click={this.props.click} />
            <Picture word={this.props.words[2]} click={this.props.click} />
          </div>

          <div>
            <Picture word={this.props.words[3]} click={this.props.click} />
            <Picture word={this.props.words[4]} click={this.props.click} />
            <Picture word={this.props.words[5]} click={this.props.click} />
          </div>
          <div>
            <Picture word={this.props.words[6]} click={this.props.click} open />
            <Picture word={this.props.words[7]} click={this.props.click} open />
            <Picture word={this.props.words[8]} click={this.props.click} open />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Pictures;
