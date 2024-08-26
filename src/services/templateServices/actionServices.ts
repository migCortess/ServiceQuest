import http from "../../helpers/http";
import { IdApplication } from "../../Constants";
import { ValidatorError } from "../../hooks/templateHooks/useServerErrorValidation";

export const GetActionApplicationUser = async (IdUser: number = 0) => {
  const { data } = await http
    .get(`/JolteonAccess/Action/Application/${IdApplication}/User/${IdUser}`)
    .catch((error) => ValidatorError(error));
  return data;
};
