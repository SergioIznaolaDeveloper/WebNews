import React, { Component } from "react";
import Nav from "./Nav";
import { Context } from "../../Context/Context";
// import Logo from "../assets/logo_cakes.png";//importar imagen desde assets 
export class Header extends Component {
  render() {
    return (
      <header className="header">
        <Nav />
        <div className="header__user">
          <Context.Consumer>
            {({ user, logout }) => {
              return <>{user ? <p className="name">User: {user}</p> : ""}{user ? <button onClick={logout} className="nav__botton">Logout</button> : ""}</>;
            }}
          </Context.Consumer>
        </div>
      </header>
    );
  }
}
export default Header;