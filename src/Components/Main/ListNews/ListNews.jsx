import React, { Component } from "react";
import { Context } from "../../../Context/Context";
import Card from "./Card/Card";
const apyKey = process.env.REACT_APP_API_KEY;
class ListNews extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      newConvert: "",
      allNews: "",
    };
  }

  async componentDidMount() {
    try {
      //simular un retardo de 3 segundos en la aparacicion de fetch
      await new Promise((resolve) =>
        setTimeout(() => resolve("Terminado"), 4000)
      );
      const resp = await fetch(
        `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${apyKey}`
      );
      const data = await resp.json();
      const apiNews = data.results;
      const notice = await apiNews.map((n) => ({
        title: n.title,
        subtitle: n.abstract,
        section: n.section,
        author: n.byline,
        date: n.published_date,
        img: n.media[0]["media-metadata"][2].url,
      }));
      const add = this.context.addApiNew;
      add(notice);
      const concat = this.context.concatAllNews;
      concat();
    } catch (e) {
      console.log(e);
    }
  }
  paintNews = () =>
    this.context.allNews.map((n, i) => (
      <Card data={n} key={i} />
    ));

  render() {
    return <section>{this.paintNews()}</section>;
  }
}

export default ListNews;
