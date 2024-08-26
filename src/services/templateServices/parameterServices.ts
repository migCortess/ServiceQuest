import http from "../../helpers/http";
import { IdApplication } from "../../Constants";
import { ValidatorError } from "../../hooks/templateHooks/useServerErrorValidation";

export const ParameterList = async () => {
  const { data } = await http
    .get(`/JolteonAccess/Parameter/Application/${IdApplication}`)
    .catch((error) => ValidatorError(error));
  return data;
};
