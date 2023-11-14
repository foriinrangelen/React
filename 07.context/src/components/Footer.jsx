import React, { useContext } from "react";
import { ThemeContext } from "../content/ThemeContent";

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  // const changeMode = () => {};
  console.log(isDark);
  return (
    <div className="footer ">
      <button className="button" onClick={() => setIsDark(!isDark)}>
        Dark Mode
      </button>
    </div>
  );
};

export default Footer;
