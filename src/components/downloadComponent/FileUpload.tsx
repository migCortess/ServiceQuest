import { useEffect } from "react";
// import { useUser } from "../../hooks";
import * as FileServices from "../../services/templateServices/FileService";
import {
  API_URL,
  DEFAULT_SOURCE_FILE,
  DOMAINNAME,
  ID_APPLICATION,
  IP_API_URL,
} from "../../Constants";
import { useTranslation } from "react-i18next";
import { useSpinLoadStore } from "../../store/useSpinLoadStore";
import CustomFileInput from "../styledComponents/CustomFileInput";
import { useFile } from "../../hooks/templateHooks/useFile";
import { useSwal } from "../../hooks/templateHooks/useSwal";

interface Props {
  label?: string;
  id?: string;
  Source?: any;
  LabelFile?: any;
  IdRelation?: number;
  CodeFileType?: string;
  DataItem?: any;
  ViewUploadFile?: boolean;
  FilesState?: any;
  disabled?: boolean;
  IsMultipleFile?: boolean;
  EventoToFileUpload?: (x: any) => void; ///
  EventToDeleteFile?: (x: any) => void; ///
  ParameterCode?: string;
  IsUniqueFile?: boolean;
  Extension?: string;
  ShowDataTable?: boolean;
  setJsonDataFromXml?: any;
  validateUploadFiles?: () => void;
  IdApplication?: number;
  AddFilesData?: (x: any) => void;
  DeleteFilesData?: (x: number) => void;
  formik?: any;
  FatherFileArray?: any;
  EventToDeleteFileFather?: any;
}

