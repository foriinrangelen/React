// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Content from "../components/Content";
// import { ThemeContext } from "../content/ThemeContent";
// import { useContext } from "react";

// const Page = () => {
//   const { isDark } = useContext(ThemeContext);
//   return (
//     <div>
//       {isDark ? (
//         <div className="page dark-mode-css">
//           <Header />
//           <Content />
//           <Footer />
//         </div>
//       ) : (
//         <div className="page">
//           <Header />
//           <Content />
//           <Footer />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Page;
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import { ThemeContext } from "../content/ThemeContent";
import { useContext } from "react";

const Page = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div>
      {/* <div className={isDark ? "page dark-mode-css" : "page"} */}
      <div className={`page ${isDark ? "dark-mode-css" : ""}`}>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
