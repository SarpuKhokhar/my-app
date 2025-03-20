import React from "react";
import aboutBg from "../assets/aboutBg.jpg";
import i18next from "i18next";

export const AboutUsTopLineComp = () => {
  return (
    <div className="w-full h-[90%]">
      <div class="w-full h-full left-[0%] transform right-[0%] top-[0%] text-center text-white md:block">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url("${aboutBg}")`,
          }}
        >
          <div className="flex justify-center items-center backdrop-brightness-50 h-full">
            <div>
              <p class="text-3xl lg:text-6xl">
                <span className="font-Nunito font-thin">
                  {i18next.t("Growing Sustainable")}
                </span>
                <span className="font-Nunito font-semibold">
                  {i18next.t("Solutions")}
                  <br />
                  {i18next.t("for the Future")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
