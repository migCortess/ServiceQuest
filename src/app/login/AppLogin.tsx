import {
  IonContent,
  IonFooter,
  IonPage,
  IonToolbar,
} from "@ionic/react";

import { AppRoute } from "./routes/AppRoute";
import { NavMenu } from "../serviceQuestApp/components/NavMenu";

import { SocketProvider } from "../../contex/SocketContext";
import { useAuth } from "../../hooks";
import { useEffect } from "react";

export const AppLogin = () => {

    const { SessionLogin } = useAuth();


    useEffect(() => {
        (async () => {
          //Checamos Si tenemos una Session iniciada
          await SessionLogin()
        })();
      }, []);
      

  return (
    <IonPage>
      <SocketProvider>
<div className="flex h-[100vh] overflow-clip theme_Multitraslados  bg-[rgba(203,170,213,1)] border-none">
          <main className="h-full lg:h-[98vh] w-full ">
            <div className="block lg:hidden">
            </div>
            <IonContent className="ion-padding" color={"background"}>
              <div className="relative">
                <AppRoute />
              </div>
            </IonContent>
          </main>
          <div
            className={`block lg:hidden z-50 transition-all duration-300 ease-in-out`}
          >
          </div>
	</div>
        <IonFooter className="block lg:hidden z-50 bg-[rgba(203,170,213,1)] border-none">
          <IonToolbar  color={''}>
            <NavMenu />
          </IonToolbar>
        </IonFooter>
      </SocketProvider>
    </IonPage>
  );
};