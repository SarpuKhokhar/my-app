// import React from "react";
// import { Link } from "react-router-dom";

// const Career = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
//         <h1 className="text-3xl font-bold text-green-600 mb-4">Career Page</h1>
//         <p className="text-gray-700 text-lg mb-4">
//           Explore career opportunities with us and grow your future.
//         </p>
//         <Link
//           to="/career/detail"
//           className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 shadow-md transition"
//         >
//           Go to Career Details
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Career;


import React, { useState } from "react";
// import { HeaderComp } from "../../components/HeaderComp";
import { ProductsComp } from "../../components/ProductsComp";
// import { FooterComp } from "../../components/FooterComp";
import i18n from "../../i18n";
import { CareerTopLineComp } from "../../components/CareerTopLineComp";
import Header from "../header/Header";
import { CareerComp } from "../CareerComp";
import Footer from "../footer/Footer";
// import { CareerComp } from "../../components/CareerComp";

export const Career = () => {
  const [language, setlanguage] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => {
    setlanguage(lng);
  });

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header
        changeLanguage={(lng) => i18n.changeLanguage(lng)}
        language={language}
      />
      <CareerTopLineComp />
      <CareerComp/>
      <Footer />
    </div>
  );
};

export default Career;

