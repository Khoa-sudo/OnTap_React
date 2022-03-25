import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <div>
        Home
        <button
          className="link"
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          Trở về
        </button>
        <br />
        <NavLink to={"/home"}>Go back</NavLink>
      </div>
    );
  }
}
