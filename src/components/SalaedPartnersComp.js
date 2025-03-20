import React from "react";
import partners_image from "../assets/partners.png";
import i18next from "i18next";
import { exportSalesPartners, salesPartners } from "../config/localStorage";

export const SalaedPartnersComp = () => {
  return (
    <div className="bg-[#12312B] py-20">
      <div className="text-center text-white">
        <p className="font-Nunito text-lg">{i18next.t("Our Sales Partner")}</p>
        <p className="text-[2.5rem] font-Nunito font-extralight mt-[-10px]">
          {i18next.t("Building a sustainable")}
        </p>
        <p className="text-[40px] font-Nunito font-bold mt-[-14px]">
          {i18next.t("hand-in-hand")}
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-10 px-[10%]">
        {salesPartners.map((item, _i) => {
          return (
            <div
              key={_i}
              className="mb-[2rem] lg: lg:w-[25%] flex justify-around"
            >
              <img className="w-[50%] h-[6.2rem] object-contain" src={item} alt="..." />
            </div>
          );
        })}
      </div>
      {/* and our export sales partners */}
      <div className=" w-full mt-8 h-20">
         <p className="font-Nunito font-semibold text-center text-white text-5xl">{i18next.t("and our")}</p> 
      </div>
      <div>
      <div className="flex flex-wrap justify-center mt-10 px-[10%]">
        {exportSalesPartners.map((item, _i) => {
          return (
            <div
              key={_i}
              className="mb-[1.5rem] p-5 lg:p-0 lg:w-[25%] flex justify-center"
            >
              <img className="w-[50%] h-[6.2rem] object-contain" src={item} alt="..." />
            </div>
          );
        })}
      </div> 

      
      </div>
    
    </div>
  );
};
