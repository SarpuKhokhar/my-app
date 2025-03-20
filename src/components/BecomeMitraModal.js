import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import becomeMirtaBg from "../assets/becomeMirtaBg.png";
import { InputTextComp } from "./InputTextComp";
import { useDispatch, useSelector } from "react-redux";
import { showContactUsModal } from "../config/store/reducers/appReducers";
import { AiOutlineClose } from "react-icons/ai";
import i18next from "i18next";
import { useSSR } from "react-i18next"; 
import { axiosClient, endPointOurMitra } from "../config/api";
import axios from "axios";

export default function BecomeMitraModal({ isOpen, setIsOpen }) {
  const dispatch = useDispatch();
  const appStates = useSelector((state) => state.appStoredData);
  const { show } = appStates.contactUSModal;
  const [mitraApiResponse, setMitraApiResponse] = useState();
  const [lastError, setLastError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("")
  const [companyName, setCompanyName] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("")
  const [location, setLocation] = useState("")
  const [Subject, setSubject] = useState("")
  const [inquiries, setInquiries] = useState("")

  const [yourEmailError, setYourEmailError] = useState(false);

  const [phoneError, setPhoneError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [companyNameError, setCompanyNameError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [productError, setProductError] = useState(false)

  function closeModal() {
    dispatch(showContactUsModal(false));
  }
  function clearAllState() {
    setName("")
    setYourEmail("")
    setPhone("")
    setCompanyName("")
    setProduct("")
    setLocation("")
    setSubject("")
    setInquiries("")``
  }
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  async function _onSend() {
    if (name === "") {
      setLastError(true);
      return;
    } else {
      setLastError(false);
    }

    if (yourEmail === "") {
      setYourEmailError(true);
      return;
    } else {
      setYourEmailError(false);
    }
    if (!emailRegex.test(yourEmail)) {
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

    if (companyName === "") {
      setCompanyNameError(true);
      return;
    }
    setCompanyNameError(false);

    if (product === "") {
      setProductError(true);
      return;
    }
    setProductError(false);

    if (location === "") {
      setCountryError(true);
      return;
    }
    setCountryError(false);

    if (Subject === "") {
      setSubjectError(true);
      return;
    }
    setSubjectError(false);

    if (inquiries === "") {
      setMessageError(true);
      return;
    }
    setMessageError(false);



    setLoading(true);

    let data = JSON.stringify({
      "full_name": name,
      "email": yourEmail,
      "phone_number": "+62" + phone,
      "company": companyName,
      "product": product,
      "location": location,
      "subject": Subject,
      "details": inquiries,
    });
    console.log(data);
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: endPointOurMitra,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axiosClient.request(config)
      .then((response) => {
        setLoading(false);
        closeModal()
        clearAllState()
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        setLoading(false);
        alert(error.response.data.error);
      });

  }

  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-[100%] items-center justify-center text-center p-5">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[80%] h-[100%] p-0 transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                  <div className="flex h-[100%]">
                    <div
                      className="w-[40%] h-[100%] bg-cover"
                      style={{
                        backgroundImage: `url("${becomeMirtaBg}")`,
                      }}
                    ></div>
                    <div className="w-[60%] px-5 pt-5 overflow-auto pb-10">
                      <div className="flex justify-between items-center">
                        <p className="text-black font-bold text-[30px]">
                          {/* Become Our Mitra */}
                          {i18next.t("BecomeOurMitra")}
                        </p>
                        <AiOutlineClose
                          onClick={() => closeModal()}
                          className="cursor-pointer absolute right-10 hover:text-[#F491A3]"
                        />
                      </div>
                      <p className="text-black text-sm mt-3">
                        {/* Fill in the form below. */}
                        {i18next.t("FillForm")}
                      </p>
                      <p className="text-black text-sm mt-2">
                        {/* We will soon reply your message. */}
                        {i18next.t("WeWill")}
                      </p>
                      <div className="flex mt-5">
                        <div className="w-1/2">
                          <div>
                            <InputTextComp label={i18next.t("FullName")} required={true}
                              onChange={(text) => setName(text)} />
                          </div>
                          {lastError ? (
                            <div className="mt-2 bg-red-100 border border-red-400 text-sm text-red-400 p-5">
                              <p>
                                {i18next.t("failed")}
                              </p>
                            </div>
                          ) : null}
                        </div>
                        <div className="w-1/2 ml-5">
                          <div>
                            <InputTextComp label={"Email"} required={true}
                              onChange={(text) => setYourEmail(text)} />
                          </div>
                          {yourEmailError ? (
                            <div className="mt-2 bg-red-100 border border-red-400 text-sm text-red-400 p-5">
                              <p>{i18next.t("Supply")}</p>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="mt-3 w-1/2">
                        <InputTextComp label={i18next.t("PhoneNumber")} required={true}
                          onChange={(text) => setPhone(text)} />
                      </div>
                      {phoneError ? (
                        <div className="mt-2 bg-red-100 border border-red-400 text-sm text-red-400 p-5">
                          <p>
                            {i18next.t("failed")}
                          </p>
                        </div>
                      ) : null}
                      <div className="mt-3">
                        <InputTextComp label={i18next.t("Company")} required={true}
                          onChange={(text) => setCompanyName(text)} />
                      </div>
                      {companyNameError ? (
                        <div className="mt-2 bg-red-100 border border-red-400 text-sm text-red-400 p-5">
                          <p>
                            {i18next.t("failed")}
                          </p>
                        </div>
                      ) : null}
                      <div className="mt-3">
                        <InputTextComp label={i18next.t("Product")} required={true}
                          onChange={(text) => setProduct(text)} />
                      </div>
                      {productError ? (
                        <div className="mt-2 bg-red-100 border border-red-400 text-sm text-red-400 p-5">
                          <p>
                            {i18next.t("failed")}
                          </p>
                        </div>
                      ) : null}
                      <div className="flex mt-3">
                        <div className="w-1/2">
                          <div>
                            <InputTextComp label={i18next.t("Location")} required={true}
                              onChange={(text) => setLocation(text)} />
                          </div>
                          {countryError ? (
                            <div className="mt-2 bg-red-100 border border-red-400 text-sm text-red-400 p-5">
                              <p>
                                {i18next.t("failed")}
                              </p>
                            </div>
                          ) : null}
                        </div>
                        <div className="w-1/2 ml-5">
                          <div>
                            <InputTextComp label={i18next.t("Subject")} required={true}
                              onChange={(text) => setSubject(text)} />
                          </div>
                          {subjectError ? (
                            <div className="mt-2 bg-red-100 border border-red-400 text-sm text-red-400 p-5">
                              <p>
                                {i18next.t("failed")}
                              </p>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center">
                          <p className="text-sm mb-1">
                            {" "}
                            {i18next.t("Inquiries")}
                          </p>
                          <p className="text-red-500 ml-2">*</p>
                        </div>
                        <textarea
                          placeholder={i18next.t("Inquiries")}
                          className="w-full h-[100px] border border-[#686868E0] p-2 outline-none"
                          onChange={(text) => setInquiries(text.target.value)}
                        />
                      </div>
                      {messageError ? (
                        <div className="mt-2 bg-red-100 border border-red-400 text-sm text-red-400 p-5">
                          <p>
                            {i18next.t("failed")}
                          </p>
                        </div>
                      ) : null}
                      <div className="mt-3 text-center">
                        <p className="text-white bg-[#40AE49] py-2 cursor-pointer"
                          onClick={() => {
                            {
                              if (!loading) _onSend();
                            }
                          }}
                          // className="text-white bg-[#40AE49] py-2 px-10 cursor-pointer"
                        >
                          {loading ? "Sending..." : "Send"}
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
