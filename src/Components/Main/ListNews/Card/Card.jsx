import React, { Component } from "react";
import { Context } from "../../../../Context/Context";


class Card extends Component {
  static contextType = Context;
  render() {
    const {title, subtitle, date, author, section, img, link} = this.props.data;
    return <article className="card">
      <h2 className="card__title">{title}</h2>
      {link?<a target="blank" href={link}><img className="card__img"src={img} alt="" /></a>:<img className="card__img"src={img} alt="" />}
      <p className="card__subtitle">{subtitle}</p>
      <p className="card__subtitle">Written by: {author}</p>
      <p className="card__subtitle">Section: {section}</p>
      <p className="card__subtitle">Creation: {date}</p>
      <button className="card__button" onClick={this.props.remove}>Delete New</button>
    </article>;
  }
}

export default Card;
