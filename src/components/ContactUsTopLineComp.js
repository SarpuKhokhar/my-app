import React from "react";
import contactUsBg from "../assets/contactUsBg.jpg";
import i18next from "i18next";

export const ContactUsTopLineComp = () => {
  return (
    <div className="w-full h-[90%]">
      <div class="w-full h-full left-[0%] transform right-[0%] top-[0%] text-center text-white md:block">
        <div
          className="w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url("${contactUsBg}")`,
          }}
        >
          <div className="flex justify-center items-center backdrop-brightness-50 h-full">
            <div>
              <p class="text-7xl">
                <span className="font-Nunito font-light">{i18next.t("Contact2")} </span>
                <span className="font-medium">{i18next.t("Us")}</span>
              </p>
              <p class="text-2xl font-Nunito text-white mt-2">
              {i18next.t("Conversation")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
