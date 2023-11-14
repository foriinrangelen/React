import React, { useContext } from "react";
import { ThemeContext } from "../content/ThemeContent";

const Header = () => {
  const { user } = useContext(ThemeContext);
  return (
    <div className="header">
      <h1>Welcome {user}</h1>
    </div>
  );
};

export default Header;
