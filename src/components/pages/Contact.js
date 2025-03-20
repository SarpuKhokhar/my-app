// import React from "react";

// const Contact = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
//         <h2 className="text-3xl font-bold text-green-600 mb-4">Contact Us</h2>
//         <p className="text-gray-700 text-lg mb-6">
//           Get in touch with us for any inquiries.
//         </p>
//         <form className="w-full">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full mb-3 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full mb-3 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <textarea
//             placeholder="Your Message"
//             rows="4"
//             className="w-full mb-3 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 shadow-md transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
// import { HeaderComp } from "../../components/HeaderComp";
import { ContactUsTopLineComp } from "../../components/ContactUsTopLineComp";
import { ContactFormComp } from "../../components/ContactFormComp";
// import { FooterComp } from "../../components/FooterComp";
import i18n from "../../i18n";
import DocumentMeta from "react-document-meta";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export const Contact = () => {
  const [language, setlanguage] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => {
    setlanguage(lng);
  });
  const meta = {
    title: 'ContactUs',
    description: 'Have questions about Beleaf? Contact us! Get in touch with our team for inquiries, support, or partnership opportunities',
    canonical: 'http://beleaf.co.id/contact',
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
        <ContactUsTopLineComp />
        <ContactFormComp />
        <Footer />
      </div>
    </DocumentMeta>

  );
};

export default Contact;

