import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import { Context } from "./Context/Context";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./Styles/Styles.scss";

function App() {
  const [user, setUser] = useState(""); // Estado
  const [myNews, setMyNews] = useState([]);
  const [apiNews, setApiNews] = useState([]);
  const [allNews, setAllNews] = useState([]);
  //Login
  const login = (name) => {
    setUser(name);
  };

  //Logout
  const logout = () => {
    setUser("");
  };
  //Add new
  const addNew = (newNews) => {
    myNews.length === 0
      ? setMyNews([newNews])
      : setMyNews([...myNews, newNews]);
  };

  const addApiNew = (notice) => {
    setApiNews(notice);
  };

  const concatAllNews = () => {
    myNews.length === 0 ? setAllNews(apiNews) : setAllNews([...myNews, ...apiNews]);
  };

  const data = {
    allNews,
    apiNews,
    myNews,
    user,
    addNew,
    login,
    logout,
    addApiNew,
    concatAllNews,
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Context.Provider value={data}>
          <Header />
          <Main />
          <Footer />
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
