import React, { Component } from "react";
import { Context } from "../../../Context/Context";

class Home extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }
  login = (event) => {
    event.preventDefault(); 
    const user = event.target.user.value; // input del from
    this.setState({ user: user }); // seteo el state con user
    const login = this.context.login; // obtengo la funcion login del context
    login(user); // ejecuto loguin con el argumento user
  };
  render() {
    return (
      <div className="home">
        <h3 className="home__title">Please, enter your username ⇙</h3>
        <form className="home__form" onSubmit={this.login}>
          <input className="home__input" type="text" id="user" name="user" />
          <input className="home__button" type="submit" value="Enviar" />
          {(this.state.user) ? <p className="home__result">Logged in as: "{this.state.user}"</p> : <p className="home__result">No user yet</p>}
        </form>
      </div>
    );
  }
}

export default Home;