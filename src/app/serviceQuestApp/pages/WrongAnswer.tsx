import { FeedBack } from "../components/FeedBack";

export const WrongAnswer = () => {
  return (
    <FeedBack isCorrect={false}/>
  );
};
