// import React, { useState } from "react";
// import i18n from "../../i18n";
// import DocumentMeta from "react-document-meta";

// export const AboutPage = () => {
//   const [language, setLanguage] = useState(i18n.language);
//   i18n.on("languageChanged", (lng) => {
//     setLanguage(lng);
//   });

//   const meta = {
//     title: "About",
//     description:
//       "Beleaf Farms is a leading provider of fresh and healthy food products. Our mission is to bring the best and most nutritious products to your table, while supporting local farmers and promoting sustainable agriculture practices.",
//     canonical: "http://beleaf.co.id/about",
//     meta: {
//       charset: "utf-8",
//       name: {
//         keywords: "react,meta,document,html,tags",
//       },
//     },
//   };

//   return (
//     <DocumentMeta {...meta}>
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//         <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl text-center">
//           <h2 className="text-4xl font-extrabold text-green-600 mb-4">About Us</h2>
//           <p className="text-gray-700 text-lg mb-6">
//             We are committed to providing high-quality organic products and sustainable farming solutions.
//           </p>
//           <p className="text-gray-600 text-md mb-6">
//             Our team works passionately to ensure that every product is fresh, healthy, and eco-friendly. Join us in our
//             mission to make the world greener and healthier!
//           </p>
//           <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 shadow-md transition">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </DocumentMeta>
//   );
// };

// export default AboutPage;

import React, { useState } from "react";
import Header from "../header/Header";
import { AboutUsTopLineComp } from "../AboutUsTopLineComp";
import { OurStoryComp } from "../OurStoryComp";
import { EssentialValuesComp } from "../EssentialValuesComp";
import { OurPeopleComp } from "../OurPeopleComp";
import { NewsComp } from "../NewsComp";
import Footer from "../footer/Footer";
import DocumentMeta from "react-document-meta";
import i18n from "../../i18n";

export const AboutPage = () => {
  const [language, setlanguage] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => {
    setlanguage(lng);
  });
  const meta = {
    title: 'About',
    description: 'Beleaf Farms is a leading provider of fresh and healthy food products. Our mission is to bring the best and most nutritious products to your table, while supporting local farmers and promoting sustainable agriculture practices.',
    canonical: 'http://beleaf.co.id/about',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      }
    }
  }
  return (
    <DocumentMeta {...meta}>

      <div className="w-screen h-screen overflow-x-hidden">
        <Header changeLanguage={(lng) => i18n.changeLanguage(lng)} />
        <AboutUsTopLineComp />
        <OurStoryComp/>
        <EssentialValuesComp />
        <OurPeopleComp/>
        <NewsComp />
        <Footer />
      </div>
    </DocumentMeta>

  );
};

export default AboutPage;


