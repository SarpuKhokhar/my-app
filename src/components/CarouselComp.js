import React, { useEffect } from "react";
import { Carousel, initTWE } from "tw-elements"; // initTE ki jagah initTWE use karein
import homeImg from "../assets/homeImg.jpg";
import carousel02 from "../assets/carousel02.jpg";
import carousel03 from "../assets/carousel03.jpg";
import i18next from "i18next";

const CarouselComp = ({ onClick }) => {
  useEffect(() => {
    initTWE({ Carousel });
  }, []);

  return (
    <div
      id="carouselExampleCaptions"
      className="relative w-screen overflow-hidden"
      data-te-carousel-init
      data-te-ride="carousel"
    >
      <div className="relative w-full after:clear-both after:block after:content-['']">
        {[homeImg, carousel02, carousel03].map((image, index) => (
          <div
            key={index}
            className={`relative float-left w-full transition-transform duration-600 ease-in-out ${
              index === 0 ? "block" : "hidden"
            }`}
            data-te-carousel-item
          >
            <img src={image} className="object-cover w-full h-screen" alt="Slide" />
            <div className="absolute inset-0 flex justify-center items-center backdrop-brightness-75 text-white">
              <div className="text-center">
                <p className="font-Nunito font-thin text-6xl">{i18next.t("ItIsOurNature")}</p>
                <p className="font-Nunito font-semibold text-3xl lg:text-6xl">{i18next.t("toNurture")}</p>
                <p className="font-Nunito font-medium text-lg mt-10 px-10">{i18next.t("ElevatingFarms")}</p>
                <div className="flex justify-center mt-10">
                  <button
                    onClick={onClick}
                    className="bg-black font-Nunito text-sm py-3 px-5 rounded-md cursor-pointer hover:bg-[#F491A3]"
                  >
                    {i18next.t("GrowTheFuture")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-0 bottom-0 left-0 flex items-center justify-center w-[15%] text-white opacity-50 hover:opacity-90"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="prev"
      >
        &#10094;
      </button>
      <button
        className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-[15%] text-white opacity-50 hover:opacity-90"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="next"
      >
        &#10095;
      </button>
    </div>
  );
};

export default CarouselComp;
