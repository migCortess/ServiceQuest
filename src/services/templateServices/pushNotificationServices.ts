
import http from "../../helpers/http";
import { ValidatorError } from "../../hooks/templateHooks/useServerErrorValidation";
import { IdApplication } from "../../Constants";
import { ISQLResult } from "../../@Types/base";

export const RegisterTokenNotification = async (IdUser: number,Token:string): Promise<ISQLResult> => {
  const { data } = await http
    .post<ISQLResult>(`/JolteonAccess/User/DevicePushNotification`,{
      Token:Token,
      IdApplication:IdApplication,
      IdUser:IdUser
    })
    .catch((error) => ValidatorError(error));
  return data;
};
  
export const DeleteTokenNotification = async (DeviceToken: string): Promise<ISQLResult> => {
  const { data } = await http.delete<ISQLResult>(`/JolteonAccess/User/DevicePushNotification/${DeviceToken}`)
    .catch((error) => ValidatorError(error));
  return data;
}

export const GetDeviceToken = async (IdUser:number): Promise<string[]|ISQLResult> => {
  const { data } = await http.get<string[]>(`/JolteonAccess/User/TokenNotification/Application/${IdApplication}/User/${IdUser}`)
    .catch((error) => ValidatorError(error));
  return data;
}

export const SendPushNotification = async (To:string[],Title:string,Body:string) => {
  const { data } = await http.post(`/FirebaseCloudMessaging`,{
    To : To,
    Title:Title,
    Body:Body
  })
    .catch((error) => ValidatorError(error));
  return data;
}