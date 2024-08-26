import { useContext, useEffect, useState } from "react";
import { FeedBack } from "../components/FeedBack";


import { TeamScore } from "../../../@Types/base";
import { SocketContext } from "../../../contex/SocketContext";
import { useServiceQuest } from "../hooks/useServiceQuest";
export const CorrectAnswer = () => {
  const {GetTeamPoints} = useServiceQuest()
  const { socket } = useContext(SocketContext);

  const [ranking, setRanking] = useState<TeamScore[]>();

  useEffect(() => {
    (async () => {
      const res = await GetTeamPoints();
      setRanking(res);
    })();
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("conectado");
    });
  }, [socket]);

  useEffect(() => {
    if (ranking) {
      socket.emit("ranking", ranking);
    }
  }, [socket, ranking]);

  return (
    <FeedBack
      isCorrect={true}
    />
  );
};
