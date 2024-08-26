import { useEffect, useState } from "react";
import { isMobile, API_URL } from "../Constants";

export const AmbientInfo = () => {
  const [count, setCount] = useState(1);

  const handlePosition = (count: number): string => {
    switch (count) {
      case 1:
        return "mt-8 mr-3 right-0";
      case 2:
        return "mb-8 mr-3 bottom-0 right-0";
      case 3:
        return "mb-8 ml-3 bottom-0";
      case 4:
        return "mt-9 ml-3";
    }

    return "";
  };

  useEffect(() => {
    if (count > 4) setCount(1);
  }, [count]);

  return (
    <>
      <div
        onClick={() => setCount(count + 1)}
        className={`bg-red-400/20 z-[9999] w-fit  ${handlePosition(
          count
        )}  border-3 border-black/20 py-3 px-2 absolute hover:bg-red-400/90 text-xs`}
      >
        <div className="flex gap-2">
          <p className="font-semibold">Ambiente: </p>{" "}
          <p className="font-bold">{`${import.meta.env.MODE.toUpperCase()}`}</p>
        </div>
        <div className="flex gap-2">
          <p className="font-semibold">{`API:`}</p>
          <p className="font-bold">{`${API_URL}`}</p>
        </div>
        <div className="flex gap-2">
          <p className="font-semibold">{`Mode: `}</p>
          <p className="font-bold">{`${isMobile ? `Mobile` : `Web`}`}</p>
        </div>
      </div>
    </>
  );
};
