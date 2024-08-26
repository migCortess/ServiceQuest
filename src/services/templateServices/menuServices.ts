import http from "../../helpers/http";
import { IdApplication } from "../../Constants";
import { ValidatorError } from "../../hooks/templateHooks/useServerErrorValidation";

export const GetMenuApplication = async (
  IdUser: number = 0,
  idCulture: string,
  idApp: number | null = null
) => {
  const { data } = await http
    .get(
      `/JolteonAccess/Menu/Application/${
        idApp ? idApp : IdApplication
      }/User/${IdUser}`,
      { params: { idCulture: idCulture } }
    )
    .catch((error) => ValidatorError(error));
  return data;
};
