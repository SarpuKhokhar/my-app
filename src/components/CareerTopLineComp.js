import React from "react";
import careerBg from "../assets/careerBg.png";
import i18n from "../i18n";
import i18next from "i18next";

export const CareerTopLineComp = () => {
  return (
    <div className="w-full h-[90%]">
      <div class="w-full h-full left-[0%] transform right-[0%] top-[0%] text-center text-white">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url("${careerBg}")`,
          }}
        >
          <div className="flex justify-center items-center bg-gradient-to-t from-[#25252580] h-full">
            <div>
              <p class=" font-Nunito t lg:text-5xl">
                <span className="font-Nunito tracking-wide">
                    {i18next.t("Grow with")}
                    {/* Grow with  */}
                    </span>
                <span className="font-extrabold font-nunito">
                  {/* {i18next.t("Plate Perfection")} */}
                  Beleaf
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
