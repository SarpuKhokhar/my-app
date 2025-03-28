import React, { useState } from "react";
import { ContactUsTopLineComp } from "../../components/ContactUsTopLineComp";
import { ContactFormComp } from "../../components/ContactFormComp";
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

