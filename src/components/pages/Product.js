// import React from "react";

// const Product = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
//         <h1 className="text-3xl font-bold text-green-600 mb-4">Product Page</h1>
//         <p className="text-gray-700 text-lg">
//           Welcome to the Product page. Explore our amazing products and find the best one for you!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Product;

import React, { useState } from "react";
import i18n from "../../i18n";
import DocumentMeta from "react-document-meta";
import Header from "../header/Header";
import { ProductsTopLineComp } from "../ProductsTopLineComp";
import { ProductsComp } from "../ProductsComp";
import Footer from "../footer/Footer";

export const Product = () => {
  const [language, setlanguage] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => {
    setlanguage(lng);
  });
  const meta = {
    title: 'Product',
    description: 'Discover a world of fresh, wholesome produce with Beleaf. Enjoy a diverse range of leafy greens, root vegetables, tropical fruits, tomatoes, and salads.',
    canonical: 'http://beleaf.co.id/products',
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
        <Header
          changeLanguage={(lng) => i18n.changeLanguage(lng)}
          language={language}
        />
        <ProductsTopLineComp />
        <ProductsComp/>
        <Footer />
      </div>
    </DocumentMeta>

  );
};

export default Product;

