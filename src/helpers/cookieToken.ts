import { ISQLResult,Token } from "../@Types/base";
import * as KeyTokenServices from "../services/templateServices/keyTokenServices";
import http from "./http";

export const GetCookieValue = (cookie: string) => {
  var cookieArr = document.cookie.split(";");
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if (cookie === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
};

//Descpt una Cookie
export const DesencryptKeyToken = async (
  cookie: string
): Promise<Token | ISQLResult> => {
  let Data = await KeyTokenServices.DesencryptKeyToken(GetCookieValue(cookie));
  return Data;
};

export const DesencryptKey = async (
  Key: string
): Promise<Token | ISQLResult> => {
  let Data = await KeyTokenServices.DesencryptKeyToken(Key);
  return Data;
};

export const EncryptKeyToken = async (Key: string) => {
  let Data = await KeyTokenServices.EncryptKeyToken(Key);
  return Data;
};

export const setAuthorizationHeader = (token: string) =>
  (http.defaults.headers.common["Authorization"] = `Bearer ${token}`);

export const removeAuthorizationHeader = () =>
  delete http.defaults.headers.common["Authorization"];
