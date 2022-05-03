import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
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
  //Add self news
  const addNew = (newNews) => {
    myNews.length === 0
      ? setMyNews([newNews])
      : setMyNews([...myNews, newNews]);
  };
  //Add api news
  const addApiNew = (notice) => {
    setApiNews(notice)
  };
  //Contact api & self news in context all news
  const concatAllNews = () => {
    myNews.length === 0
      ? setAllNews(apiNews)
      : setAllNews([...myNews, ...apiNews]);
  };

  const removeOne = (i) => {
    const remainingNews = allNews.filter((n, j) => i !== j);
    console.log(remainingNews);
    setAllNews(remainingNews);
  };

  const data = {
    allNews,
    apiNews,
    myNews,
    user,
    removeOne,
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
        </Context.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
