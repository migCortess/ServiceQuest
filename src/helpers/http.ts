import axios from "axios";
import { API_URL, IP_API_URL, DOMAINNAME } from "../Constants";

const httpInstance = axios.create({
  baseURL: window.location.href.includes(DOMAINNAME) ? API_URL : IP_API_URL,
  // headers: {Authorization: `Bearer ${GetCookieValue(UserTokenKey)}`},
});

httpInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export default httpInstance;
