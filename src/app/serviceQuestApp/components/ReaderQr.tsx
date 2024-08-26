import { QrScanner } from "@diningcity/capacitor-qr-scanner";
import { BsQrCode } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { useServiceQuest } from "../hooks/useServiceQuest";
import { isMobile, SERVER_ROUTE } from "../../../Constants";

export const ReaderQr = () => {

  const navigate = useNavigate();
  const {user} = useAuth()
  const {isAllowedToResponse} = useServiceQuest()

  const scanQrCode = async () => {
    const { result } = await QrScanner.scanQrCode();
    const obj = {
      idUser: user.idUser,
      code: result
    }
    const Allow = await isAllowedToResponse(obj)
    console.log(Allow);
    
    if(Allow.isAllowedToResponse){
      return navigate(`${isMobile ? "/" : SERVER_ROUTE}Question`, {state:obj.code});
    }else {
      return navigate(`${isMobile ? "/" : SERVER_ROUTE}AlreadyAnswered`);
    }

  };

  return (
    <>
      <div className="h-[80vh] w-full grid items-center px-2 relative">
        <div className="card h-fit shadow-container rounded-[15px] bg-white/70">
          <div className="card m-2 border-1 border-skin-primary h-[40vh] rounded-[10px] bg-transparent">
            <div className="flex h-full items-center justify-center flex-col gap-4">
              <div className="bg-color4/60 p-4 rounded-[15%] shadow-container border-[3px] border-color5/60 hover:scale-105 transition-all duration-300 ease-in-out">
                <BsQrCode className="text-[11rem]" onClick={scanQrCode} />
              </div>
              <div className="text-xl font-semibold ">
                Presiona para Scanear el código QR 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
