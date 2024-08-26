import { useEffect, useState } from "react";
import { Formik } from "formik";
import { FormikText } from "../../../components/customFormikComponents/FormikText";
import { FormikSelect } from "../../../components/customFormikComponents/FormikSelect";
import { RiTeamFill } from "react-icons/ri";
import * as Yup from "yup";
import { useServiceQuest } from "../hooks/useServiceQuest";
import { Team } from "../../../@Types/base";
import { useSwal } from "../../../hooks/templateHooks/useSwal";
import { useNavigate } from "react-router-dom";
import { isMobile, SERVER_ROUTE } from "../../../Constants";

export const Home = () => {
  const [TeamList, setTeamList] = useState([
    {
      label: "",
      value: 0,
      idExtra: null,
    },
  ]);

  const { GetTeamList, TeamAssign } = useServiceQuest();
  const { SuccessError } = useSwal();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    user: Yup.string().nullable().required("Campo Obligatorio"),
    team: Yup.number().required("Favor de seleccionar un Equipo"),
  });

  useEffect(() => {
    (async () => {
      const data = await GetTeamList();
      const list = data.map((x: Team) => {
        return {
          label: x.teamName,
          value: x.idTeam,
          idExtra: null,
        };
      });
      setTeamList(list);
    })();
  }, []);

  useEffect(() => {
    const session = localStorage.getItem("SESSION_SERVICEQUEST");
    if (!session) return navigate(`${isMobile ? "/" : SERVER_ROUTE}QrScan`);
  }, []);

  return (
    <>
     
          <Formik
            validationSchema={validationSchema}
            initialValues={{ user: "", team: 0 }}
            onSubmit={async (values) => {
              console.log(values);

              const AjaxObj = {
                userName: values.user,
                idTeam: values.team,
              };

              const rsl = await TeamAssign(AjaxObj);
              if (rsl?.errorNumber === 400) {
                SuccessError("error", rsl.errorMessage);
              }
              localStorage.setItem("SESSION_SERVICEQUEST", JSON.stringify(rsl));
              console.log(rsl);
            }}
          >
            {(formik) => (
              <>
                <div className="grid mx-4 ">
                  <div className="w-[2rem] h-[2rem] bg-color1 mt-5 flex items-center place-self-center">
                    <img
                      src="https://i1.sndcdn.com/artworks-8NX2OGTIVN6KpE9m-zFW3KA-t500x500.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <FormikText label="User" name="user" icon="i-user" />
                  </div>

                  <div className="">
                    <FormikSelect
                      label="Equipo"
                      reactIcon={<RiTeamFill className="text-2xl" />}
                      options={TeamList}
                      name="team"
                      placeholder="Selecciona tu equipo"
                    />
                  </div>

                  <div
                    className="btn btn-tw-primary mt-4"
                    onClick={() => {
                      formik.handleSubmit();
                    }}
                  >
                    Comenzar
                  </div>
                </div>
              </>
            )}
          </Formik>
      
    </>
  );
};
