import * as ParameterList from "../services/templateServices/parameterServices";
import { LocalStorageParameterName } from "../Constants";
const getParameters = async () => {
  let materias = [];
  try {
    materias = await ParameterList.ParameterList();
    return materias;
  } catch (e) {
    return materias;
  }
};

//Cargo la lista de Parametros de la Aplicacion En el Localstorage
export const LoadParameter = async () => {
  if (localStorage.getItem(LocalStorageParameterName) != null) {
    localStorage.removeItem(LocalStorageParameterName);
  }
  let DataList = await getParameters();
  localStorage.setItem(LocalStorageParameterName, JSON.stringify(DataList));
  return true;
};

//Obtengo El valor de un parametro En espefifico
export const GetValueParameter = (Code: string) => {
  if (localStorage.getItem(LocalStorageParameterName) === null) {
    console.log("LocalStorage(Parameters) NO esta Cargado");
    return "{}";
  } else {
    const localValue = localStorage.getItem(LocalStorageParameterName);
    let DataList = null;
    if (localValue) DataList = JSON.parse(localValue);
    let item = [];

    if (Array.isArray(DataList)) {
      item = DataList.filter((parameter) => parameter.code === Code);
    } else {
      DataList.code === Code ? item.push(DataList) : (item = []);
    }
    if (item.length !== 0) {
      return item[0].value;
    } else {
      console.log(`No Se encontro Parametro Con Codigo: ${Code}`);
      return "{}";
    }
  }
};
