import React, { useContext } from "react";
import { ThemeContext } from "../content/ThemeContent";

const Content = () => {
  const { user } = useContext(ThemeContext);
  return <div className="content">{user}님 좋은하루 되세요 😊🤣😍✅</div>;
};

export default Content;
