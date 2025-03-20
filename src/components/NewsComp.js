import React from "react";
import storyBg from "../assets/storyBg.png";
import newsBg1 from "../assets/newsBg1.jpg";
import newsBg2 from "../assets/newsBg2.png";
import { NewsCarouselComp } from "./NewsCarouselComp";

export const NewsComp = () => {
  let style =
    "overflow-hidden lg:rounded-tl-[250px] lg:rounded-br-[200px] h-[100%]";
  return (
    <div className="w-full h-[80%] mb-[12rem] xs:mb-[10rem] lg:mb-[20rem] lg:h-[120%] relative ">
      <div
        className={`absolute top-[25%]  lg:top-[30%] left-[5%] right-[5%] z-10 h-[90%]     ${style}`}
      >
        <NewsCarouselComp style={style} />
      </div>
      <div
        className="h-[80%] bg-cover bg-center"
        style={{
          backgroundImage: `url("${newsBg1}")`,
        }}
      >
        <div className="w-full h-[100%] backdrop-brightness-50 pt-[5%] z-0">
          <p className="text-[45px] text-center text-white">
            <span className="font-Nunito font-thin">From the</span>{" "}
            <span className="font-Nunito font-bold">News</span>
          </p>
          <div className="flex justify-center">
            <img className="h-[50px]" src={storyBg} />
          </div>
        </div>
      </div>
      <div
        className="h-[50%] bg-cover bg-center "
        style={{
          backgroundImage: `url("${newsBg2}")`,
        }}
      ></div>

    </div>
  );
};
