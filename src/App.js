// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/layout/Layout";
// import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import Contact from "./components/pages/Contact";
// import Product from "./components/pages/Product";
// import Career from "./components/pages/Career";


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="Product" element={<Product/>} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="career" element={<Career/>} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout"; // ✅ Layout Import
import { localStorageNavOptions } from "./config/localStorage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {localStorageNavOptions.map((item) => (
            <Route key={item.id} path={item.path} element={item.element} />
          ))}
        </Routes>
      </Layout>
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
