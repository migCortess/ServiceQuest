import { Route, Routes } from "react-router-dom";
import { RankingPage } from "../../serviceQuestApp/pages/RankingPage";
import { Login } from "../pages/Login";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path={``} element={<Login/>} />
      <Route path={`/Ranking`} element={<RankingPage/>} />
    </Routes>
  );
};
