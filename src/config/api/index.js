import axios from "axios";
export const axiosClient = axios.create({
  baseURL: "https://api.beleafmanagement.io",
});

export const endPointContactUs = "/rest/contact_enquiry/";
export const endPointOurMitra = "/rest/mitra_enquiry";

