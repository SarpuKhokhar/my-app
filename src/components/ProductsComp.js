import React, { useEffect, useState } from "react";
import storyBg from "../assets/storyBg.png";
import { localStorageProductsList } from "../config/localStorage";
import i18next from "i18next";
import leaf from "../assets/product_leaf.png";
import onion from "../assets/product_onion.png";

export const ProductsComp = () => {
  const [texts, setTexts] = useState([
    "No Pesticide Residue",
    "Freshly Hand-Picked",
    "Export Quality",
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [productList, setProductList] = useState(localStorageProductsList);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000); // Change the interval duration as needed (in milliseconds)
    return () => clearInterval(interval);
  }, [texts]);




  return (
    <div className="bg-[#10312B] pt-[5rem]  ">
      <p className=" font-Nunito lg:text-[40px] text-center text-white">
        <span className="font-thin ">{i18next.t("Export grade")}</span>
        <span className="font-extrabold">{i18next.t("used by")}</span>
      </p>
      <p className="lg:text-[40px] text-center text-white font-Nunito font-extrabold lg:mt-[-12px]">
        {i18next.t("chefs in the top")}
      </p>
      {/* ek animation add karna parega akash */}
      <p className="px-5 text-[40px] text-center text-white font-Nunito font-extrabold mt-10">
        {texts[currentIndex]}
      </p>
      <div className="mt-3 flex justify-center pb-[5rem]">
        <img className="h-[25px]" src={storyBg} />
      </div>
      <div className="mt-20">
        {productList.map((item) => {
          return (
            <div
              className={`${item.bgColor} ${item.id === (7) ? "py-[0] mt-[-100px]" : " py-[5rem] mt-[-50px] "} min-h-[80vh]  rounded-t-[50px] `}
              key={item.id}
            >
              <div className="lg:flex px-[10px]">
                <div className={`${item.id === 4 ? " items-center mt-[5rem] ml-[7rem]  lg:w-[40%] " : " items-center justify-center  lg:w-[40%]"}" items-center  relative flex px-5 lg:w-[40%]  "`}>
                  <div className={`${item.textColor}`}>
                    <div>
                      <p className="text-4xl font-Nunito ">
                        <span className="font-light">
                          {i18next.t(item.heading)}
                        </span>
                        <br />
                        <span className="font-extrabold">
                          {i18next.t(item.heading2)}
                        </span>
                      </p>
                    </div>
                    <div className="ml-5 mt-3">
                      <ul className="text-sm">
                        {item.list.map((item2) => {
                          return (
                            <li>
                              <div className="flex items-center mt-1">
                                <div
                                  className={`w-[6px] h-[6px] rounded-full ${item.dotColor} `}
                                />
                                <p className="ml-2 text-lg font-Nunito font-semibold">{i18next.t(item2)} </p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`   lg:w-[60%]  `}
                >
                  {/* <img
                    className={`"${item.id === 6 ? 'w-[120%] object-cover' : ''}"`}
                    src={item.productImage}
                    alt="..."
                  /> */}

                  {item.id === 5 ? <img src={item.productImage} className="w-[120%] object-cover"></img> : null}
                  {item.id === 6 ? <img src={item.productImage} className="w-[120%] object-cover"></img> : null}
                  {/* {item.id === 3 ? <img src={item.productImage} className="w-[120%] object-cover"></img> : null} */}

                  <div className="ml-[20%]">
                    <div className=" flex">
                      {item.id === 1 ? <img src={item.productImage1} className=" w-[37%]   "></img> : null}
                      {item.id === 1 ? <img src={item.productImage3} className=" w-[37%]    "></img> : null}
                    </div>
                    <div className="flex">
                      {item.id === 1 ? <img src={item.productImage2} className=" w-[37%] "></img> : null}
                      {item.id === 1 ? <img src={item.productImage4} className=" w-[37%] "></img> : null}
                    </div>
                  </div>

                  <div className="ml-[7%]">
                    <div className="flex">
                      {item.id === 4 ? <img src={item.productImage2} className=" w-[45%] "></img> : null}
                      {item.id === 4 ? <img src={item.productImage4} className=" w-[45%]"></img> : null}
                    </div>
                    <div className="ml-[7px] flex" >
                      {item.id === 4 ? <img src={item.productImage1} className=" w-[45%]  "></img> : null}
                      {item.id === 4 ? <img src={item.productImage3} className=" w-[45%]    "></img> : null}
                    </div>
                  </div>

                  <div className="ml-[20%] ">
                    <div className=" flex">
                      {item.id === 2 ? <img src={item.productImage1} className=" w-[40%]   "></img> : null}
                      {item.id === 2 ? <img src={item.productImage2} className=" w-[40%]    "></img> : null}
                    </div>
                    <div className="flex ml-[21%]">
                      {item.id === 2 ? <img src={item.productImage3} className=" w-[53%] "></img> : null}
                    </div>
                  </div>
                  <div className="ml-[20%] ">
                    <div className=" flex">
                      {item.id === 3 ? <img src={item.productImage1} className=" w-[40%]   "></img> : null}
                      {item.id === 3 ? <img src={item.productImage2} className=" w-[40%]    "></img> : null}
                    </div>
                    <div className="flex ml-[21%]">
                      {item.id === 3 ? <img src={item.productImage3} className=" w-[53%] "></img> : null}
                    </div>
                  </div>
                </div>
              </div>
              {item.id === 1 ? <img src={leaf} className=" w-[10%] mb-[-1rem] mt-[-2.5rem]  ml-[6%]  "></img> : null}

              {item.id === 6 ? <img src={onion} className="w-[10%] mb-[2.5%] mt-[-5%] ml-[6%] "></img> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};
