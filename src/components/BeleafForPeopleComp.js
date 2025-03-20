import React from "react";
import people_svg_image from "../assets/peopleBg.svg";
import { lsBeleafeForPeople } from "../config/localStorage";
import { useDispatch } from "react-redux";
import { showContactUsModal } from "../config/store/reducers/appReducers";
import i18next from "i18next";

export const BeleafForPeopleComp = () => {
  const dispatch = useDispatch();

  async function _handleBtnClick(item) {
    if (item.id === 1) {
      dispatch(showContactUsModal(true));
    } else if (item.id === 2) {
      window.open(
        "https://api.whatsapp.com/send/?phone=6281977777758&text&type=phone_number&app_absent=0",
        "_blank",
        "noreferrer"
      );
    }
  }
  return (
    <div
      className="pt-[130px] px-5 lg:px-0 mt-[-125px] bg-cover pb-[80px]"
      style={{
        backgroundImage: `url("${people_svg_image}")`,
      }}
    >
      <div>
        <p className="text-[40px] text-center text-white">
          <span className="font-Nunito font-extralight">Beleaf</span>
          <br></br>
          <span className="font-Nunito font-bold">For People</span>
        </p>
      </div>
      {/* backdrop-brightness-50 */}
      <div className="lg:flex mt-10 justify-center">
        {lsBeleafeForPeople.map((item) => {
          return (
            <div
              key={item.id}
              className="relative overflow-hidden lg:w-[500px] mb-3 lg:mb-0 lg:ml-10 h-[500px] text-white cursor-pointer"
            >
              <div class="w-[100%] max-h-[500px]">
                <img
                  src={item.image}
                  alt="..."
                  className="hover:scale-110 transition duration-500 brightness-50 cursor-pointer object-cover object-center"
                />
              </div>
              <div className="flex absolute bottom-0 w-[100%] items-end pb-10 px-[30px]">
                <div>
                  <p className="text-[2rem] w-[50%] font-Nunito font-extrabold">
                    {i18next.t(item.name)}
                  </p>
                  <p className="text-sm font-Nunito font-light">{i18next.t(item.desc)}</p>
                  <div className="flex ">
                    <p
                      onClick={() => _handleBtnClick(item)}
                      className="font-Nunito text-sm mt-5 px-5 py-2 rounded-lg bg-[#F491A3] cursor-pointer hover:bg-[#40AE49]"
                    >
                      {i18next.t(item.btn)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
