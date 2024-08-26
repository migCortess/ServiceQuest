import http from "../../helpers/http";
import { ValidatorError } from "../../hooks/templateHooks/useServerErrorValidation";
import { Token } from "../../@Types/base";
 
export const DesencryptKeyToken = async (
  KeyToken: string | null
): Promise<Token> => {
  const { data } = await http
    .get("/KeyToken/Desencrypt", { params: { KeyToken: KeyToken } })
    .catch((error) => ValidatorError(error));
  return data;
};
 
export const EncryptKeyToken = async (KeyToken: string): Promise<Token> => {
  const { data } = await http
    .get("/KeyToken/Encrypt", { params: { KeyToken: KeyToken } })
    .catch((error) => ValidatorError(error));
  return data;
};
 