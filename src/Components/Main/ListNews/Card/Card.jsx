import React, { Component } from "react";
import { Context } from "../../../../Context/Context";
class Card extends Component {
  static contextType = Context;
  render() {
    const {title, subtitle, date, author, section, img} = this.props.data;
    return <article>
      <p>{title}</p>
      <img src={img} alt="" />
      <p>{subtitle}</p>
      <p>{author}</p>
      <p>{section}</p>
      <p>{date}</p>
    </article>;
  }
}

export default Card;
