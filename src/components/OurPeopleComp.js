import React, { useState } from "react";
import storyBg from "../assets/storyBg.png";

import ceoImg from "../assets/ceo.png";
import ccoImg from "../assets/cco.png";
import vpImg from "../assets/VPImg.png";
import cfoImg from "../assets/cfoNew.png";
import financeImg from "../assets/finance.png";
import dataHeadImg from "../assets/dataHead.png";
import headOfRnd from "../assets/seno.png";



import i18next from "i18next";

export const OurPeopleComp = () => {
  const [peopleList, setPeopleList] = useState([
    {
      id: 1,
      name: "Amrit Lakhiani",
      role: "CEO & Founder",
      profileImg: ceoImg,
    },
    {
      id: 2, name: "Kiat Boon Lim",
      role: "CCO",
      profileImg: ccoImg
    },
    {
      id: 3,
      name: "SEBASTIEN DOMINIQUE",
      role: "CFO",
      profileImg: cfoImg,
    },
    {
      id: 4,
      name: "PARTH SHARMA",
      role: "VP Product & Tech",
      profileImg: vpImg,
    },
    {
      id: 5,
      name: "SENO APRIYANTO",
      role: "Head of R&D",
      profileImg: headOfRnd,
    },
    // {
    //   id: 6,
    //   name: "Moureen Amryna",
    //   role: "Head of Finance",
    //   profileImg: financeImg,
    // },

  ]);
  return (
    <div className="bg-[#10312B] pt-10 pb-20 px-5">
      <p className="text-[45px] text-center text-white">
        <span className="font-Nunito font-thin">{i18next.t("Our4")}</span>{" "}
        <span className="font-Nunito font-bold">{i18next.t("People")}</span>
      </p>
      <div className="flex justify-center">
        <img className="h-[30px]" src={storyBg} />
      </div>
      <p className=" font-Nunito text-center text-white mt-5">
        {i18next.t("Meet the people")}
      </p>
      <div className="w-auto grid grid-cols-3 grid-flow-row gap-10 mt-10 justify-items-center items-center">
        {peopleList.map((item) => {
          return (
            <div className="">
              <div className="  " key={item.id}>
                <img
                  className="w-[418px] h-[350px] rounded-3xl lg:h-[445px]"
                  src={item.profileImg}
                  alt="..."
                />
                <div className="mt-2  text-center">
                  <p className="font-Nunito font-thin text-[#c9ffcefc] text-base">
                    {item.name.toUpperCase()}
                  </p>
                  <p className="text-white font-Nunito font-bold text-2xl">{item.role}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
