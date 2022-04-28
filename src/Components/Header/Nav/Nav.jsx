import React, { Component } from "react";
import { Link } from "react-router-dom";


class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <Link className="nav__div" to="/home">
          HOME
        </Link>{" "}
        <br />
        <Link className="nav__div" to="/form">
          FORM
        </Link>{" "}
        <br />
        <Link className="nav__div" to="/list">
          LISTNEWS
        </Link>{" "}
      </nav>
    );
  }
}


export default Nav;
