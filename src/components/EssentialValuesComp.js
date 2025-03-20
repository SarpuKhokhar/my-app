import React from "react";
import storyBg from "../assets/storyBg.png";
import essentialBg from "../assets/essentialBg.svg";
import essentail02Bg from "../assets/essentail02.png";
import { lsEssentailList } from "../config/localStorage";
import i18next from "i18next";

export const EssentialValuesComp = () => {
  return (
    <div
      className="bg-cover mt-[-50px] pt-[50px] lg:pt-[200px] pb-[0px]"
      style={{
        backgroundImage: `url("${essentialBg}")`,
      }}
    >
      <p className="font-Nunito text-[45px] text-center text-white">
        <span className="font-thin">{i18next.t("Our3")} </span>
        <span className="font-bold">
          {i18next.t("Essential")}
          <br /> {i18next.t("Values")}
        </span>
      </p>
      <div className="flex justify-center">
        <img className="h-[30px]" src={storyBg} alt="..." />
      </div>
      <div className="lg:flex w-full mt-10 ml-[-4rem] px-[30px] justify-center items-center">
        <img className="w-[290px] h-[457px]" src={essentail02Bg} alt="..." />
        <div className="lg:flex ml-10 pb-3 flex justify-center items-center">
          {lsEssentailList.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[290px] mb-3 lg:mb-0 flex justify-center items-center bg-cover bg-center ml-3 border border-white rounded-2xl"
                style={{
                  backgroundImage: `url("${item.bgImg}")`,
                }}
              >
                <div className="">
                  <div className="flex hover:scale-110">
                    <img
                      className="cursor-pointer"
                      src={item.vegImag}
                      alt="..."
                    />
                  </div>
                  <div className="text-white p-5">
                    <p className="font-Nunito text-base font-bold">{i18next.t(item.title)}</p>
                    <ul className="font-Nunito text-sm mt-5">
                      {item.list.map((item2) => {
                        return <li className="mt-[0.4]">{i18next.t(item2)}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
