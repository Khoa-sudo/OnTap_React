import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class AdminIndex extends Component {
  render() {
    if (localStorage.getItem("userLogin") === "admin") {
      return (
        <div>
          <p>Admin page</p>
        </div>
      );
    }
    alert('Bạn không đủ quyền truy cập admin')
    return <div>
        <Redirect to="home"/>
    </div>;
  }
}
