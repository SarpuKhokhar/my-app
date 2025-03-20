import React from "react";
import storyBg from "../assets/storyBg.png";
import i18next from "i18next";

export const OurStoryComp = () => {
  return (
    <div className="bg-[#10312B] pt-10 pb-20">
      <p className="text-[45px] text-center text-white">
        <span className="font-Nunito font-thin">{i18next.t("Our2")}</span>{" "}
        <span className="font-Nunito font-bold">{i18next.t("Story")}</span>
      </p>
      <div className="flex justify-center">
        <img className="h-[30px]" src={storyBg} />
      </div>
      <div className="font-Nunito text-white text-sm lg:text-lg mt-10 px-[5%] lg:px-[20%]">
        <p>{i18next.t("In 2019 Beleaf")}</p>
        <p className="mt-5">{i18next.t("In 2022, Beleaf developed")}</p>
        <p className="mt-5">
          {i18next.t("Through Beleaf R&D and FaaS program")}
        </p>
      </div>
    </div>
  );
};
