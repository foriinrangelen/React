import React, { useContext } from "react";
import { ColorContext } from "../content/ColorContext";

const ColorResult = () => {
  const { color, setColor } = useContext(ColorContext);
  return (
    // <div className="colorList">
    <div>
      <h1>선택한 색상</h1>
      {/* <div className={`box color-${color}`}></div> */}
      <div className="box" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default ColorResult;
