import React, { useEffect, useRef, useState } from "react";
import planting_image from "../assets/planting.jpg";
import packoy_image from "../assets/service_image.png";
import video from "../assets/agriculture.mp4";
import leaf_image from "../assets/leaf.png";
import multileaf_image from "../assets/multileaf.png";
import user_image from "../assets/user.png";
import CountUp from "react-countup";
import i18next from "i18next";
import ScrollTrigger from "react-scroll-trigger";

export const ServicesComp = () => {
  const vidRef = useRef(null);

  useEffect(() => {
    if (vidRef !== null) {
      vidRef.current.play();
    }
  }, []);

  const [counterOn, setCounterOn] = useState(false);
  const [statsList, setStatsList] = useState([
    { id: 1, percent: 30, name: i18next.t("More Plants") },
    { id: 2, percent: 95, name: i18next.t("Less Water") },
    { id: 3, percent: 99, name: i18next.t("Less Land") },
  ]);

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const targetNumber = 97;
  const targetNumber1 = 12;
  const targetNumber2 = 1613200;
  const increment = Math.ceil(targetNumber / 100); // Adjust the increment based on your preference
  const increment1 = Math.ceil(targetNumber1 / 100);
  const increment2 = Math.ceil(targetNumber2 / 100);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < targetNumber) {
        setCount((prevCount) => Math.min(prevCount + increment, targetNumber));
      } else {
        clearInterval(interval);
      }
    }, 30); // Change the interval duration as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [count, targetNumber]);


  useEffect(() => {
    const interval = setInterval(() => {
      if (count1 < targetNumber1) {
        setCount1((prevCount) => Math.min(prevCount + increment1, targetNumber1));
      } else {
        clearInterval(interval);
      }
    }, 350); // Change the interval duration as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [count1, targetNumber1]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count2 < targetNumber2) {
        setCount2((prevCount) => Math.min(prevCount + increment2, targetNumber2));
      } else {
        clearInterval(interval);
      }
    }, 30); // Change the interval duration as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [count2, targetNumber2]);


  const [agriStatsList, setAgriStatsList] = useState([
    {
      id: 1,
      name: "Partners",
      quantity: 97,
      unit: "FaaS",
      icon: multileaf_image,
    },
    {
      id: 2,
      name: "R&D Farms",
      quantity: 12,
      unit: "Hectares",
      icon: leaf_image,
    },
    {
      id: 3,
      name: "Open Field Farms",
      quantity: 1613200,
      unit: "Sqm",
      icon: user_image,
    },
  ]);
  return (
    <div className="z-0 bg-white ">
      <div className="relative p-0  md:h-[20rem] lg:h-[22rem] xl:h-[27rem] 2xl:h-[32rem] bg-transparent bg-contain bg-repeat justify-start items-center flex">
        <div className="absolute left-[-2%] bottom-[52%] w-[50%] h-[40%]">
          <video ref={vidRef} muted loop width="100%" autoPlay={true}>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="absolute px-5 top-[10%] lg:top-[40%] lg:right-0 lg:left-[35%] lg:bottom-[55%] text-lg lg:text-[30px] text-center w-full lg:w-1/2">
          <p className="text-center w-full leading-[35px]">
            <span className="font-Nunito font-normal">
              {i18next.t("Experience the future")}
            </span>{" "}
            <p className="font-Nunito font-extrabold">{i18next.t("of farming")}</p>
            <p className="font-Nunito font-extrabold">{i18next.t("the power")}</p>
          </p>
        </div>
      </div>
      <div
        className="w-full relative h-[24.375rem] bg-cover bg-center justify-center items-end flex mt-[-3.125rem] rounded-t-[1.7rem]"
        style={{
          backgroundImage: `url("${planting_image}")`,
        }}
      >
        {/* <div className="lg:flex mb-[-80%] lg:mb-[-80px]">
          {statsList.map((item) => {
            return (
              <div
                key={item.id}
                className="flex m-2 justify-center items-center w-[350px] h-[170px] bg-[#3EB049] ml-5 rounded-[40px]"
              >
                <CountUp
                  start={0}
                  end={item.percent}
                  duration={4}
                  suffix="%"
                  onEnd={() => console.log("Ended! 👏")}
                  onStart={() => console.log("Started! 💨")}
                >
                  {({ countUpRef, start }) => (
                    <div className="text-white text-center">
                      <span
                        className="text-3xl lg:text-[60px] font-bold text-center"
                        ref={countUpRef}
                      />
                      <p className="text-center lg:text-[19px]">{item.name}</p>
                    </div>
                  )}
                </CountUp>
              </div>
            );
          })}
        </div> */}
      </div>
      <div className="bg-[#12312B] lg:flex w-screen pt-[5%]  pb-[12%] ">
        <div className="w-[100%] lg:w-[30%] p-5">
          <img src={packoy_image} alt="..." />
        </div>
        <div className="w-[100%] text-center lg:text-start lg:w-[70%] px-[1.8rem]">
          <p className=" font-Nunito leading-8 font-thin  text-white text-5xl">
            <span className="font-Nunito  font-thin text-5xl">


              <span className="inline-block mb-2">{i18next.t("Unlocking")}</span>
              <br></br>
              {i18next.t("Agriculture")}
            </span>
            <span className="font-Nunito font-medium">
              {i18next.t("Our Farming Partners")}
            </span>
          </p>
          <div className="flex justify-center lg:justify-start">
            <div className="h-[4px] bg-[#B1B1B1FA] w-[200px] mt-5" />
          </div>
          <p className="text-white font-Nunito text-sm mt-5 pr-[3rem]">
            {i18next.t("WeLeverage")}
          </p>

          {/* <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
            
          > */}
          <div className="lg:flex justify-between pr-[7.5rem]  mt-10 pb-[7.5rem]  lg:p-0">
            {agriStatsList.map((item) => {
              return (
                <div className="flex mb-5  mr-[5rem] lg:mb-0" key={item.id}>
                  <div className="flex justify-center items-center h-[68px] w-[88px] bg-[#3b544f]">
                    <img
                      className="w-[40px] h-[40px] object-contain"
                      src={item.icon}
                      alt="..."
                    />
                  </div>
                  <div className="ml-5 ">
                    {
                      <CountUp
                      // start={0}
                      // end={item.quantity}
                      // duration={6}
                      //suffix={" " + item.unit}
                      // onEnd={() => console.log("Ended! 👏")}
                      // onStart={() => console.log("Started! 💨")}
                      // useEasing={true}
                      >
                        {({ countUpRef, start }) => (
                          <div className="text-white text-start">
                            <span
                              className="text-[30px] text-[#3EB049]"
                            >
                              {item.id === 1 ? count.toLocaleString() : ""}
                              {item.id === 2 ? count1.toLocaleString() : ""}
                              {item.id === 3 ? count2.toLocaleString() : ""}
                            </span>
                            <span className="inline-block ml-1 text-sm text-[#3EB049]">{" " + item.unit}</span>

                            <p className="text-[#3EB049] text-sm text-start">
                              {i18next.t(item.name)}
                            </p>
                          </div>
                        )}
                      </CountUp>
                    }


                  </div>
                </div>
              );
            })}
          </div>
          {/* </ScrollTrigger> */}
        </div>
      </div>
    </div>
  );
};
