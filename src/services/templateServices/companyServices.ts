import http from "../../helpers/http";
import { ValidatorError } from "../../hooks/templateHooks/useServerErrorValidation";

//Item de Compañía
export const GetCompanyItem = async (IdCompany: number) => {
  // if (!IdCompany) return;
  const { data } = await http
    .get(`/JolteonAccess/Company/${IdCompany}`)
    .catch((error) => ValidatorError(error));
  return data;
};
