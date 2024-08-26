import Fireworks from "@fireworks-js/react";
// import React from "react";
import { FaCrown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { isMobile, SERVER_ROUTE } from "../../../Constants";
import  Feature1 from '../../../assets/Feature1.jpg'
import  Feature2 from '../../../assets/Feature2.jpg'
import  Feature3 from '../../../assets/Feature3.jpg'
import  Feature4 from '../../../assets/Feature4.webp'
import { useEffect, useState } from "react";
import { Feature } from "../../../@Types/base";
import { GetFeature} from "../services/ServiceQuest";

interface Props {
  isCorrect: boolean;
}

export const FeedBack = ({
  isCorrect
}: Props) => {
  const navigate = useNavigate();
  const [feature, setFeature] = useState<Feature | null>();


  useEffect(() => {
    (async () => {
      const resF = await GetFeature();
      setFeature(resF);
    })();
  }, []);

  return (
    <>
      {isCorrect && (
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
      <div className="p-8 gap-4 max-h-[89vh] h-[89vh] md:min-h-[89vh] flex justify-center items-center w-full">
        <div className="backdrop-blur bg-[rgba(255,255,255,.6)] p-8 sm:px-20 gap-4 max-h-[89vh] h-fit md:min-h-[89vh] shadow-md flex flex-col justify-center items-center w-full rounded border-1 border-skin-primary/40">
          <h1 className="border-b-1 text-center font-semibold text-xl pb-4 text-balance">
            {isCorrect ? "Respuesta Correcta" : "Respuesta Incorrecta"}
          </h1>
          {feature && (
                <>
                {feature.idFeature === 1 && (<img className="w-100" src={Feature1} alt="" />)}
                {feature.idFeature === 2 && (<img className="w-100" src={Feature2} alt="" />)}
                {feature.idFeature === 3 && (<img className="w-100" src={Feature3} alt="" />)}
                {feature.idFeature === 4 && (<img className="w-100" src={Feature4} alt="" />)}
                <h3>{feature.featureName}</h3>
                <p>{feature.description}</p>
                </>
          )}

          <div
            className="bg-[#7ac0cc] py-2 flex justify-center items-center gap-1 hover:border-transparent w-full sm:w-[80%] sm:hover:scale-105 transition-transform hover:text-[#212529] rounded border-1 border-skin-primary/40 shadow-input"
            onClick={() => {
              return navigate(`${isMobile ? "/" : SERVER_ROUTE}Ranking`);
            }}
          >
            <FaCrown />
            Ver Ranking
          </div>
        </div>
      </div>
    </>
  );
};
