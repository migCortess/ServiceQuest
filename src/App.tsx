import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./routes/AppRoute";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import { IonApp, setupIonicReact } from "@ionic/react";

import "@ionic/react/css/core.css";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import { SpinerLoad } from "./components/templateComponents/SpinerLoad";
setupIonicReact();
const App = () => {

  const [theme, _settheme] = useState(
    "theme_Multitraslados theme_Multitrans theme_Lastrack theme_360Logistics theme_AZCommerce theme_UsoInterno "
  );

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <IonApp className="full-screen h-s theme_Multitraslados" >
          <BrowserRouter>
            <div className={`${theme}`} id={"theme-container"}>
              <AppRoute />
            </div>
          </BrowserRouter>
          <SpinerLoad />
        </IonApp>
      </I18nextProvider>
    </>
  );
};

export default App;
