import Button from "react-bootstrap/Button";
import logo from "../img/logo.png";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchReducerActions } from "../redux/reducers/searchSlice";
const { kakao } = window;

function Search() {
  // function calculateDistance(lat1, lon1, lat2, lon2) {
  //   const earthRadius = 6371e3; // Earth's radius in meters
  //   const degToRad = Math.PI / 180;

  //   // Convert latitude and longitude from degrees to radians
  //   const lat1Rad = lat1 * degToRad;
  //   const lon1Rad = lon1 * degToRad;
  //   const lat2Rad = lat2 * degToRad;
  //   const lon2Rad = lon2 * degToRad;

  //   // Haversine formula
  //   const dLat = lat2Rad - lat1Rad;
  //   const dLon = lon2Rad - lon1Rad;
  //   const a =
  //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //     Math.cos(lat1Rad) *
  //       Math.cos(lat2Rad) *
  //       Math.sin(dLon / 2) *
  //       Math.sin(dLon / 2);
  //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  //   // Calculate the distance in meters
  //   const distance = earthRadius * c;

  //   return distance;
  // }

  // // 인사교 위치
  // const lat1 = 35.1465728; // 첫 번째 지점의 위도
  // const lon1 = 126.922262; // 첫 번째 지점의 경도
  // // 식당 좌표
  // const lat2 = 35.1470871; // 두 번째 지점의 위도
  // const lon2 = 126.923139; // 두 번째 지점의 경도

  // const distance = Math.floor(
  //   calculateDistance(lat1, lon1, lat2, lon2).toFixed(2)
  // );
  // console.log(`두 지점 사이의 거리는 ${distance} 미터입니다.`);

  let lat;
  let lng;
  let myAddressBefore;
  let myAddress;

  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    console.log(lat);
    console.log(lng);
    getAddr(lat, lng);
    function getAddr(lat, lng) {
      let geocoder = new kakao.maps.services.Geocoder();

      let coord = new kakao.maps.LatLng(lat, lng);
      let callback = function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          console.log(result[0].address.address_name);
          myAddressBefore = result[0].address.address_name;
          myAddress =
            myAddressBefore.split(" ")[0] + " " + myAddressBefore.split(" ")[1];
          console.log(myAddress);
        }
      };
      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    }
  });

  const dispatch = useDispatch();
  let userInput = useRef();
  const navigate = useNavigate();
  const getData = async (category) => {
    let keyword = myAddress + userInput.current.value;
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
