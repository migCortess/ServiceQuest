import { AllowedtoResponse, SetAnswer } from "../../../@Types/base";
import * as ServiceQuest from "../services/ServiceQuest";

export const useServiceQuest = () => {
  const GetTeamList = async () => {
    const result = await ServiceQuest.TeamCollection();
    return result;
  };

  const TeamAssign = async (obj: any) => {
    const rsl = await ServiceQuest.TeamUserAssign(obj);
    return rsl;
  };

  const SendAnswer = async (obj: SetAnswer) => {
    const res = await ServiceQuest.SendAnswer(obj);
    return res;
  };

  const GetQuest = async (code: string) => {
    const result = await ServiceQuest.GetQuest(code);
    return result;
  };

  const isAllowedToResponse = async (obj: any) => {
    const result: AllowedtoResponse = await ServiceQuest.ValidateUserResponse(
      obj
    );
    return result;
  };
  const GetTeamPoints = async () => {
    const result = await ServiceQuest.GetTeamsPoints();
    return result;
  };

  const GetFirstUsersAnswered = async () => {
    const result = await ServiceQuest.GetFirstUsersAnswered();
    return result;
  };

  const GetFeature = async () => {
    const result = await ServiceQuest.GetFeature();
    return result
  }
  return {
    //Properties
    //Methods
    GetQuest,
    GetTeamList,
    TeamAssign,
    SendAnswer,
    GetTeamPoints,
    isAllowedToResponse,
    GetFirstUsersAnswered,
    GetFeature
  };
};
