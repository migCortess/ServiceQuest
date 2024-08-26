import { STATUS_CODE_SERVER } from "../../Constants";

interface ServerErr {
  response: {
    data: {
      errorMessage: string;
      errorNumber: string;
    };
    status: number;
  };
}

export const ValidatorError = (ServerResponse: ServerErr) => {
  let Errosvr;
  if (ServerResponse.response) {
    if (ServerResponse.response.data.errorMessage) {
      Errosvr = {
        data: {
          ...ServerResponse.response.data,
          ...{ errorNumber: ServerResponse.response.status },
        },
      };
    } else {
      Errosvr = {
        data: {
          ...{ errorMessage: "BAD_REQUEST" },
          ...{ errorNumber: ServerResponse.response.status },
        },
      };
    }
  } else {
    Errosvr = {
      data: {
        errorMessage: "CONECTION_ERROR",
        errorNumber: STATUS_CODE_SERVER.NOT_FOUND,
      },
    };
  }
  console.log(ServerResponse);
  return Errosvr;
};
