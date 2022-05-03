import React, { Component } from "react";
import { Context } from "../../../Context/Context";

class Form extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      myNews: {},
    };
  }
  addNew = (event) => {
    event.preventDefault();
    const title = event.target.title.value; // input del from
    const subtitle = event.target.subtitle.value; // input del from
    const section = event.target.section.value; // input del from
    const author = event.target.author.value; // input del from
    const date = event.target.date.value; // input del from
    const img = event.target.img.value; // input del from
    const add = this.context.addNew; // obtengo la funcion addNew del context
    const newNotice = {
      title: title,
      subtitle: subtitle,
      section: section,
      author: author,
      date: date,
      img: img,
    }; // seteo el state con user
    this.setState({ myNews: newNotice }); // seteo el state con noticia
    add(newNotice); // ejecuto loguin con el argumento user
  };
  render() {
    return (
      <section>
        <form className="form" onSubmit={this.addNew}>
          <h2 className="form__title">ADD NEW NOTICE</h2>
          <label className="form__label" htmlFor="title">Title:</label>
          <input className="form__input" type="text" id="title" name="title" />
          <label className="form__label" htmlFor="subtitle">Subtitle:</label>
          <input className="form__input" type="text" id="subtitle" name="subtitle" />
          <label className="form__label" htmlFor="section">Section:</label>
          <input className="form__input" type="text" id="section" name="section" />
          <label className="form__label" htmlFor="author">Written by:</label>
          <input className="form__input" type="text" id="author" name="author" />
          <label className="form__label" htmlFor="date">Date:</label>
          <input className="form__input" type="text" id="date" name="date" />
          <label className="form__label" htmlFor="img">Image:</label>
          <input className="form__input" type="text" id="img" name="img" />
          <input className="form__button" type="submit" value="Enviar" />
        </form>
        {this.state.myNews.title ? (
          <section>
            <p>Noticia agregada...</p>
            <article className="card">
              <h2 className="card__title">{this.state.myNews.title}</h2>
              <img
                className="card__img"
                src={this.state.myNews.img}
                alt="newImg"
              />
              <p className="card__subtitle">{this.state.myNews.subtitle}</p>
              <p className="card__subtitle">{this.state.myNews.author}</p>
              <p className="card__subtitle">{this.state.myNews.section}</p>
              <p className="card__subtitle">{this.state.myNews.date}</p>
            </article>
          </section>
        ) : (
          ""
        )}
      </section>
    );
  }
}

export default Form;
