import React, { createRef, useEffect, useState } from "react";
import share from "../assets/Share.png";
import layer from "../assets/Layer.png";
import layer2 from "../assets/Layer2.png";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import i18next from "i18next";
import { useNavigate } from "react-router-dom";
import { handleApplyButton } from "../config/localStorage";
export const jobDataRef = createRef();

export const CareerComp = () => {
  const location = useNavigate();
  const [texts, setTexts] = useState([
    "No Pesticide Residue",
    "Freshly Hand-Picked",
    "Export Quality",
  ]);
  useEffect(() => {
    _fetchJobList();
  }, []);

  function handleDetailButton(item) {
    jobDataRef.current = item
    location("/detail");
  }
  function copy() {
    navigator.clipboard.writeText(window.location.href)
    alert("Job Link Copied")
  }
  const _fetchJobList = async () => {
    try {
      const response = await fetch(
        "https://api.beleafmanagement.io/rest/career/jobs"
      );
      const json = await response.json();
      setJobList(json?.data?.data);
      console.log('dataa', json?.data?.data)
    } catch (error) {
      console.error(error);
    }
  };

  const [jobList, setJobList] = useState([]);




  return (

    <div className="bg-white pt-[1rem] rounded-t-[50px] ">
      <p className="text-center text-[22px] font-Nunito leading-7 text-black tracking-wide">{i18next.t("Why")} <span className="text-black font-bold">{i18next.t("Join Us")}</span> ?</p>
      <p className="p-10 font-Nunito  text-base leading-7 text-[#808080] tracking-wide">{i18next.t("Join")} <span className="font-bold text-black">Beleaf Farms</span>{i18next.t("JoinDes")}</p>
      <p className="pl-10 font-Nunito  text-base leading-7 text-[#808080] tracking-wide">{i18next.t("beleafFarms")}</p>
      <div className="mt-20">
        <div className="bg-[#F491A3] pt-[2rem] rounded-t-[50px]">
          <p className="text-white text-[30px]  text-center font-Nunito  leading-7 tracking-wide">{i18next.t("Our")}<span className="font-extrabold"> {i18next.t("Vision")}</span></p>
          <p className="text-center text-white text-[25px] pb-[3rem] pt-8 font-Nunito leading-8 tracking-wide">{i18next.t("Nurtur")} <br />{i18next.t("Nurtur2")} </p>
          <div className="bg-[#40AE49] pt-[2rem] rounded-t-[50px]">
            <p className="text-white text-[30px]  text-center font-Nunito pb-[4rem] leading-7 tracking-wide">Be <span className="font-extrabold">Leaf</span></p>
            <div className="flex justify-center">
              <div className="bg-[#ffffff40] w-[18%] rounded-tl-[100px] rounded-lg shadow-xl">
                <p className="text-center font-extrabold text-[70px] text-white  leading-2">L</p>
                <p className="text-center text-[20px] text-white font-semibold  font-Nunito  mt-[-10%]">{i18next.t("Learn")}</p>
                <p className="text-white  font-Nunito text-[17px] font-thin pl-3 pr-3 leading-6 ">{i18next.t("Improve")}</p>
              </div>
              <div className="bg-[#ffffff40] w-[20%] ml-6  rounded-lg shadow-xl">
                <p className="text-center text-[70px] text-white  font-extrabold  tracking-wide">E</p>
                <p className="text-center text-[20px] text-white font-semibold font-Nunito mt-[-8%]">{i18next.t("EXCELLENCE")}</p>
                <p className=" text-white  font-Nunito pl-3 text-[17px] font-thin pr-3 leading-6 pb-[1rem]">{i18next.t("operational")} {i18next.t("customers")}</p>
              </div>
            </div>
            <div className="flex justify-center mt-6 pb-[8rem]">
              <div className="bg-[#ffffff40] w-[20%] rounded-lg shadow-xl">
                <p className="text-center font-extrabold text-[70px] text-white  leading-2 tracking-wide">A</p>
                <p className="text-center text-[20px] text-white font-semibold font-Nunito  mt-[-8%]">{i18next.t("ACTION-ORIENTED")}</p>
                <p className=" text-white  font-Nunito pl-3 text-[17px] font-thin pr-3 leading-6">{i18next.t("Prioritize")}</p>
              </div>
              <div className="bg-[#ffffff40] w-[18%]  ml-6 rounded-br-[100px] rounded-lg shadow-xl">
                <p className="text-center font-extrabold text-[70px] text-white  leading-2 tracking-wide">F</p>
                <p className="text-center text-[20px] text-white font-semibold font-Nunito  mt-[-10%]">{i18next.t("Farmers Focused")}</p>
                <p className=" text-white  font-Nunito text-[17px] font-thin pl-3 pr-3 leading-6 pb-[1rem]">{i18next.t("farmers")}</p>
              </div>
            </div>
          </div>
          <div className="bg-white pt-[2rem] rounded-t-[50px] mt-[-3%] pb-[7rem]">
            <p className="text-[30px] pb-[2rem] text-center font-Nunito leading-7 text-black tracking-wide">{i18next.t("Job")} <span className="font-extrabold text-black">{i18next.t("Open")}</span></p>

            {
              jobList && jobList.length > 0 ?
                <SimpleBar style={{ maxHeight: '100vh', width: '100%' }} >
                  <div className="flex overflow-x-auto whitespace-nowrap p-2">
                    {jobList?.map((obj, index) => {

                      return (
                        <div key={index} className="w-[20%] shadow-xl inline-block h-[47vh] mx-9 p-6 rounded-lg">
                          <div className="flex justify-between p-2">
                            <p>{obj?.department?.name}</p>
                            <img src={share} className="h-[10%] w-[10%] cursor-pointer"
                              onClick={() => copy()} />
                          </div>
                          <p className="text-[#40AE49] pl-5 pr-5 text-[19px]">{obj?.job_position}</p>
                          <p className="pl-7 pt-3 font-Nunito leading-7 tracking-wide text-[#808080]">{obj?.experience?.name}</p>
                          <p className="pl-7 pt-3 font-Nunito leading-7 tracking-wide text-[#808080]">{obj?.job_type?.name}</p>
                          <p className="pl-7 pt-3 font-Nunito leading-7 tracking-wide text-[#808080]">{obj?.job_location?.name}</p>
                          {/* <p className="pl-7 pt-3">{obj?.experience?.name}</p> */}
                          {/* <p className="pl-3 pt-4 pb-2 border-b-[2px] text-[14px]">{i18next.t("Application")} 17 August 2024</p> */}
                          <p className="pl-3 pt-4 pb-2 border-b-[2px] text-[14px]"></p>
                          <div className="flex justify-between pt-4 items-center w-[100%]">
                            <div className="cursor-pointer w-[50%]"
                              onClick={() => handleDetailButton(obj)}>
                              <p className="text-[#40AE49] font-Nunito  text-base leading-7 tracking-wide" >{i18next.t("See Detail")}</p>
                            </div>
                            <div className="bg-[#40AE49] w-[50%] cursor-pointer rounded-lg p-1 ml-14"
                              onClick={() => handleApplyButton()}>
                              <p className="text-center text-white font-Nunito  text-base leading-7 tracking-wide">{i18next.t("Apply")}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </SimpleBar>
                :
                <p className="text-center text-[25px]  font-Nunito  leading-7 tracking-wide">{i18next.t("NoJobs")}</p>
            }
          </div>

          {/* </div>  */}
          <div className="bg-[#12312B] pt-[1rem] rounded-t-[50px] mt-[-3%]">
            <div className="flex">
              <p className="text-center text-white text-[23px] w-[92%] pt-[2rem]  font-Nunito leading-7 tracking-wide">{i18next.t("Experience")} <span className="font-extrabold">Beleaf</span></p>
              <img
                src={layer}
                className="h-[7%] w-[7%]" />
            </div>
            <p className=" text-white text-[20px] pl-[10%] pr-[10%] font-Nunito  text-base leading-7 tracking-wide">{i18next.t("BeleafPlace")}  {i18next.t("BeleafPlace2")} {i18next.t("BeleafPlace3")}</p>
            <p className=" text-white text-[20px] pl-[10%] pt-5 font-Nunito  text-base leading-7 tracking-wide">{i18next.t("Linked")}</p>
            <div className="flex items-center">
              <img
                src={layer2}
                className="h-[16%] w-[16%]" />
              <div className="w-[70%] flex justify-center">
                <div className="bg-[#40AE49] rounded-lg p-2 w-[21%] flex justify-center">
                  <a href="https://www.linkedin.com/company/beleaf-farms-indonesia">
                    <p className="text-white text-[15px] font-Nunito font-bold leading-7  tracking-wide">{i18next.t("View Update")} <span className="border-[2px] font-extrabold p-0.3 text-[18px] ml-1 pl-1 pr-1 rounded-lg">in</span></p>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

