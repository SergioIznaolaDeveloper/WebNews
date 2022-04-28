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
      <div>
        <p>Contacto</p>
        <form onSubmit={this.login}>
          <label htmlFor="user">Nombre Usuario</label>
          <input type="text" id="user" name="user" />
          <input type="submit" value="Enviar" />
          {(this.state.user) ? <p>{this.state.user}</p> : <p>No hay usuario</p>}
        </form>
      </div>
    );
  }
}

export default Home;