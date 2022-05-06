import React from "react";
import { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
    render() {
  const {title, subtitle, date, author, section, img, link} = this.props.data;
  return <article className="card">
    <h2 className="card__title">{title}</h2>
    {link
    ?
      img!==undefined
      ?<a target="blank" href={link}><img className="card__img"src={img} alt="" /></a>
      :<a target="blank" href={link}><img className="card__img"src="https://www.fundacioorienta.com/wp-content/uploads/2017/10/NOTICIA-TR-Diari-Calidad-de-vida.jpg" alt="" /></a>
    :
    img
      ?<img className="card__img"src={img} alt="" />
      :<img className="card__img"src="https://www.fundacioorienta.com/wp-content/uploads/2017/10/NOTICIA-TR-Diari-Calidad-de-vida.jpg" alt="" />
    }
    <p className="card__subtitle">{subtitle}</p>
    <p className="card__subtitle">Written by: {author}</p>
    <p className="card__subtitle">Section: {section}</p>
    <p className="card__subtitle">Creation: {date}</p>
    <button className="card__button" onClick={this.props.remove}>Delete New</button>
  </article>;
  }
}

export default Card;