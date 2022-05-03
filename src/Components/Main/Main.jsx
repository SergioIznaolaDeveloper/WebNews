import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Form from "./Form/Form";
import List from "./ListNews/ListNews";


class Main extends Component {
  render() {
    return (
      <main className="main">
        <h1 className="main__title">WELLCOME TO YOUR NEWS WEB</h1>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </main>
    );
  }
}

export default Main;
