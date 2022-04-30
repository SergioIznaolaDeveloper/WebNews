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
    const content = event.target.content.value; // input del from
    const section = event.target.section.value; // input del from
    const author = event.target.author.value; // input del from
    const date = event.target.date.value; // input del from
    const img = event.target.img.value; // input del from
    const add = this.context.addNew // obtengo la funcion addNew del context
    const newNotice = {title: title, subtitle: subtitle, content:content, section:section, author: author, date:date, img: img }; // seteo el state con user
    this.setState({ myNews: newNotice }); // seteo el state con noticia
    add(newNotice); // ejecuto loguin con el argumento user
  };
  render() {
    return (
      <section>
        <p>NUEVA NOTICIA</p>
        <form className="form" onSubmit={this.addNew}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" /><br />
          <label htmlFor="subtitle">Subtitle:</label>
          <input type="text" id="subtitle" name="subtitle" /><br />
          <label htmlFor="content">Content:</label>
          <input type="text" id="content" name="content" /><br />
          <label htmlFor="section">Section:</label>
          <input type="text" id="section" name="section" /><br />
          <label htmlFor="author">Written by:</label>
          <input type="text" id="author" name="author" /><br />
          <label htmlFor="date">Date:</label>
          <input type="text" id="date" name="date" /><br />
          <label htmlFor="img">Image:</label>
          <input type="text" id="img" name="img" /><br />
          <input type="submit" value="Enviar" />
        </form>.
        {this.state.myNews.title  ? (
          <>
          <p>Noticia agregada</p>
          <p>{this.state.myNews.title}</p>
          <p>{this.state.myNews.subtitle}</p>
          <p>{this.state.myNews.content}</p>
          <p>{this.state.myNews.author}</p>
          <p>{this.state.myNews.section}</p>
          <p>{this.state.myNews.date}</p>
          <img src={this.state.img} alt="" />
          </>
        
        ) 
        : ("")}
      </section>
    );
  }
}

export default Form;
