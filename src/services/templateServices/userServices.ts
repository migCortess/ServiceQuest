import http from "../../helpers/http";
import { ValidatorError } from "../../hooks/templateHooks/useServerErrorValidation";
import { IdApplication } from "../../Constants";
import { User,ISQLResult } from "../../@Types/base";

export const GetUserItem = async (IdUser: number) => {
  const { data } = await http
    .get<User | string | ISQLResult>(`/JolteonAccess/User/${IdUser}`)
    .catch((error) => ValidatorError(error));

  return data;
};

export const GetUserByWorkGroup = async (Code: string) => {
  const { data } = await http
    .get(`/JolteonAccess/User/WorkGroup/${Code}`)
    .catch((error) => ValidatorError(error));
  return data;
};

export const GetUserByRole = async (Code: string) => {
  const { data } = await http
    .get(`/JolteonAccess/User/Role/${Code}`)
    .catch((error) => ValidatorError(error));
  return data;
};

//Solicita y envia correo de cambio de Contraseña
export const RequestPasswordChange = async (User: string, IC: string) => {
  const { data } = await http
    .get(
      `/JolteonAccess/User/PasswordChange/${User}/Host/${window.location.href.replace(
        /\//g,
        "$"
      )}/IC/${IC}`
    )
    .catch((error) => ValidatorError(error));
  return data;
};

//Actualiza contraseña desde el restablecimiento de contraseña
export const UpdatePasswordFromRecover = async (AjaxObj: User) => {
  const { data } = await http
    .put(`/JolteonAccess/User/PasswordChange`, AjaxObj)
    .catch((error) => ValidatorError(error));
  return data;
};

//Obtiene una lista de WorkGroups que tiene un Usuario
export const GetWorkGroupByUser = async (IdUser: number) => {
  const { data } = await http
    .get(`/JolteonAccess/User/WorkGroup/${IdUser}`)
    .catch((error) => ValidatorError(error));
  return data;
};

//Obtiene una lista de Roles que tiene un Usuario
export const GetRoleByUser = async (IdUser: number) => {
  const { data } = await http
    .get(`/JolteonAccess/User/Role/${IdUser}`)
    .catch((error) => ValidatorError(error));
  return data;
};

//obtiene lista de compañias por usuario
export const GetCompanyByUser = async (IdUser: number) => {
  const { data } = await http
    .get(`/JolteonAccess/User/Company/${IdUser}`)
    .catch((error) => ValidatorError(error));
  return data;
};

//obtiene lista de compañias por usuario
export const GetTokenByUser = async (idUser: number) => {
  const { data } = await http
    .get(
      `/JolteonAccess/User/TokenNotification/Application/${IdApplication}/User/${idUser}`
    )
    .catch((error) => ValidatorError(error));
  return data;
};

export const GetApplicationByUser = async (IdUser: number) => {
  const { data } = await http.get(`/JolteonAccess/User/Application/${IdUser}`);
  return data;
};
