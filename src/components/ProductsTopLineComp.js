import React from "react";
import productsBg from "../assets/productsBg.jpg";
import i18n from "../i18n";
import i18next from "i18next";

export const ProductsTopLineComp = () => {
  return (
    <div className="w-full h-[90%]">
      <div class="w-full h-full left-[0%] transform right-[0%] top-[0%] text-center text-white md:block">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url("${productsBg}")`,
          }}
        >
          <div className="flex justify-center items-center bg-gradient-to-t from-black h-full">
            <div>
              <p class=" font-Nunito text-3xl lg:text-6xl">
                <span className="font-normal">{i18next.t("Farm-to-")}</span>
                <span className="font-bold">
                  {i18next.t("Plate Perfection")}
                </span>
              </p>
              <p class="text-[1.7rem] font-Nunito font-normal text-white mt-2">
                {i18next.t("Taste the Difference")}
                <br />

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
