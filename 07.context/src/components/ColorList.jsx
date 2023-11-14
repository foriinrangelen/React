import React, { useContext } from "react";
import { ColorContext } from "../content/ColorContext";

const ColorList = () => {
  const { color, setColor } = useContext(ColorContext);
  console.log(color);
  return (
    // 각 div를 클릭했을 때 해당 div의 색상값이 color state에 저장되도록 구현해보기
    <div>
      <h1>색상선택하기</h1>
      <div className="colorList">
        <div
          className="box color-red"
          onClick={(e) => setColor(e.target.className.split("-")[1])}
        ></div>
        <div
          className="box color-orange"
          onClick={(e) => setColor(e.target.className.split("-")[1])}
        ></div>
        <div
          className="box color-yellow"
          onClick={(e) => setColor(e.target.className.split("-")[1])}
        ></div>
        <div
          className="box color-green"
          onClick={(e) => setColor(e.target.className.split("-")[1])}
        ></div>
        <div
          className="box color-blue"
          onClick={(e) => setColor(e.target.className.split("-")[1])}
        ></div>
      </div>
    </div>
  );
};

export default ColorList;