export const FileUpload = ({
  label, //Nombre que dice el boton de "Subir Archivo"
  id = "FUD",
  Source,
  LabelFile = null,
  IdRelation,
  CodeFileType,
  DataItem,
  ViewUploadFile = false,
  FilesState, //array de archivo se puede usar el formik o no segun sea el caso
  disabled = false, //Habilitar o desahilitar
  IsMultipleFile = true, //SI es un unico archivo o es multiple
  EventoToFileUpload, //Evento que se mandara a ejecutar cuando se cargue uno o varios archivos
  EventToDeleteFile, // Eveto que se ejecutara cuando borramos un Archivo
  ParameterCode = "PATH_FILE_UPLOAD",
  IsUniqueFile, //Cambia modalidad si es para un archivo o varios archivos
  Extension = "", //Extensiones permitidas de archivos,        IsUniqueFile = false, //Cambia el template para un archivo o varios archivos
   //Asigna el Contenido del XML en un JSON
  validateUploadFiles,
  IdApplication = 1, //default SAM aplication,
  AddFilesData, //funcion util cuando se tiene una tabla y se quiere interactuar con el componente padre al agregar un archivo
  DeleteFilesData, //Funcion util cuando se tiene una tabla y se quiere interactuar con el componente padre al eliminar un archivo
  formik, //para integrar con formulario
  FatherFileArray, //por si pertenence a un arreglo superior de archivos
  EventToDeleteFileFather,
  ShowDataTable,
}: Props) => {
  const [t] = useTranslation("global");
  // const {
  //   label, //Nombre que dice el boton de "Subir Archivo"
  //   id = "FUD",
  //   Source,
  //   LabelFile = null,
  //   IdRelation,
  //   CodeFileType,
  //   DataItem,
  //   ViewUploadFile = false,
  //   FilesState, //array de archivo se puede usar el formik o no segun sea el caso
  //   disabled = false, //Habilitar o desahilitar
  //   IsMultipleFile = true, //SI es un unico archivo o es multiple
  //   EventoToFileUpload, //Evento que se mandara a ejecutar cuando se cargue uno o varios archivos
  //   EventToDeleteFile, // Eveto que se ejecutara cuando borramos un Archivo
  //   ParameterCode = "PATH_FILE_UPLOAD",
  //   IsUniqueFile, //Cambia modalidad si es para un archivo o varios archivos
  //   Extension = "", //Extensiones permitidas de archivos,        IsUniqueFile = false, //Cambia el template para un archivo o varios archivos
  //   setJsonDataFromXml, //Asigna el Contenido del XML en un JSON
  //   validateUploadFiles,
  //   IdApplication = 1, //default SAM aplication,
  //   AddFilesData = null, //funcion util cuando se tiene una tabla y se quiere interactuar con el componente padre al agregar un archivo
  //   DeleteFilesData = null, //Funcion util cuando se tiene una tabla y se quiere interactuar con el componente padre al eliminar un archivo
  //   formik = null, //para integrar con formulario
  //   FatherFileArray = null, //por si pertenence a un arreglo superior de archivos
  //   EventToDeleteFileFather, // evento a realizar cuando se elimina elemento del array superior
  // } = props;

  //#region HOOKS
  // const { User } = useUser();
  const { SuccessError } = useSwal();
  const { ShowLoad, HideLoad } = useSpinLoadStore();
  const { FileList, AddFileRelation, DeleteFileRelation } = useFile();
  //#endregion

  //#region VARIABLES
  //#endregion

  //#region USESTATE
  //#endregion

  //#region FUNCIONES
  // const ReadFile = async (xml: Blob) => {
  //   const reader = new FileReader();
  //   reader.readAsText(xml);
  //   reader.onload = () => {
  //     if (reader.result) {
  //       const result = reader.result.toString().replace(/\w=?="\s/g, '" ');
  //       const options = {
  //         ignoreAttributes: false,
  //         attributeNamePrefix: "_",
  //         allowBooleanAttributes: true,
  //       };
  //       if (setJsonDataFromXml) {
  //         setJsonDataFromXml(parser);
  //       }
  //     }
  //   };
  //   reader.onerror = () => {
  //     // console.log(reader.error);
  //   };
  // };

  const DeleteFile = async (idFile: number) => {
    if (EventToDeleteFileFather) {
      EventToDeleteFileFather(idFile, formik);
    } else {
      if (IdRelation) {
        await DeleteFileRelation(
          Source,
          CodeFileType ? CodeFileType : "",
          IdRelation,
          idFile
        );
      }
    }
    let array = FilesState[0];
    const getindexFile = (element: any) => element.idFile === idFile;
    const index = FilesState[0].findIndex(getindexFile);
    array.splice(index, 1);
    if (DeleteFilesData) await DeleteFilesData(idFile);
    FilesState[1]([...array]);

    if (FatherFileArray) {
      const files = FatherFileArray[0].filter(
        (file: any) => file.idFile != idFile
      );
      FatherFileArray[1]([...files]);
    }
    if (EventToDeleteFile) {
      EventToDeleteFile([...array]);
    }
    if (validateUploadFiles) {
      validateUploadFiles();
    }

    if (IdRelation && CodeFileType) {
      ShowLoad();
      const Result = await FileList(Source, CodeFileType, IdRelation);
      FilesState[1](Result);
      HideLoad();
    }
    if (!IsUniqueFile) {
      let element = document.getElementById(id)
      if (element) {
        if ((element as any).value) {
          (element as any).value = "";
        }
      }
    }
  };

  const SelectFile = async (ArrayFiles: any) => {
    let arry = FilesState[0];
    for (var i in ArrayFiles) {
      if (i !== "item" && i !== "length") {
        const data = new FormData();

        if (ArrayFiles[i].type === "text/xml") {
          // await ReadFile(ArrayFiles[i]);
        }
        if (Extension !== "") {
          if (!Extension.includes(ArrayFiles[i].type))
            return SuccessError("error", t("ExtensionErr"));
        }
        data.append("file", ArrayFiles[i]);
        const Result = await FileServices.UploadFile(
          ID_APPLICATION,
          14,
          ParameterCode,
          Source,
          data
        );
        if (AddFilesData) {
          await AddFilesData(arry);
        } else {
          if (IdRelation) {
            await AddFileRelation(
              Source,
              CodeFileType ? CodeFileType : "",
              IdRelation,
              Result.idFile
            );
          }
        }
        arry.push(Result);
      }
    }
    FilesState[1]([...arry]);
    if (FatherFileArray) {
      FatherFileArray[1]([...FatherFileArray[0], ...arry]);
    }
    if (EventoToFileUpload) {
      EventoToFileUpload(FilesState);
    }
    if (IdRelation && CodeFileType) {
      ShowLoad();
      const Result = await FileList(Source, CodeFileType, IdRelation);
      FilesState[1](Result);
      HideLoad();
    }
  };
  //#endregion

  //#region USEEFFECT
  useEffect(() => {
    (async () => {
      if (formik) formik.setFieldValue("FilesRequest", FilesState[0]);
    })();
  }, [FilesState[0]]);

  useEffect(() => {
    (async () => {
      // ShowLoad();
      if (IdRelation && CodeFileType) {
        const Result = await FileList(Source, CodeFileType, IdRelation);
        FilesState[1](Result);
      } else {
        FilesState[1]([]);
      }
      // HideLoad();
    })();
  }, [IdRelation, CodeFileType, DataItem]);
  //#endregion

  return (
    <>
      {ShowDataTable ? (
        <>
          <div className="container m-0 p-0">
            <div className="row">
              {disabled ? (
                <></>
              ) : (
                <>
                  <div className="col-12 text-center">
                    <button
                      disabled={disabled}
                      className="btn btn-tw-primary w-[60%]"
                      onClick={(_e) => {
                        let element = document.getElementById(id);
                        (element as any).click();
                      }}
                      type="button"
                      id="button-addon1"
                    >
                      <i className="i-upload">
                        {label ? label : t("UploadFile")}
                      </i>
                    </button>
                    <input
                      type="file"
                      accept={Extension}
                      multiple={IsMultipleFile}
                      onChange={(e) => {
                        SelectFile(e.target.files);
                      }}
                      className="d-none"
                      id={id}
                    />
                  </div>
                </>
              )}
              {FilesState[0].length > 0 && (
                <>
                  <div className="col-12 mt-1">
                    {/* items: FilesState[0] */}
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {IsUniqueFile ? (
            <div className="container m-0 p-0">
              {FilesState[0].length === 0 ? (
                <>
                  {ViewUploadFile ? (
                    <></>
                  ) : (
                    <>
                      <CustomFileInput
                        accept={Extension}
                        multiple={IsMultipleFile}
                        onChange={(e) => {
                          SelectFile(e.target.files);
                        }}
                        id={id}
                        label={t("ChooseFile")}
                      ></CustomFileInput>
                    </>
                  )}
                </>
              ) : (
                <div className="row-fluid ">
                  <ul className="list-group">
                    {FilesState[0].map((x: any) => {
                      if (LabelFile) {
                        return (
                          <>
                            {disabled ? (
                              <>
                                <li
                                  key={x.idFile}
                                  className="list-group-item text-center"
                                >
                                  <a
                                    href={`${
                                      window.location.href.includes(DOMAINNAME)
                                        ? IP_API_URL
                                        : API_URL
                                    }/File/Application/${ID_APPLICATION}/File/${
                                      x.idFile
                                    }/ParameterCode/${ParameterCode}/${DEFAULT_SOURCE_FILE}`}
                                  >
                                    <span className="text-sm mr-2 text-slate-800">
                                      {LabelFile}
                                    </span>
                                    <i
                                      className="i-download text-amber-600"
                                      title={t("Download")}
                                    ></i>
                                  </a>
                                </li>
                              </>
                            ) : (
                              <>
                                <li key={x.idFile} className="list-group-item">
                                  <span className="text-sm mr-2 text-slate-800">
                                    {LabelFile}
                                  </span>
                                  <a
                                    href={`${
                                      window.location.href.includes(DOMAINNAME)
                                        ? IP_API_URL
                                        : API_URL
                                    }/File/Application/${ID_APPLICATION}/File/${
                                      x.idFile
                                    }/ParameterCode/${ParameterCode}/${DEFAULT_SOURCE_FILE}`}
                                  >
                                    <i
                                      className="i-download text-amber-600 "
                                      title={t("Download")}
                                    ></i>
                                  </a>
                                  {!disabled ? (
                                    <i
                                      className="i-trash cursor-pointer ml-2"
                                      title={t("Delete")}
                                      onClick={() => {
                                        DeleteFile(x.idFile);
                                      }}
                                    ></i>
                                  ) : (
                                    <></>
                                  )}
                                </li>
                              </>
                            )}
                          </>
                        );
                      } else {
                        return (
                          <li key={x.idFile} className="list-group-item">
                            <a
                              href={`${
                                window.location.href.includes(DOMAINNAME)
                                  ? IP_API_URL
                                  : API_URL
                              }/File/Application/${ID_APPLICATION}/File/${
                                x.idFile
                              }/ParameterCode/${ParameterCode}/${DEFAULT_SOURCE_FILE}`}
                            >
                              <i className="i-download"></i>
                            </a>
                            {!disabled ? (
                              <i
                                className="i-trash"
                                onClick={() => {
                                  DeleteFile(x.idFile);
                                }}
                              ></i>
                            ) : (
                              <></>
                            )}
                            {x.fileName}
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="container m-0 p-0">
              <div className="row align-items-center">
                <div className="col-3">
                  <button
                    disabled={disabled}
                    className="btn btn-tw-primary"
                    onClick={() => {
                      let element = document.getElementById(id);
                      (element as any).click();
                    }}
                    type="button"
                    id="button-addon1"
                  >
                    <i className="i-upload">{t("UploadFile")}</i>
                  </button>
                  <input
                    type="file"
                    accept={Extension}
                    multiple={IsMultipleFile}
                    onChange={(e) => {
                      SelectFile(e.target.files);
                    }}
                    className="d-none"
                    id={id}
                  />
                </div>
                <div className="col-9">
                  <ul className="list-group">
                    {FilesState[0].length > 0 &&
                      FilesState[0].map((x: any) => {
                        return (
                          <li key={x.idFile} className="list-group-item">
                            <a
                              href={`${
                                window.location.href.includes(DOMAINNAME)
                                  ? IP_API_URL
                                  : API_URL
                              }/File/Application/${IdApplication}/File/${
                                x.idFile
                              }/ParameterCode/${ParameterCode}`}
                            >
                              <i className="i-download"></i>
                            </a>
                            {true ? (
                              disabled ? (
                                <i
                                  className="i-trash"
                                  onClick={() => {
                                    DeleteFile(x.idFile);
                                  }}
                                ></i>
                              ) : (
                                ""
                              )
                            ) : (
                              ""
                            )}
                            {x.fileName}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
