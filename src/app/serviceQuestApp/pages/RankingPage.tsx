import { useContext, useEffect } from "react";
import { useState } from "react";
import First_s from "../assets/1th_s.svg";
import Second_s from "../assets/2nd_s.svg";
import Third_s from "../assets/3th_s.svg";
import { Feature, FirstUsersAnswered, TeamScore } from "../../../@Types/base";
import { useAuth } from "../../../hooks";
import { useServiceQuest } from "../hooks/useServiceQuest";
import { SocketContext } from "../../../contex/SocketContext";
import Fireworks from "@fireworks-js/react";
import { useNavigate } from "react-router-dom";
import { isMobile, SERVER_ROUTE } from "../../../Constants";
import Logo from '../../../assets/Logo.png'
import Pasion from '../../../assets/Pasion.png'
import { GetFeature } from "../services/ServiceQuest";
import LogoCompleto from '../../../assets/pasionLogin.png'
import  Feature1 from '../../../assets/Feature1.jpg' 
import  Feature2 from '../../../assets/Feature2.jpg'
import  Feature3 from '../../../assets/Feature3.jpg'
import  Feature4 from '../../../assets/Feature4.webp'


export const RankingPage = () => {
  const { GetTeamPoints, GetFirstUsersAnswered } = useServiceQuest();
  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();

  // const [rankingSocket, setRankingSocket] = useState<TeamScore[]>();

  const { user } = useAuth();
  const [Ranking, setRanking] = useState<TeamScore[]>([]);
  const [RankingOrder, setRankingOrder] = useState<TeamScore[]>([]);
  const [fireworks, setFireworks] = useState(false);
  const [firstUserAnswered, setFirstUserAnswered] = useState<FirstUsersAnswered[]>([]);
  const [feature, setFeature] = useState<Feature | null>();
  useEffect(() => {
    (async () => {
      const res = await GetTeamPoints();
      setRanking(res);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await GetFirstUsersAnswered();
      setFirstUserAnswered(res);
      const resF = await GetFeature();
      setFeature(resF);
    })();
  }, [Ranking]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("conectado");
    });
  }, [socket]);

  useEffect(() => {
    socket.on("ranking", (ranking: any) => {
      setFireworks(true);
      setRanking(ranking);
    });
  }, [socket]);

  useEffect(() => {
    setTimeout(() => {
      setFireworks(false);
    }, 9000);
  }, [Ranking]);

  const OrderByPoints = () => {
    setRankingOrder(
      Ranking.sort((x: TeamScore, y: TeamScore) => y.totalScore - x.totalScore)
    );
  };

  // useEffect(() => {
  //   setRanking(RankingPoints);
  // }, []);

  useEffect(() => {
    console.log("ranking", Ranking);
    OrderByPoints();
  }, [Ranking]);

  return (
    <>
      {fireworks && (
        <Fireworks
          options={{
            opacity: 0.5,
            hue: { min: 273, max: 325 },
            traceSpeed: 11,
          }}
          className="absolute top-0 left-0 w-screen h-[90vh] z-10 pointer-events-none"
          // style={{
          //   position: "absolute",
          //   top: 0,
          //   left: 0,
          //   width: "100%",
          //   height: "100%",
          // //   zIndex: "1",
          // }}
        />
      )}
      <div
        className="flex justify-center mt-2 gap-2 border-2 border-color5/50 rounded-[15px] p-2 bg-white/40 items-center"
        onClick={() => {}}
      >
        {user ? (
          <>
            <div
              className="flex gap-2 justify-center items-center"
              onClick={() => {
                navigate(`${isMobile ? "/" : SERVER_ROUTE}Medals`);
              }}
            >
              <div className="w-[75px]">
                <img
                  className="rounded-full"
                  src="https://i1.sndcdn.com/artworks-8NX2OGTIVN6KpE9m-zFW3KA-t500x500.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-semibold place-items-baseline">
                  {user?.userName}
                </div>
                <div className="text-2xl flex justify-center justify-items-center items-center font-semibold ">
                  {user?.teamName}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-12 w-14" />
          <h2 className="font-semibold text-3xl">Pasión por el servicio</h2>
          <img src={Logo} alt="Logo" className="h-12 w-14" />
        </div>  
        )}
      </div>
      <div className="mt-5 card flex flex-col gap-y-8 px-4 py-8 sm:py-14 bg-white/40 justify-center items-center relative">
      <div className="hidden lg:flex flex-col absolute top-0 left-0 border-2 max-w-[20vw] p-4 h-full">
      {feature && (
        <>
        {feature.idFeature === 1 && (<img className="w-100" src={Feature1} alt="" />)}
        {feature.idFeature === 2 && (<img className="w-100" src={Feature2} alt="" />)}
        {feature.idFeature === 3 && (<img className="w-100" src={Feature3} alt="" />)}
        {feature.idFeature === 4 && (<img className="w-100" src={Feature4} alt="" />)}
        <h1 className="text-lg font-bold">{feature.featureName}</h1>
        <p>
          {feature.description}
        </p>
        <img className="w-100" src={LogoCompleto} alt="" />
        </>
      )
    }
    </div>
        <div className="hidden h-full lg:flex flex-col absolute top-0 right-0 border-2 max-w-[20vw] p-4 gap-4">
          <h1 className="text-lg font-bold">Primer Usuario en Contestar</h1>
          <ul className="flex flex-col gap-4">
            {firstUserAnswered.map((user) => (
              <>
              
              <li className="flex gap-4 items-center px-4 py-2 rounded bg-red- border-1 relative">
              <img className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-[10%] sm:w-[5%] animate-bounce-y-6" src={First_s} alt="" />
                <span>{new Date(user.creationDate).toLocaleDateString("es-ES", { day: '2-digit', month: 'long' })}</span>
                  <span className="text-yellow-800 font-bold">{user.userName}</span>
                <span className="text-rose-900">{new Date(user.creationDate).toLocaleTimeString("es-ES", { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
              </li>
              </>
            ))}
          </ul>
          <div>
            <img src={Pasion} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-4 transition-all duration-300 ease-in-out">
          <TopThree Ranking={RankingOrder} />
          <div className="flex flex-col gap-4 px-4">
            {Ranking.map(
              (x: TeamScore, index: number) =>
                index > 2 && (
                  <div>
                    <div
                      className={`flex gap-2 order-${
                        index + 1
                      } transition-all duration-300 ease-in-out backdrop-blur bg-[rgba(255,255,255,.6)] rounded-lg flex items-center px-4 py-2 gap-1 justify-between`}
                      key={x.idTeam}
                    >
                      <span className="font-semibold text-lg flex items-center flex-1 justify-center">
                        0{index + 1}
                      </span>
                      <span className="flex-[4] text-center overflow-hidden">
                        {x.teamName}
                      </span>
                      <span className="font-semibold text-lg flex items-center flex-1 justify-center">
                        {x.totalScore}
                      </span>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const TopThree = (props: { Ranking: TeamScore[] }) => {
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (props.Ranking[0]?.totalScore) {
      const height = 100 / props.Ranking[0].totalScore;
      setMaxHeight(height);

      // Activar animación
      setAnimationClass("opacity-0");

      // Remover la animación después de la duración de la transición
      setTimeout(() => setAnimationClass("opacity-100"), 300);
    }
  }, [props.Ranking]);

  return (
    <div className="grid grid-cols-3 min-h-[45vh] gap-4">
      <div className="flex flex-col gap-4 h-full justify-end">
        <img className="w-[50%] sm:w-[35%] m-auto animate-bounce-y-4" src={Second_s} alt="" />
        <div className="flex flex-col h-full justify-end gap-2">
          <div
            style={{
              height: `${
                props.Ranking[1]?.totalScore
                  ? props.Ranking[1]?.totalScore * maxHeight
                  : ""
              }%`,
            }}
            className={`min-h-[96px] w-full flex flex-col items-center transition-all bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 shadow-lg shadow-gray-500/50 p-4 rounded`}
          >
            <span
              className={`text-5xl text-[#fff] text-center transition-all duration-1000 ease-in-out ${animationClass}`}
            >
              {props.Ranking[1]?.totalScore}
            </span>
          </div>
        </div>
        <div className="min-h-24 flex justify-center items-start">
          <span
            className={`text-center transition-all duration-1000 ease-in-out ${animationClass}`}
          >
            {props.Ranking[1]?.teamName}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 h-full justify-end">
        <div className="flex flex-col h-full items-end gap-2">
          <img className="w-[50%] sm:w-[35%] m-auto animate-bounce-y-6" src={First_s} alt="" />
          <div
            style={{ height: "100%" }}
            className={`min-h-[96px] w-full flex flex-col items-center transition-all bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 shadow-lg shadow-yellow-600/50 p-4 rounded`}
          >
            <span
              className={`text-5xl text-[#fff] text-center transition-all duration-1000 ease-in-out ${animationClass}`}
            >
              {props.Ranking[0]?.totalScore}
            </span>
          </div>
        </div>
        <div className="min-h-24 flex justify-center items-start">
          <span
            className={`text-center transition-all duration-1000 ease-in-out ${animationClass}`}
          >
            {props.Ranking[0]?.teamName}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 h-full justify-end">
        <img className="w-[50%] sm:w-[35%] m-auto animate-bounce-y-2 mt-3" src={Third_s} alt="" />
        <div className="flex flex-col h-full justify-end gap-2">
          <div
            style={{
              height: `${
                props.Ranking[2]?.totalScore
                  ? props.Ranking[2]?.totalScore * maxHeight
                  : ""
              }%`,
            }}
            className={`min-h-[96px] w-full flex flex-col items-center transition-all bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800 shadow-lg shadow-orange-700/50 p-4 rounded`}
          >
            <span
              className={`text-5xl text-[#fff] text-center transition-all duration-1000 ease-in-out ${animationClass}`}
            >
              {props.Ranking[2]?.totalScore}
            </span>
          </div>
        </div>
        <div className="min-h-24 flex justify-center items-start">
          <span
            className={`text-center transition-all duration-1000 ease-in-out ${animationClass}`}
          >
            {props.Ranking[2]?.teamName}
          </span>
        </div>
      </div>
    </div>
  );
};
