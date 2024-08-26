import { useTranslation } from "react-i18next";
import map from '../assets/map.svg'
export const ErrorServer = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <div className="flex flex-col justify-around items-center h-[85vh]">
        <div className="absolute w-[80%] -z-1">
          <div className="rounded-full bg-LightText w-[1%] aspect-square absolute top-[20%] bottom-0 right-0 left-[7%] m-auto animate-pulse shadow-[0_0_9px_3px_#ffd400]"></div>
          <div className="rounded-full bg-LightText w-[1%] aspect-square absolute top-[48%] bottom-0 right-[37%] left-0 m-auto animate-pulse shadow-[0_0_9px_3px_#ffd400]"></div>
          <div className="rounded-full bg-LightText w-[1%] aspect-square absolute top-0 bottom-[35%] right-[75%] left-0 m-auto animate-pulse shadow-[0_0_9px_3px_#ffd400]"></div>
          <div className="rounded-full bg-LightText w-[1%] aspect-square absolute top-0 bottom-[36%] right-0 left-[50%] m-auto animate-pulse shadow-[0_0_9px_3px_#ffd400]"></div>
          <div className="rounded-full bg-LightText w-[1%] aspect-square absolute top-[38%] bottom-0 right-0 left-[62%] m-auto animate-pulse shadow-[0_0_9px_3px_#ffd400]"></div>

          <img
            src={map}
            alt="map"
            className="w-[100%]"
          />
        </div>
        <div className="flex flex-col items-center z-10">
          <h1 className="text-[15vw] font-bold text-HeaderHighlight w-full text-center">Error Server</h1>
          <h2 className="text-7xl text-center"></h2>
        </div>
        <div className="flex flex-col items-center z-10">
          <p className="text-xl text-zinc-600 mb-24">
                {t("HasErrorInServer")}
          </p>
        </div>
      </div>
    </>
  );
};
