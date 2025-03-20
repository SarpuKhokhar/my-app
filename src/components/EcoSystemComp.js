import React from "react";
import ecoBgImage from "../assets/ecobg.png";
import { ecoSystemList } from "../config/localStorage";
import ecoBgAnimate from "../assets/animated_particles.svg";
import i18next from "i18next";
import ParticlesComponent from "../components/particles";
import { AnimationPage } from "./pages/AnimationPage";


export const EcoSystemComp = ({ ecoRef }) => {
  return (
    <div ref={ecoRef} className="w-full    ">
      <div

      // className="bg-cover"
      // style={{
      //   backgroundImage: `url("${ecoBgImage}")`,
      // }}
      >
        <div className="absolute z-[-1] w-full  " style={{}}>
          {" "}
          <AnimationPage />{" "}
        </div>
        <div className="mt-[5rem] mb-[5rem]">
         <p className="text-center text-[3rem] ">
          <span className=" font-Nunito font-thin">{i18next.t("Our")}</span>{" "}
          <br></br>
          <span className=" font-Nunito  font-bold">
            {i18next.t("Ecosystem")}
          </span>
         </p>
        </div> 
      </div>
      <div className="lg:flex justify-center bg-white pt-5 mt-5">
        {/* animation dekh lena  */}
        {/* <AnimationPage/> */}

        {ecoSystemList.map((item, _i) => {
          return (
            <div key={_i} className="px-5 ">
              {item.map((item2, _i2) => {
                // debugger;
                return (
                  <div
                    className={`flex items-center lg:items-end pb-[70px] justify-center lg:w-[517px] ${item2.height} bg-black mb-5 bg-cover rounded-3xl`}
                    key={_i2}
                    style={{
                      backgroundImage: `url("${item2?.bg}")`,
                    }}
                  >
                    <div className="px-[20px]">
                      <div className="flex justify-center">
                        <img
                          className="w-[80px] h-[80px]"
                          src={item2?.icon}
                          alt="..."
                        />
                      </div>
                      <div className="flex justify-center mt-5">
                        <p className="lg:flex text-[1.5rem] text-white text-center">
                          <span className="mr-2 font-Nunito font-extralight">
                            {i18next.t(item2?.p1)}
                          </span>
                          <span className="font-Nunito font-extrabold">
                            {i18next.t(item2?.p2)}
                          </span>
                        </p>
                      </div>
                      <p className=" font-Nunito font-normal flex text-center text-white">
                        {i18next.t(item2?.desc)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
