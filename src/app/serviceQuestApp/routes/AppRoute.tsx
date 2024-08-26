import { Route, Routes } from "react-router-dom";
import { QuestionPage } from "../pages/QuestionPage";
import { QrPage } from "../pages/QrPage";
import { CorrectAnswer } from "../pages/CorrectAnswer";
import { WrongAnswer } from "../pages/WrongAnswer";
import { AlreadyAnswered } from "../pages/AlreadyAnswered";
import { RankingPage } from "../pages/RankingPage";
import { MedalsPage } from "../pages/threeJS/MedalsPage";


export const AppRoute = () => {
  return (
    <Routes>
      {/* <Route path={``} element={<Home/>} /> */}
      <Route path={``} element={<QrPage/>} />
      <Route path={`/Ranking`} element={<RankingPage/>} />
      <Route path={`/Question`} element={<QuestionPage />} />
      {/* <Route path={`/FeedBack`} element={<FeedBackPage/>} /> */}
      <Route path={`/CorrectAnswer`} element={<CorrectAnswer/>} />
      <Route path={`/WrongAnswer`} element={<WrongAnswer/>} />
      <Route path={`/AlreadyAnswered`} element={<AlreadyAnswered/>} />
      <Route path={`/Medals`} element={<MedalsPage/>} />

      {/* <Route path={`LoadFiles`} element={<h1>Customer Archivos</h1>} /> */}

    </Routes>
  );
};
