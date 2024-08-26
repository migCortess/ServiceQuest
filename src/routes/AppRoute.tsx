import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { AppLogin } from "../app/login/AppLogin";
import { useAuth } from "../hooks";
import {
  SERVER_ROUTE,
  UserTokenKey,
  AUTHENTICATED_STATES,
  isMobile,
} from "../Constants";
import Swal from "sweetalert2";
import defineConfig from "../../package.json";
import {AppServiceQuest} from '../app/serviceQuestApp/AppServiceQuest';


export const AppRoute = () => {
  const { status, errorMessage } = useAuth();

  useEffect(() => {
    if (errorMessage) {
      Swal.fire("Error", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <div className="m-0 p-0">
      {/* {import.meta.env.MODE !== "production" && (
        <AmbientInfo />
      )} */}
      <Routes>
        {status === AUTHENTICATED_STATES.AUTHENTICATED ? (
          <>
            <Route path={`${isMobile ? "" : defineConfig.homepage}*`} element={<AppServiceQuest />} />
            <Route
              path={`${isMobile ? "" : defineConfig.homepage}*`}
              element={<Navigate to={`${SERVER_ROUTE}`} />}
            />
          </>
        ) : status === AUTHENTICATED_STATES.NOTAUTHENTICATED ? (
          <>
            <Route path={`${isMobile ? "" : defineConfig.homepage}*`} element={<AppLogin />} />
            {!localStorage.getItem(UserTokenKey) && (
              <Route
                path={`/*`}
                element={<Navigate to={`${isMobile ? "" : defineConfig.homepage}`} />}
              />
            )}
          </>
        ) : status === AUTHENTICATED_STATES.CHECKING ? (
          <>
            <Route path={`${isMobile ? "" : defineConfig.homepage}*`} element={<>Loading...</>}/>
            <Route
              path={`/*`}
              element={<Navigate to={`${isMobile ? "" : defineConfig.homepage}*`} />}
            />
          </>
        ) : (
          <></>
        )}
      </Routes>
    </div>
  );
};
