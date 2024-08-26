import  { useEffect, useState } from "react";
import { Formik } from "formik";
import { FormikText } from "../../../components/customFormikComponents/FormikText";
import { FormikSelect } from "../../../components/customFormikComponents/FormikSelect";
import { RiTeamFill } from "react-icons/ri";
import * as Yup from "yup";
import { useServiceQuest } from "../../serviceQuestApp/hooks/useServiceQuest";
import { Team } from "../../../@Types/base";
import { useAuth } from "../../../hooks";
import LoginImage from '../../../assets/pasionLogin.png'


export const Login = () => {
  const [TeamList, setTeamList] = useState([
    {
      label: "",
      value: 0,
      idExtra: null,
    },
  ]);

  const { GetTeamList} = useServiceQuest();
  const {startLogin} = useAuth();


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

  return (
    <>
      <div className="h-[85vh] w-full grid items-center px-2 ">
        <div className="card shadow-container w-full rounded-[15px]">
          <div className="card m-2 border-1 border-skin-primary  rounded-[10px] py-4">
            <Formik
              validationSchema={validationSchema}
              initialValues={{ user: "", team: 0 }}
              onSubmit={async (values) => {
                console.log(values);

                const teamName = TeamList.filter((x) => x.value === values.team)

                const AjaxObj = {
                  UserName: values.user,
                  idTeam: values.team,
                  teamName: teamName[0].label
                };
                await startLogin(AjaxObj)
              }}
            >
              {(formik) => (
                <>
                  <div className="grid mx-4 justify-center gap-4">
                    <div className="w-[12rem] h-[12rem] bg-color1 mt-5 flex items-center place-self-center">
                      <img
                        src={LoginImage}
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
          </div>
        </div>
      </div>
    </>
  );
};
