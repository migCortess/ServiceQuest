import {
  Question,
  QuestionResponse,
  SetAnswer,
  SetAnswerResponse,
  Team,
  TeamScore,
  AllowedtoResponse,
  FirstUsersAnswered,
  FeatureResponse,
  Feature
} from "../../../@Types/base";
import http from "../../../helpers/http";
import { ValidatorError } from "../../../hooks";

//listado de Equipos
export const TeamCollection = async (): Promise<Team[]> => {
  const { data } = await http.get<Team[]>(`/ServiceQuest/User/TeamList`);
  return data;
};

//relacion de Usuario con equipo
export const TeamUserAssign = async (RequestObj: any) => {
  const { data } = await http
    .put(`/ServiceQuest/User/TeamAssign`, RequestObj)
    .catch((error) => ValidatorError(error));
  return data;
};


//listado de equipos y puntos
export const GetTeamsPoints = async (): Promise<TeamScore[]> => {
  const { data } = await http.get<TeamScore[]>(
    `/ServiceQuest/Score/TeamsPoints`
  );
  return data;
};

//Guardar respuesta de usuario
export const SendAnswer = async (
  RequestObj: SetAnswer
): Promise<SetAnswerResponse> => {
  const { data } = await http
    .post(`/ServiceQuest/Score/UserResponse`, RequestObj)
    .catch((error) => ValidatorError(error));
  return data;
};

//Obtener Pregunta
export const GetQuest = async (Code: string): Promise<QuestionResponse> => {
  const { data } = await http
    .get<Question>(`/ServiceQuest/Quest/Question/${Code}`)
    .catch((error) => ValidatorError(error));
  return data;
};

//Validar si no ah dado respuesta a la pregunta del dia de hoy
export const ValidateUserResponse = async ({idUser,code}:any): Promise<AllowedtoResponse> => {
  const { data } = await http.get(`/ServiceQuest/Score/QuestionAvailableForUser/${idUser}/${code}`);
  return data;
};

export const GetFirstUsersAnswered = async (): Promise<FirstUsersAnswered[]> => {
  const { data } = await http.get<FirstUsersAnswered[]>(
    `/ServiceQuest/Score/FirstUserAnswered`
  );
  return data;
};

//Obtener Caracteristica
export const GetFeature = async (): Promise<FeatureResponse> => {
  const { data } = await http
    .get<Feature>(`/ServiceQuest/Quest/Feature`)
  return data;
};