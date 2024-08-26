import { useAuthStore, useUserStore } from "../store";
import { useState } from "react";
import { useServiceQuest } from "../app/serviceQuestApp/hooks/useServiceQuest";
import { User } from "../@Types/base";
import { useSwal } from "./templateHooks/useSwal";
import { useTranslation } from "react-i18next";

export const useAuth = () => {
  const [_theme] = useState(
    "theme_Multitraslados theme_Multitrans theme_Lastrack theme_360Logistics theme_AZCommerce theme_UsoInterno "
  );
  const { TeamAssign } = useServiceQuest();
  const { SuccessError } = useSwal();
  const {
    status,
    user,
    errorMessage,
    onChecking,
    session,
    onLogin,
    onLogout,
    onSession,
  } = useAuthStore();
  const {setUser} = useUserStore();
  const [t] = useTranslation("global");

  const startLogin = async ({ UserName, idTeam, teamName }: any) => {
    if (!UserName) return;
    onChecking();
    
    const AjaxObj = {
      userName: UserName,
      idTeam: idTeam,
    };

    const rsl = await TeamAssign(AjaxObj);
debugger
    const user: User = {
      idUser: rsl.idUser,
      userName: UserName,
      email: '',
      idTeam: idTeam,
      teamName
    }

    if(rsl.errorMessage){
      onSession(false)
      SuccessError("error", t("Usuario no existe"));
      return onLogout("");
    } 

    localStorage.setItem('SESSION_SERVICEQUEST',JSON.stringify(user))
    setUser(user)
    onLogin(user)
    
  };

  const SessionLogin = async () => {
    onChecking();
    const session = localStorage.getItem('SESSION_SERVICEQUEST')
    if(!session){
      onSession(false)
      return onLogout("");
    } 
    const sessionAuth = JSON.parse(session)
    const user: User = {
      idUser: sessionAuth.idUser,
      userName: sessionAuth.userName,
      email: sessionAuth.email,
      idTeam: sessionAuth.idTeam,
      teamName: sessionAuth.teamName
    }

      setUser(user)
      onLogin(user)
      onSession(true)
  };

  return {
    //Properties
    status,
    user,
    errorMessage,
    session,
    //Methods
    startLogin,
    SessionLogin,
  };
};
