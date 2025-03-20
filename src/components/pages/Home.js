// import React from "react";

// const Home = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//      <img />
//     </div>
//   );
// };

// export default Home;

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useRef, useState } from "react";
import CarouselComp, { Carousel } from "../CarouselComp";
import Header from "../header/Header";
import { EcoSystemComp } from "../EcoSystemComp";
import { ServicesComp } from "../ServicesComp";
import { BeleafForPeopleComp } from "../BeleafForPeopleComp";
import { SalaedPartnersComp } from "../SalaedPartnersComp";
import Footer from "../footer/Footer";
import DocumentMeta from "react-document-meta";
import i18n from "../../i18n";

const Home = () => {
  const ecoRef = useRef(null);
  const [language, setLanguage] = useState(i18n.language);

  i18n.on("languageChanged", (lng) => {
    setLanguage(lng);
  });

  const meta = {
    title: "Home",
    description:
      "Experience the farm-to-table journey with Beleaf Farm. From seed to table, we deliver fresh, wholesome produce while supporting local farmers and sustainable practices.",
    canonical: "http://beleaf.co.id",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
    },
  };

  return (
    <DocumentMeta {...meta}>
      <div className="w-screen h-screen overflow-x-hidden">
        <Header changeLanguage={(lng) => i18n.changeLanguage(lng)} language={language} />
        <CarouselComp onClick={() => ecoRef.current.scrollIntoView({ behavior: "smooth" })} />
        <EcoSystemComp ecoRef={ecoRef} />
        <ServicesComp />
        <BeleafForPeopleComp />
        <SalaedPartnersComp />
        <Footer />
      </div>
    </DocumentMeta>
  );
};

export default Home;
