import Button from "react-bootstrap/Button";
import logo from "../img/logo.png";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchReducerActions } from "../redux/reducers/searchSlice";

function Search() {
  const dispatch = useDispatch();
  let userInput = useRef();
  const navigate = useNavigate();
  const getData = async (category) => {
    let keyword = userInput.current.value;
    console.log(keyword);
    // console.log(a);
    // 네이버 검색 API를 이용해서 데이터를 받아오겠습니다
    // 1. 검색 키워드(짜장면)
    // 2. 검색 카테고리(뉴스)

    try {
      const res = await axios.get(`/v1/search/local.json`, {
        // const res = await axios.get(`/v1/search/${category}.json`, {
        params: { query: keyword, display: 5 },
        headers: {
          "X-Naver-Client-Id": "tCtfiedjuYg358vUmFeF",
          "X-Naver-Client-Secret": "_fXYHrade3",
        },
      });
      console.log(res.data.items);
      dispatch(searchReducerActions.addSearch(res.data.items));
      navigate("/list");
    } catch (err) {
      console.log(err);
    }
  };
  //   axios
  //     .get("/v1/search/news.json", {
  //       params: { query: "짜장면" },
  //       headers: {
  //         "X-Naver-Client-id": "tCtfiedjuYg358vUmFeF",
  //         "X-Naver-Client-Secret": "_fXYHrade3",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <>
      <img className="logo" src={logo} alt="NAVER SEARCH API" />
      <div className="Search fixed">
        <div className="search-wrap">
          {/* 검색어 입력 */}
          <input type="text" ref={userInput} />
        </div>
        <br></br>
        <div className="Category">
          {/* 카테고리 선택 버튼 */}
          <Button variant="outline-success" onClick={() => getData("news")}>
            뉴스
          </Button>
          <Button variant="outline-success" onClick={() => getData("shop")}>
            쇼핑
          </Button>
          <Button variant="outline-success" onClick={() => getData("book")}>
            책
          </Button>
        </div>
      </div>
    </>
  );
}
export default Search;
