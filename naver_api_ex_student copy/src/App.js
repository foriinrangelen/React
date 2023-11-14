import "./App.css";
import Search from "./components/Search";
import NewsItem from "./components/NewsItem";
import "./css/App.scss";
import logo from "./img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="NAVER SEARCH API" />
      <div className="App-contents">
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/list' element={<NewsItem />} />

        </Routes>
        {/* <List data={data} category={category} cnt={cnt} check={check} /> */}
      </div>
    </div>
  );
}

export default App;
