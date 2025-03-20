// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { BsFillCaretDownFill } from "react-icons/bs";
// import logoImage from "../../assets/beleaf_logo.png";

// const Header = () => {
//   const location = useLocation();
//   const [language, setLanguage] = useState("EN");

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Products", path: "/product" },
//     { name: "Contact", path: "/contact" },
//     { name: "Career", path: "/career" },
//   ];

//   return (
//     <header className="py-5 z-20 fixed w-full bg-white shadow-md">
//       <div className="container mx-auto flex justify-between items-center">

//         {/* Logo */}
//         <div className="flex items-center">
//           <img className="h-[40px]" src={logoImage} alt="Beleaf Farms" />
//         </div>

//         {/* Navigation + Button + Language */}
//         <div className="flex items-center space-x-15">
//           {/* Navigation */}
//           <nav className="hidden lg:flex space-x-10 text-lg font-sm">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`${
//                   location.pathname === item.path
//                     ? "text-[#40AE49] font-extrabold text-base"
//                     : "text-black font-semibold text-base tracking-wider"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Button with Proper Spacing */}
//           <div className="ml-10">
//             <button className="bg-[#40AE49] text-white text-base lg:text-xs w-[9rem] text-center font-bold tracking-wider px-[0.3rem] py-[0.7rem] rounded-md cursor-pointer hover:bg-[#F491A3]">
//               Become Our Mitra
//             </button>
//           </div>

//           {/* Language Selector with Proper Spacing */}
//           <div className="ml-5 flex items-center cursor-pointer">
//             <p className="text-sm text-green-600 mr-2">{language}</p>
//             <BsFillCaretDownFill
//               size={15}
//               className="cursor-pointer"
//               onClick={() => setLanguage(language === "EN" ? "ID" : "EN")}
//             />
//           </div>
//         </div>

//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState } from "react";
import logoImage from "../../assets/beleaf_logo.png";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { localStorageNavOptions } from "../../config/localStorage";
import i18next from "i18next";
import i18n from "../../i18n";
import { useDispatch } from "react-redux";
import { showContactUsModal } from "../../config/store/reducers/appReducers";

export const Header = ({ changeLanguage }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleAuth = async () => {
    if (isSignup && password !== confirmPassword) {
      alert("Password aur Confirm Password match nahi kar rahe!");
      return;
    }

    setLoading(true);
    try {
      const url = isSignup
        ? "https://dreamcoder-backend.onrender.com/user/signup"
        : "https://dreamcoder-backend.onrender.com/user/login";

      const body = isSignup
        ? { username, email, mobile, password }
        : { username, password };

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const result = await response.json();
      console.log("API Response:", result);

      if (result.status) {
        alert(`${isSignup ? "Signup" : "Login"} Successful`);
        localStorage.setItem("token", result.data.token);
        setShowAuthModal(false);
      } else {
        alert(
          `${isSignup ? "Signup" : "Login"} Failed: ${
            result.msg || "Unknown error"
          }`
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-5 z-20 fixed w-full bg-gray-400   shadow-md">
      <div className="flex items-center px-5">
        <div className="w-1/2">
          <img className="h-[40px]" src={logoImage} alt="..." />
        </div>
        <div className="w-1/2 hidden lg:flex items-center justify-end">
          <div className="flex">
            {localStorageNavOptions.map(
              (item) =>
                item?.id !== 6 && (
                  <div
                    className="mr-10 font-CircularStd text-base cursor-pointer tracking-wider"
                    key={item.id}
                  >
                    <Link to={item.path}>
                      <p
                        className={`${
                          location.pathname === item.path
                            ? "text-white font-Nunito font-extrabold text-base"
                            : "text-black font-semibold font-Nunito text-base tracking-wider"
                        } hover:text-yellow-100`}
                      >
                        {i18next.t(item.name)}
                      </p>
                    </Link>
                  </div>
                )
            )}
          </div>

          <button
            className="bg-black text-white text-base lg:text-xs w-[5rem] font-bold px-4 py-2 rounded-md cursor-pointer hover:bg-[#F491A3]"
            onClick={() => setShowAuthModal(true)}
          >
            Login
          </button>

          <div className="flex ml-8 items-center">
            <p
              onClick={() => dispatch(showContactUsModal(true))}
              className="bg-black text-white text-base lg:text-xs w-[9rem] text-center font-Nunito font-bold tracking-wider px-[0.3rem] py-[0.7rem] rounded-md cursor-pointer hover:bg-[#F491A3]"
            >
              {i18next.t("BecomeOurMitra")}
            </p>
          </div>

          <div className="h-[40px] bg-black w-[1.5px] mx-5" />
          <div className="flex items-center">
            <p className="text-sm text-black mr-2">
              {i18n.language.toUpperCase()}
            </p>
            <BsFillCaretDownFill
              onClick={() =>
                changeLanguage(i18n.language === "en" ? "id" : "en")
              }
              size={15}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      {showAuthModal && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 
    animate-fadeInScale"
        >
          <div className="bg-[#40AE49] p-6 rounded-lg shadow-lg w-96 transform transition-all duration-500 scale-100">
            <h2 className="text-xl font-bold text-white mb-4">
              {isSignup ? "Signup" : "Login"}
            </h2>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 mb-3 border rounded-[30px] bg-black text-white placeholder-gray-400"
            />

            {isSignup && (
              <>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 mb-3 border rounded-[30px] bg-black text-white placeholder-gray-400"
                />

                <input
                  type="text"
                  placeholder="Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full p-2 mb-3 border rounded-[30px] bg-black text-white placeholder-gray-400"
                />
              </>
            )}

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-3 border rounded-[30px] bg-black text-white placeholder-gray-400"
            />

            {isSignup && (
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 mb-3 border rounded-[30px] bg-black text-white placeholder-gray-400"
              />
            )}

            <button
              className="bg-white text-[#F491A3] font-bold px-4 py-2 rounded-[30px] w-full"
              onClick={handleAuth}
              disabled={loading}
            >
              {loading
                ? isSignup
                  ? "Signing up..."
                  : "Logging in..."
                : isSignup
                ? "Signup"
                : "Login"}
            </button>

            <p className="mt-3 text-sm text-white text-center">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setIsSignup(!isSignup)}
              >
                {isSignup ? "Login here" : "Signup here"}
              </span>
            </p>

            <button
              className="text-red-200 mt-2 w-full"
              onClick={() => setShowAuthModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
