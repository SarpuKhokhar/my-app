import React from "react";
import logoImage from "../../assets/beleaf_logo.png";
import linkedinImage from "../../assets/linkedin.png";
import instagranImage from "../../assets/instagram.png";
import appDownload from "../../assets/download_apk.png";
import badges from "../../assets/Beleaf Farms's badge 1.png";
import { Link } from "react-router-dom";
import i18next from "i18next";
import { localStorageNavOptions } from "../../config/localStorage";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Top Section */}
      <div className="py-12 px-8 md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Navigation */}
          <div>
            <img className="h-16 mb-6" src={logoImage} alt="Logo" />
            <ul className="text-sm space-y-3">
              {localStorageNavOptions.map((item) => (
                <Link key={item.id} to={item.path} className="hover:underline">
                  <li className="text-gray-300">{i18next.t(item.name)}</li>
                </Link>
              ))}
            </ul>
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/company/beleaf-farms-indonesia" className="flex items-center space-x-2 hover:text-green-400">
                <img src={linkedinImage} className="w-5 h-5" alt="LinkedIn" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/beleaffarms/?hl=en" className="flex items-center space-x-2 hover:text-green-400">
                <img src={instagranImage} className="w-5 h-5" alt="Instagram" />
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>

          {/* About Us */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">{i18next.t("About Us")}</h2>
            <p className="text-gray-400 leading-7">
              <span className="font-bold text-white">Beleaf Farms</span> {i18next.t("Beleaf Farms (PT BELEAF KEBUN INDONESIA)")}
            </p>
            <p className="mt-4 text-gray-400 leading-7">
              {i18next.t("As a company that is committed to quality")}
            </p>
            <p className="mt-4 text-gray-400 leading-7">
              {i18next.t("We combine the latest advancements")}
            </p>
          </div>

          {/* Contact & Download */}
          <div>
            <h2 className="text-xl font-semibold mb-4">{i18next.t("Come Say Hi")}</h2>
            <p className="text-gray-400">PT BELEAF KEBUN INDONESIA</p>
            <p className="mt-4 text-gray-400">{i18next.t("Beleaf Head Office Menara Ravindo")}</p>
            
            {/* App Download Section */}
            <div className="mt-6">
              <h2 className="text-lg font-bold">{i18next.t("Download Apk")}</h2>
              <p className="text-gray-400 mt-1">{i18next.t("Download diss")}</p>
              <a href="http://bit.ly/tjp-android">
                <img className="mt-3 w-32 hover:opacity-80 transition" src={appDownload} alt="Download App" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="w-full bg-gray-800 flex flex-col md:flex-row items-center justify-between px-8 md:px-32 py-8">
        <div>
          <p className="text-2xl font-semibold">Awards for</p>
          <p className="text-3xl font-black text-green-400">Beleaf Farms</p>
        </div>
        <img className="h-20 mt-4 md:mt-0" src={badges} alt="Awards Badge" />
      </div>

      {/* Copyright */}
      <div className="bg-black py-5 text-center">
        <p className="text-sm text-gray-400">
          PT BELEAF KEBUN INDONESIA ©2025 All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;




// import React from "react";
// import logoImage from "../../assets/beleaf_logo.png";
// import linkedinImage from "../../assets/linkedin.png";
// import instagranImage from "../../assets/instagram.png";
// import appDownload from "../../assets/download_apk.png";
// import badges from "../../assets/Beleaf Farms's badge 1.png";
// import { Link } from "react-router-dom";
// import i18next from "i18next";
// import { localStorageNavOptions } from "../../config/localStorage";

// const Footer = () => {
//   return (
//     <div className="bg-white">
//       <div className="py-12 px-32">
//         <div className="grid grid-cols-4 gap-8">
//           <div>
//             <img className="h-16 mb-4" src={logoImage} alt="Logo" />
//             <ul className="text-sm mt-8">
//               {localStorageNavOptions.map((item) => (
//                 <Link key={item.id} to={item.path}>
//                   <li className="mb-3 text-md hover:underline">
//                     {i18next.t(item.name)}
//                   </li>
//                 </Link>
//               ))}
//             </ul>
//             <div className="flex space-x-4 mt-6">
//   <a href="https://www.linkedin.com/company/beleaf-farms-indonesia" className="flex items-center space-x-2">
//     <img src={linkedinImage} className="w-5 h-5" alt="LinkedIn" />
//     <span className="text-sm font-medium">LinkedIn</span>
//   </a>
//   <a href="https://www.instagram.com/beleaffarms/?hl=en" className="flex items-center space-x-2">
//     <img src={instagranImage} className="w-5 h-5" alt="Instagram" />
//     <span className="text-sm font-medium">Instagram</span>
//   </a>
// </div>

//             <div className="mt-6">
//               <h1 className="text-xl font-bold">{i18next.t("Download Apk")}</h1>
//               <p className="mt-2 text-gray-600">{i18next.t("Download diss")}</p>
//               <a href="http://bit.ly/tjp-android">
//                 <img className="mt-3 w-32" src={appDownload} alt="Download App" />
//               </a>
//             </div>
//           </div>
//           <div className="col-span-2">
//             <h2 className="text-2xl font-bold">{i18next.t("About Us")}</h2>
//             <p className="mt-4 text-gray-600 leading-7">
//               <span className="font-bold">Beleaf Farms</span> {i18next.t("Beleaf Farms (PT BELEAF KEBUN INDONESIA)")}
//             </p>
//             <p className="mt-4 text-gray-600 leading-7">
//               {i18next.t("As a company that is committed to quality")}
//             </p>
//             <p className="mt-4 text-gray-600 leading-7">
//               {i18next.t("We combine the latest advancements")}
//             </p>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold">{i18next.t("Come Say Hi")}</h2>
//             <p className="mt-4 text-gray-600">PT BELEAF KEBUN INDONESIA</p>
//             <p className="mt-4 text-gray-600">{i18next.t("Beleaf Head Office Menara Ravindo")}</p>
//           </div>
//         </div>
//       </div>
//       <div className="w-full h-52 bg-gray-100 flex items-center px-32">
//         <div className="flex flex-col">
//           <p className="text-3xl font-bold">Awards for</p>
//           <p className="text-3xl font-black text-green-600">Beleaf Farms</p>
//         </div>
//         <img className="ml-16 h-20" src={badges} alt="Awards Badge" />
//       </div>
//       <div className="bg-green-900 py-5">
//         <p className="text-sm text-center text-white">
//           PT BELEAF KEBUN INDONESIA ©2025 All Rights Reserved
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;  
