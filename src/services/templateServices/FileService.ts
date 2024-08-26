import http from "../../helpers/http";
import { ValidatorError } from "../../hooks/templateHooks/useServerErrorValidation";

export const UploadFile = async (
  IdApplication: number,
  IdLoggedUser: number,
  ParameterCode: string,
  Source: string,
  FormData: any
) => {
  Source = "NA";
  const { data } = await http
    .post(
      `/File/Application/${IdApplication}/User/${IdLoggedUser}/ParameterCode/${ParameterCode}/${Source}`,
      FormData
    )
    .catch((error) => ValidatorError(error));
  return data;
};

//Listado de Archivos
export const GetFileList = async (filters: any) => {
  const { data } = await http
    .get(`/File`, { params: filters })
    .catch((error) => ValidatorError(error));
  return data;
};

//Realiza la Relación del Archivo con el Id Correspondiente
export const AddFileRelation = async (AjaxObj: any) => {
  const { data } = await http
    .post(`/File/Relation`, AjaxObj)
    .catch((error) => ValidatorError(error));
  return data;
};

//Elimina la Relación del Archivo con el Id Correspondiente
export const DeleteFileRelation = async (AjaxObj: any) => {
  const { data } = await http
    .delete(`/File/Relation`, { params: AjaxObj })
    .catch((error) => ValidatorError(error));
  return data;
};
