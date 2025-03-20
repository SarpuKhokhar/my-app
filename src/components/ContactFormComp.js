import React, { useState } from "react";
import { InputTextComp } from "./InputTextComp";
import GoogleMapsComp from "./GoogleMapsComp";
import { axiosClient, endPointContactUs } from "../config/api";
import i18next from "i18next";
import { toast } from "react-toastify";

export const ContactFormComp = () => {
  const [contactApiResponse, setContactApiResponse] = useState();
  const [formData, setFormData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const [lastError, setLastError] = useState(false);
  const [yourEmailError, setYourEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [selectedLocation, SetSelectedLocation] = useState({

    lat: -6.1833650,
    lng: 106.8255050,
  });

  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  function clearAllState() {
    setFirst("")
    setLast("")
    setCompanyName("")
    setCompanyEmail("")
    setYourEmail("")
    setPhone("")
    setCountry("")
    setMessage("")
    setConfirmEmail("")
  }

  async function _onSubmit() {
    if (first === "" || last === "") {
      setLastError(true);
      return;
    } else {
      setLastError(false);
    }

    if (yourEmail === "" || confirmEmail === "") {
      setYourEmailError(true);
      return;
    } else {
      setYourEmailError(false);
    }
    if (!(yourEmail === confirmEmail)) {
      toast.error(i18next.t("emailNotSame"))
      return;
    }
    if ((!emailRegex.test(yourEmail)) || (!emailRegex.test(confirmEmail))) {
      setYourEmailError(true);
      return;
    } else {
      setYourEmailError(false);
    }

    if (phone === "") {
      setPhoneError(true);
      return;
    }
    setPhoneError(false);

    if (country === "") {
      setCountryError(true);
      return;
    }
    setCountryError(false);

    if (message === "") {
      setMessageError(true);
      return;
    }
    setMessageError(false);

    let body = {
      first_name: first,
      last_name: last,
      company_name: companyName,
      company_email: companyEmail,
      email: yourEmail,
      phone_number: "+62" + phone,
      country: country,
      message: message,
    };

    console.log(body);

    setLoading(true);
    axiosClient
      .post(endPointContactUs, body)
      .then((res) => {
        setLoading(false);
        clearAllState()
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.error);
        setLoading(false);
      });
  }



  if (formData === undefined) return;

  return (
    <div className="px-[8%] pt-[5%] bg-white">
      <div className="lg:flex">
        <div className="lg:w-1/2">
          <p className="text-[30px] text-[#3EB049] font-Nunito">
            <span className="font-thin">Beleaf </span>{" "}
            <span className="font-bold">Head Office</span>
          </p>
          <p className="text-base text-[#717B77] font-Nunito font-semibold">
            Menara Ravindo Jl Kebon Sirih no.75 RT1/RW1, Kebon Sirih,<br></br> Menteng,
            Jakarta Pusat 10340
          </p>
          <div className="lg:w-[490px] h-[300px] mt-5">
            <iframe
              className="w-[600px] h-[500px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.3038418513045!2d106.82457276012565!3d-6.1832294475750125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f536b7364145%3A0x1da8e7c971990d04!2sBeleaf%20Farms%20Head%20Office!5e0!3m2!1sen!2sus!4v1714986003875!5m2!1sen!2sus"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
        <div className="lg:w-1/2 lg:ml-10 mt-10 lg:mt-0">
          <p className="text-black font-Nunito font-extrabold text-4xl">
            {i18next.t("Assist")}
          </p>

          <div className="flex items-center mt-10">
            <p className="text-black font-Nunito font-extrabold text-xl">{i18next.t("Name")}</p>
            <p className="text-red-500 ml-2 text-sm italic">{i18next.t("Required")}</p>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="lg:flex">
              <div className="lg:mt-5 lg:w-1/2">
                <InputTextComp
                  label={i18next.t("First")}
                  value={first}
                  onChange={(text) => setFirst(text)}
                />
              </div>
              <div className="mt-5 lg:w-1/2 lg:ml-5">
                <InputTextComp
                  label={i18next.t("Last")}
                  value={last}
                  onChange={(text) => setLast(text)}
                />
              </div>
            </div>
            {lastError ? (
              <div className="mt-2 bg-red-100 border border-red-400 text-sm text-red-400 p-5">
                <p>
                  {i18next.t("birthday")}
                </p>
              </div>
            ) : null}
          </div>
          <div className="mt-5">
            <InputTextComp
              label={i18next.t("CompanyName")}
              value={companyName}
              onChange={(text) => setCompanyName(text)}
            />
          </div>
          <div className="mt-5">
            <InputTextComp
              label={i18next.t("CompanyEmail")}
              value={companyEmail}
              onChange={(text) => setCompanyEmail(text)}
            />
          </div>
          <div className="flex items-center mt-10">
            <p className="text-black font-Nunito font-extrabold text-lg">{i18next.t("YourEmail")}</p>
            <p className="text-red-500 ml-2 text-sm  italic">{i18next.t("Required")}</p>
          </div>
          <div className="lg:flex">
            <div className="mt-5 lg:w-1/2">
              <InputTextComp
                label={"Enter Email"}
                value={yourEmail}
                onChange={(text) => setYourEmail(text)}
              />
            </div>
            <div className="mt-5 lg:w-1/2 lg:ml-5">
              <InputTextComp
                label={"Confirm Email"}
                value={confirmEmail}
                onChange={(text) => setConfirmEmail(text)}
              />
            </div>
          </div>
          {yourEmailError ? (
            <div className="mt-2 bg-red-100 border border-red-400 text-sm text-red-400 p-5">
              <p>{i18next.t("Supply")}</p>
            </div>
          ) : null}
          <div className="mt-5 ">
            <InputTextComp
              label={"Phone Number"}
              requireText={true}
              value={phone}
              type={Number}
              onChange={(text) => setPhone(text)}
            />
          </div>
          {phoneError ? (
            <div className="mt-2 bg-red-100 border border-red-400 text-sm text-red-400 p-5">
              <p>{i18next.t("failed")}</p>
            </div>
          ) : null}
          <div className="mt-5 font-Nunito font-bold text-lg">
            <InputTextComp
              label={"Country"}
              requireText={true}
              value={country}
              onChange={(text) => setCountry(text)}
            />
          </div>
          {countryError ? (
            <div className="mt-2 bg-red-100 border border-red-400 text-sm text-red-400 p-5">
              <p>{i18next.t("failed")}</p>
            </div>
          ) : null}
          <div className="mt-5">
            <div className="flex items-center">
              <p className="text-black font-Nunito font-extrabold text-lg">{i18next.t("Message")}</p>
              <p className="text-red-500 ml-2 text-sm italic">{i18next.t("Required")}</p>
            </div>
            <textarea
              onChange={(text) => setMessage(text.target.value)}
              value={message}
              className="w-full h-[192px] border border-[#686868E0] p-2 outline-none"
            />
          </div>
          {messageError ? (
            <div className="mt-2 bg-red-100 border border-red-400 text-sm text-red-400 p-5">
              <p>{i18next.t("failed")}</p>
            </div>
          ) : null}
          <div className="flex mt-10">
            <p
              onClick={() => {
                if (!loading) _onSubmit();
              }}
              className="text-white bg-[#40AE49] py-2 px-10 cursor-pointer"
            >
              {loading ? "Submiting..." : "Submit"}
            </p>
          </div>
        </div>

      </div>
      <div className="w-full bg-[#767676] h-[1px] mt-10" />
    </div>
  );
};
