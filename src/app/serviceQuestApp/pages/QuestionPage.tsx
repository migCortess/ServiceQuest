import { AiOutlineSend } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isMobile, SERVER_ROUTE } from "../../../Constants";
import { useServiceQuest } from "../hooks/useServiceQuest";
import { useAuth } from "../../../hooks";
import { QuestionResponse, SetAnswer } from "../../../@Types/base";
import { useSwal } from "../../../hooks/templateHooks/useSwal";
import Swal from "sweetalert2";

export const QuestionPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { SuccessError } = useSwal();
  const { SendAnswer, GetQuest } = useServiceQuest();

  const [idAnswer, setidAnswer] = useState<number>();
  const [question, setQuestion] = useState<QuestionResponse>();
  // const [error, setError] = useState<Error>();

  useEffect(() => {
    (async () => {
      console.log('abs')
      debugger
      if (location) {
        const res = await GetQuest(location.state);
        if (res?.errorMessage) {
          Swal.fire("Error", res.errorMessage, "error");
          navigate(`${isMobile ? "/" : SERVER_ROUTE}`);
        } else res.idQuestion && setQuestion(res);
      }else{
        Swal.fire("Error", 'invalid CODE', "error");
      }
    })();
  }, [location]);

  const handleClick = async () => {
    if (idAnswer && question?.idQuestion) {
      const objAnswer: SetAnswer = {
        idUser: user?.idUser,
        idQuestion: question?.idQuestion,
        idAnswer: idAnswer,
      };
      console.log(objAnswer);
      const res = await SendAnswer(objAnswer);
      if (res.isCorrectAnswer) {
        return navigate(`${isMobile ? "/" : SERVER_ROUTE}CorrectAnswer`);
      } else if (res.errorMessage) {
        res.errorMessage === "ERR_USER_ALREADY_ANSWERED"
          ? SuccessError("error", res.errorMessage)
          : res.errorMessage === "ERR_MISSING_DATA" &&
            SuccessError("error", res.errorMessage);
      } else return navigate(`${isMobile ? "/" : SERVER_ROUTE}WrongAnswer`);
    } else SuccessError("error", "Selecciona una opción");
  };

  return (
    <div className="p-8 gap-4 max-h-[89vh] h-[89vh] md:min-h-[89vh] flex justify-center items-center w-full">
      <div className="backdrop-blur bg-[rgba(255,255,255,.6)] rounded p-8 gap-4 max-h-[89vh] h-fit md:min-h-[89vh] shadow-md flex flex-col justify-center items-center w-full sm:justify-between sm:py-20">
        <h1 className="flex-1 sm:flex-none border-b-1 text-center font-semibold text-xl pb-4 text-balance">
          {question?.description}
        </h1>
        <ul className="flex-[3] sm:sm:flex-none flex flex-col gap-3 overflow-y-scroll">
          {question?.answers?.map((answer) => (
            <li className="list-none flex px-4 py-4 gap-4 rounded-md bg-neutral-100">
              <input
                type="radio"
                name="answer"
                value={answer.idAnswer}
                id={answer.idAnswer.toString()}
                onChange={(e) => setidAnswer(Number(e.target.value))}
              />
              <label
                htmlFor={answer.idAnswer.toString()}
                className="cursor-pointer group-hover:bg-[#7ac0cc]"
              >
                {answer.description}
              </label>
            </li>
          ))}
        </ul>
        <button
          onClick={() => handleClick()}
          className="bg-[#7ac0cc] py-2 flex justify-center items-center gap-1 hover:border-transparent w-full sm:w-[70%] sm:hover:scale-105 transition-transform hover:text-[#212529] rounded"
        >
          <AiOutlineSend />
          Enviar
        </button>
      </div>
    </div>
  );
};
