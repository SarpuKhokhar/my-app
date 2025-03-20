import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
// import Header from "../Header";
// import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        {children} {/* ✅ Yeh dynamically page content change karega */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
