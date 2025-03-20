import { Carousel, initTWE } from "tw-elements"; 
import carousel01 from "../assets/cr1.png";
import carousel02 from "../assets/cr2.png";
import carousel03 from "../assets/cr3.png";
import carousel04 from "../assets/cr4.jpg";
import carousel05 from "../assets/cr5.png";
import { useEffect, useState } from "react";

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import i18next from "i18next";
export const NewsCarouselComp = ({ style }) => {
  useEffect(() => {
    initTWE({ Carousel });
  }, []);

  const [showMore, setShowMore] = useState(false);

  return (
    <div
      id="carouselExampleCaptions"
      data-te-carousel-init
      data-te-ride="carousel"
      className={`${style}  `}
    >
      <div
        className={` after:clear-both after:block after:content-[''] ${style}`}
      >
        <div
          className={`relative ${style} float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
          data-te-carousel-active
          data-te-carousel-item
        >
          <img
            src={carousel01}
            class="absolute object-contain w-full h-[110%] "
            alt="..."
          />
          <div
            class={`flex px-[30%] py-[10%] ${showMore ? "py-[5%] " : "py-[10%]"
              } justify-between mt-[5rem] items-center left-[5%]  right-[5%] lg:left-[30%] lg:right-[30%] transform top-[3%] text-center text-white md:block`}
          >
            <div className="flex rounded-md justify-center items-center  backdrop-brightness-50 bg-white/70 p-5">
              <div>
                <p class=" font-Nunito text-[1.5rem] mb-[5rem] font-extrabold text-black">
                  {i18next.t("Cr 1 Title")}{" "}

                </p>
                <div className="">
                  <p className="font-Nunito text-black mt-5 mb-[10rem]">
                    {/* Indonesian smart farming startup&nbsp;
                    <a href="#" tabindex="0">
                      Beleaf
                    </a>
                    &nbsp;announced Monday its recently closed Seed funding of
                    $2 million led by Alpha JWC Ventures, with participation
                    from BRI Ventures’ Sembrani Nusantara, MDI-Finch Capital’s
                    Arise, and several prominent angel investors. */}

                    {i18next.t("Cr 1 Body")}
                  </p>
                  <div className="font-Nunito mb-[2.5rem] text-black mt-3">
                    <p>

                    </p>
                    <p>
                      <strong className="font-Nunito font-extrabold">
                        More:{" "}
                        <a
                          href="https://www.channelnewsasia.com/watch/cna-correspondent/food-security-challenge-3684871?cid=internal_sharetool_iphone_09082023_cna"
                          target="_blank"
                          rel="noopener"
                          tabindex="0"
                        >
                          CNA Correspondent
                        </a>
                      </strong>
                    </p>
                    {/* <p className="mt-2 font-Nunito ">
                        <a
                        href="http://bit.ly/tjp-android "
                        target ="_blank">
                        Android: http://bit.ly/tjp-android
                        
                        </a>
 
                      </p> */}
                    {/* <p className="mt-[1] font-Nunito">
                        <a
                        href="http://bit.ly/tjp-ios"
                        target ="_blank">
                        iOS: http://bit.ly/tjp-ios
                        
                        </a>
 
                      </p> */}
                  </div>

                  {/* {showMore ? (
                    <div className="font-Nunito text-black mt-3">
                      <p>
                       
                      </p>
                      <p>
                        <strong className="font-Nunito font-extrabold">
                          More:{" "}
                          <a
                            href="https://www.channelnewsasia.com/watch/cna-correspondent/food-security-challenge-3684871?cid=internal_sharetool_iphone_09082023_cna"
                            target="_blank"
                            rel="noopener"
                            tabindex="0"
                          >
                            CNA Correspondent
                          </a>
                        </strong>
                      </p>
                       <p className="mt-2 font-Nunito ">
                        <a
                        href="http://bit.ly/tjp-android "
                        target ="_blank">
                        Android: http://bit.ly/tjp-android
                        
                        </a>
 
                      </p>
                      <p className="mt-[1] font-Nunito">
                        <a
                        href="http://bit.ly/tjp-ios"
                        target ="_blank">
                        iOS: http://bit.ly/tjp-ios
                        
                        </a>
 
                      </p>
                    </div>
                  ) : null} */}
                </div>

                {/* <div className="flex justify-center mt-3">
                  <div
                    onClick={() => setShowMore(!showMore)}
                    className="flex hover:bg-black items-center bg-[#3EB049] py-2 px-5 rounded-sm cursor-pointer"
                  >
                    <p className="text-sm  font-Nunito">
                      {showMore ? "Less Info" : "More Info"}
                    </p>
                    {showMore ? (
                      <AiFillCaretUp color="white" className="ml-2" />
                    ) : (
                      <AiFillCaretDown color="white" className="ml-2" />
                    )}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>


        {/* carousel 2 Start  */}

        <div
          className={`relative ${style} float-left mt-5 -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
          data-te-carousel-item
        //style="backface-visibility: hidden"
        >
          <img
            src={carousel02}
            class="absolute object-cover w-full h-[100%]"
            alt="..."
          />
          <div
            className={`flex px-[30%] ${showMore ? "py-[2%]" : "py-[10%]"
              } justify-center mt-[5rem] items-center h-full left-[5%] right-[5%] lg:left-[30%] lg:right-[30%] transform top-[5%] text-center text-white md:block`}
          >
            <div className="flex justify-center  rounded-md items-center backdrop-brightness-50 bg-white/70 p-5">
              <div>
                <p class="text-[1.5rem] font-Nunito font-extrabold text-black">
                  {i18next.t("Cr 2 Title")}{" "}
                </p>
                <div className="">
                  <p className=" font-Nunito font-medium text-black mt-5">
                    {i18next.t("Cr 2 Body")}{" "}
                  </p>
                  <div className="text-black mt-3 mb-[2rem] py-3">
                    <p>
                      {/* The circular economy replaces the end-of-life concept
                        with regeneration, restoration and waste elimination
                        through improvements in materials, products, systems and
                        business models. Come late 2018,&nbsp;
                        <strong>Amrit Lakhiani</strong>&nbsp;used his
                        educational and professional experience and his
                        background in finance to found&nbsp;
                        <strong>Beleaf Farms</strong>. The first farm began in
                        Bogor and quickly adapted to local circumstances. */}
                    </p>
                    <p>
                      <strong className="font-Nunito font-extrabold ">
                        More:{" "}
                        <a
                          href="https://www.thejakartapost.com/business/2022/11/21/smart-farming-ri-agritech-firms-offer-farmers-a-helping-hand.html"
                          target="_blank"
                          rel="noopener"
                          tabindex="0"
                        >
                          The Jakarta Post
                        </a>
                      </strong>
                    </p>
                    {/* <p className="mt-6 font-Nunito font-medium">
                        <a
                        href="http://bit.ly/tjp-android "
                        target ="_blank">
                        Android: http://bit.ly/tjp-android
                        
                        </a>
 
                      </p> */}
                    {/* <p className="mt-1 font-Nunito font-medium">
                        <a
                        href="http://bit.ly/tjp-ios"
                        target ="_blank">
                        iOS: http://bit.ly/tjp-ios
                        
                        </a>
 
                      </p> */}
                  </div>

                  {/* {showMore ? (
                    <div className="text-black mt-3 py-3">
                      <p>
                       
                      </p>
                      <p>
                        <strong className="font-Nunito font-extrabold ">
                          More:{" "}
                          <a
                            href="https://www.thejakartapost.com/culture/2023/02/12/sexting-chatbot-ban-points-to-looming-battle-over-ai-rules-.html"
                            target="_blank"
                            rel="noopener"
                            tabindex="0"
                          >
                            The Jakarta Post
                          </a>
                        </strong>
                      </p>
                      <p className="mt-6 font-Nunito font-medium">
                        <a
                        href="http://bit.ly/tjp-android "
                        target ="_blank">
                        Android: http://bit.ly/tjp-android
                        
                        </a>
 
                      </p>
                      <p className="mt-1 font-Nunito font-medium">
                        <a
                        href="http://bit.ly/tjp-ios"
                        target ="_blank">
                        iOS: http://bit.ly/tjp-ios
                        
                        </a>
 
                      </p>
                    </div>
                  ) : null} */}
                </div>

                {/* <div className="flex justify-center mt-10">
                  <div
                    onClick={() => setShowMore(!showMore)}
                    className="flex hover:bg-black items-center bg-[#3EB049] py-2 px-5 rounded-sm cursor-pointer"
                  >
                    <p className="text-sm  font-Nunito">
                      {" "}
                      {showMore ? "Less Info" : "More Info"}
                    </p>
                    {showMore ? (
                      <AiFillCaretUp color="white" className="ml-2" />
                    ) : (
                      <AiFillCaretDown color="white" className="ml-2" />
                    )}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* carousel02 end  */}



        {/* carousel 3 Start  */}

        <div
          className={`relative ${style} float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
          data-te-carousel-item
        //style="backface-visibility: hidden"
        >
          <img
            src={carousel03}
            class="absolute object-cover w-full h-[100%]"
            alt="..."
          />
          <div
            className={`flex px-[30%]  py-[30%]${showMore ? "py-[2%]" : "py-[10%]"
              } py-[10%] justify-center mt-[5rem] items-center h-full left-[5%] right-[5%] lg:left-[30%] lg:right-[30%] transform top-[5%] text-center text-white md:block`}
          >
            <div className="flex rounded-md  justify-center items-center backdrop-brightness-50 bg-white/70 p-5">
              <div>
                <p class="text-[1.3rem] font-Nunito font-extrabold text-black">
                  {i18next.t("Cr 3 Title")}{" "}
                </p>
                <div className="">
                  <p className="font-Nunito font-medium text-black mt-[2.5rem]">
                    {i18next.t("Cr 3 Body1")}{" "}
                  </p>
                  <div className="text-black mt-3 py-3">
                    <p className="font-Nunito font-medium">
                      {i18next.t("Cr 3 Body2")}{" "}
                    </p>
                    <p className="mt-10 mb-[2rem] font-Nunito font-extrabold">
                      <strong>
                        More:{" "}
                        <a
                          href="https://technode.global/2022/10/17/indonesian-farming-startup-beleaf-raises-2m-seed-funding-led-by-alpha-jwc-ventures/"
                          target="_blank"
                          rel="noopener"
                          tabindex="0"
                        >
                          Technode Global
                        </a>
                      </strong>
                    </p>
                    {/* <p className="mt-2 font-Nunito font-medium">
                        <a
                        href="http://bit.ly/tjp-android "
                        target ="_blank">
                        Android: http://bit.ly/tjp-android
                        
                        </a>
 
                      </p>
                      <p className="mt-1 font-Nunito font-medium">
                        <a
                        href="http://bit.ly/tjp-ios"
                        target ="_blank">
                        iOS: http://bit.ly/tjp-ios
                        
                        </a>
 
                      </p> */}
                  </div>

                  {/* {showMore ? (
                    <div className="text-black mt-3 py-3">
                      <p className="font-Nunito font-medium">
                      {i18next.t("Cr 3 Body2")}{" "}
                      </p>
                      <p className="mt-10 font-Nunito font-extrabold">
                        <strong>
                          More:{" "}
                          <a
                            href="https://technode.global/2022/10/17/indonesian-farming-startup-beleaf-raises-2m-seed-funding-led-by-alpha-jwc-ventures/"
                            target="_blank"
                            rel="noopener"
                            tabindex="0"
                          >
                             Technode Global
                          </a>
                        </strong>
                      </p>
                      <p className="mt-2 font-Nunito font-medium">
                        <a
                        href="http://bit.ly/tjp-android "
                        target ="_blank">
                        Android: http://bit.ly/tjp-android
                        
                        </a>
 
                      </p>
                      <p className="mt-1 font-Nunito font-medium">
                        <a
                        href="http://bit.ly/tjp-ios"
                        target ="_blank">
                        iOS: http://bit.ly/tjp-ios
                        
                        </a>
 
                      </p>
                    </div>
                  ) : null} */}
                </div>

                {/* <div className="flex justify-center mt-10">
                  <div
                    onClick={() => setShowMore(!showMore)}
                    className="flex hover:bg-black items-center bg-[#3EB049] py-2 px-5 rounded-sm cursor-pointer"
                  >
                    <p className="text-sm font-Nunito ">
                      {" "}
                      {showMore ? "Less Info" : "More Info"}
                    </p>
                    {showMore ? (
                      <AiFillCaretUp color="white" className="ml-2" />
                    ) : (
                      <AiFillCaretDown color="white" className="ml-2" />
                    )}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* carousel 3  end  */}



        {/* carousel 4 Start  */}

        <div
          className={`relative ${style} float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
          data-te-carousel-item
        //style="backface-visibility: hidden"
        >
          <img
            src={carousel04}
            class="absolute object-cover w-full h-[100%]"
            alt="..."
          />
          <div
            className={`flex px-[30%] ${showMore ? "py-[5%]" : "py-[10%]"
              } justify-center items-center h-full left-[5%] right-[5%] lg:left-[30%] lg:right-[30%] transform top-[5%] text-center text-white md:block`}
          >
            <div className="flex rounded-md  justify-center items-center backdrop-brightness-50 bg-white/70 p-5">
              <div>
                <p class="text-[1.3rem] mb-[1rem] font-Nunito font-extrabold text-black">
                  {i18next.t("Cr 4 Title")}{" "}
                </p>
                <div className="">
                  <p className=" mb-[1rem] font-Nunito text-black mt-5">
                    {i18next.t("Cr 4 Body1")}{" "}
                  </p>
                  <div className="font-Nunito mb-[5rem] text-black mt-[2rem] py-3">
                    <p>
                      {i18next.t("Cr 4 Body2")}{" "}
                    </p>
                    <p className="font-Nunito font-bold mt-[3rem]">
                      <strong>
                        More:{" "}
                        <a
                          href="https://www.nowjakarta.co.id/beleaf-farms-a-sustainable-and-growing-business/"
                          target="_blank"
                          rel="noopener"
                          tabindex="0"
                        >
                          Technode Global
                        </a>
                      </strong>
                    </p>
                    {/* <p className="mt-2 font-Nunito font-medium">
                        <a
                        href="http://bit.ly/tjp-android "
                        target ="_blank">
                        Android: http://bit.ly/tjp-android
                        
                        </a>
 
                      </p> */}
                    {/* <p className="mt-1 font-Nunito font-medium">
                        <a
                        href="http://bit.ly/tjp-ios"
                        target ="_blank">
                        iOS: http://bit.ly/tjp-ios
                        
                        </a>
 
                      </p> */}
                  </div>

                  {/* {showMore ? (
                    <div className="font-Nunito text-black mt-3 py-3">
                      <p>
                      {i18next.t("Cr 4 Body2")}{" "}
                      </p>
                      <p className="font-Nunito font-bold mt-5">
                        <strong>
                          More:{" "}
                          <a
                            href="https://www.nowjakarta.co.id/beleaf-farms-a-sustainable-and-growing-business/"
                            target="_blank"
                            rel="noopener"
                            tabindex="0"
                          >
                            Technode Global
                          </a>
                        </strong>
                      </p>
                      <p className="mt-2 font-Nunito font-medium">
                        <a
                        href="http://bit.ly/tjp-android "
                        target ="_blank">
                        Android: http://bit.ly/tjp-android
                        
                        </a>
 
                      </p>
                      <p className="mt-1 font-Nunito font-medium">
                        <a
                        href="http://bit.ly/tjp-ios"
                        target ="_blank">
                        iOS: http://bit.ly/tjp-ios
                        
                        </a>
 
                      </p>
                    </div>
                  ) : null} */}
                </div>

                {/* <div className="flex justify-center mt-10">
                  <div
                    onClick={() => setShowMore(!showMore)}
                    className="flex hover:bg-black items-center bg-[#3EB049] py-2 px-5 rounded-sm cursor-pointer"
                  >
                    <p className="text-sm font-Nunito ">
                      {" "}
                      {showMore ? "Less Info" : "More Info"}
                    </p>
                    {showMore ? (
                      <AiFillCaretUp color="white" className="ml-2" />
                    ) : (
                      <AiFillCaretDown color="white" className="ml-2" />
                    )}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* carousel 4 end  */}






        {/* carousel 5 start  */}


        <div
          className={`relative ${style} float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
          data-te-carousel-item
        //style="backface-visibility: hidden"
        >
          <img
            src={carousel05}
            class="absolute object-cover w-full h-[100%]"
            alt="..."
          />
          <div
            className={`flex px-[30%] ${showMore ? "py-[2%]" : "py-[5%]"
              } justify-center items-center h-full left-[5%] right-[5%] lg:left-[30%] lg:right-[30%] transform top-[5%] text-center text-white md:block`}
          >
            <div className="flex rounded-md justify-center  items-center backdrop-brightness-50 bg-white/70 p-5">
              <div>
                <p class="text-[1.3rem] font-Nunito font-extrabold text-black">
                  {i18next.t("Cr 5 Title")}{" "}
                </p>
                <div className="">
                  <p className="font-Nunito text-black mt-10">
                    {i18next.t("Cr 5 Body")}{" "}
                  </p>

                  <div className="mt-[15rem] font-Nunito text-black mb-[3rem] ">
                    <p>
                      <strong className=" font-extrabold">
                        More:{" "}
                        <a
                          href="https://www.forbes.com/sites/forbesasiateam/2023/08/28/forbes-asia-100-to-watch-2023/?sh=2f6c72b675a1"
                          target="_blank"
                          rel="noopener"
                          tabindex="0"
                        >
                          Forbes
                        </a>
                      </strong>
                      <br />
                      {/* <p className="mt-2 font-Nunito font-medium">
                        <a
                        href="http://bit.ly/tjp-android "
                        target ="_blank">
                        Android: http://bit.ly/tjp-android
                        
                        </a>
 
                      </p>
                      <p className="mt-1 font-Nunito font-medium">
                        <a
                        href="http://bit.ly/tjp-ios"
                        target ="_blank">
                        iOS: http://bit.ly/tjp-ios
                        
                        </a>
 
                      </p> */}
                    </p>
                  </div>

                  {/* {showMore ? (
                    <div className=" font-Nunito text-black mt-3">
                      <p>
                        <strong className="mt-20 font-extrabold">
                          More:{" "}
                          <a
                            href="https://www.forbes.com/sites/forbesasiateam/2023/08/28/forbes-asia-100-to-watch-2023/?sh=2f6c72b675a1"
                            target="_blank"
                            rel="noopener"
                            tabindex="0"
                          >
                             Forbes
                          </a>
                        </strong>
                        <br />
                        <p className="mt-2 font-Nunito font-medium">
                        <a
                        href="http://bit.ly/tjp-android "
                        target ="_blank">
                        Android: http://bit.ly/tjp-android
                        
                        </a>
 
                      </p>
                      <p className="mt-1 font-Nunito font-medium">
                        <a
                        href="http://bit.ly/tjp-ios"
                        target ="_blank">
                        iOS: http://bit.ly/tjp-ios
                        
                        </a>
 
                      </p>
                      </p>
                    </div>
                  ) : null} */}
                </div>

                {/* <div className="flex justify-center mt-10">
                  <div
                    onClick={() => setShowMore(!showMore)}
                    className="flex hover:bg-black items-center bg-[#3EB049] py-2 px-5 rounded-sm cursor-pointer"
                  >
                    <p className="text-sm ">
                      {" "}
                      {showMore ? "Less Info" : "More Info"}
                    </p>
                    {showMore ? (
                      <AiFillCaretUp color="white" className="ml-2" />
                    ) : (
                      <AiFillCaretDown color="white" className="ml-2" />
                    )}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* carousel 5 end  */}
      </div>

      <button
        className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="prev"
      >
        <span class="inline-block h-16 w-19">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      <button
        className="absolute rounded-br-[200px] bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="next"
      >
        <span class="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};
