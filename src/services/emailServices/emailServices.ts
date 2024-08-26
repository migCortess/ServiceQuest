import http from "../../helpers/http";
import { ValidatorError } from "../../hooks/templateHooks/useServerErrorValidation";
export const SendEmail = async (RequestObject: any) => {
  const Result = await http
    .post(`/Email/Send`, RequestObject)
    .catch((error) => ValidatorError(error));
  return Result;
};
