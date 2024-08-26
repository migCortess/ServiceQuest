export const isMobile = Boolean(import.meta.env.VITE_IS_MOBILE); //TRUE para generar APK y FALSE para generar PWA
export const IdApplication = import.meta.env.VITE_ID_APP;
export const REDIRECT_URL_LOGIN =
  "http://siteqa.appstorage.net/APP/LOGIN/Account/ApplicationWeb";
export const DEFAULT_LENGUAJE = "es";
export const DOMAINNAME = "siteqa.appstorage.net";
export const API_URL = import.meta.env.VITE_API_URL;
export const IP_API_URL = import.meta.env.VITE_API_URL; //"https://localhost:44321/api"; //"https://siteqa.appstorage.net/QA/Api6505/api"; //"https://localhost:44321/api"; //"https://siteqa.appstorage.net/QA/Api6505/api"; //"https://localhost:44321/api"; //"https://siteqa.appstorage.net/QA/Api6505/api"; //"https://localhost:44321/api"; //"https://siteqa.appstorage.net/QA/Api6505/api"; //https://localhost:44321/api" //
export const DEFAULT_CSS = "";
export const LocalStorageParameterName = "Parameters";
export const CompanyTokenKey = import.meta.env.VITE_COMPANY_TOKEN;
export const UserTokenKey = import.meta.env.VITE_SESSION_TOKEN;
export const SocketConfig = import.meta.env.VITE_SOCKET_URL;

export const CONFIG_CSS_INTERNALLOGIN = "CONFIG_CSS_InternalLogin";
export const MAX_ITEMS_AUTOCOMPLETE = 100;
export const HTTPS = "https";
export const HTTP = "http";
export const PIGNUS = "PIGNUS";
export const IP = "192.168.0.3";

//Ruta en servidor
export const SERVER_ROUTE = "/APP/ServiceQuestApp/";
export const PATH_FILE = "PATH_FILE";
export const APP_NAME = "CUST";

//Constantes Acciones
export const VIEW = "VIEW";
export const CREATE = "CREATE";
export const UPDATE = "UPDATE";
export const ROWVIEW = "ROWVIEW";
export const DELETE = "DELETE";
export const EXPORTEXCELDT = "EXPORTEXCELDT";
export const SEARCH = "SEARCH";
export const BTN_ACTIVE_IN = "BTN_ACTIVE_IN";
export const BTN_PERMISSIONS = "BTN_PERMISSIONS";
export const BTN_UPDATE = "BTN_UPDATE";
export const ASIGN_MENU_APP = "ASIGN_MENU_APP";
export const ASIGN_ACTION_MENU = "ASIGN_ACTION_MENU";

//Tamaños de Pantalla
export const MOBILE_SIZE = 768;
export const TABLET_SIZE = 1024;

export const UNAUTHORIZEDPAGE = "/APP/JOLTEONACCESS/UnAuth";
export const UNAUTHORIZEDPAGE_SUPPLIERPORTAL = "/APP/PROVIDER/UnAuth";
export const HOMEPAGE = "/APP/PROVIDER/";
export const ID_HOMEPAGE = 1291;

export const AUTHENTICATED_STATES = {
  CHECKING: "CHECKING",
  AUTHENTICATED: "AUTHENTICATED",
  NOTAUTHENTICATED: "NOT_AUTHENTICATED",
};

//Caracteristicas
export const Characteristics = {
  WorkGroup: {
    Type: 1,
    Color: "#66D7D1",
    Name: "WorkGroup",
  },
  Role: {
    Type: 2,
    Color: "#FFF87F",
    Name: "Role",
  },
  User: {
    Type: 3,
  },
};

//Telefonos

export const phoneNumberMask = [
  "+",
  /[0-9]/,
  /\d/,
  /\d/,
  /\d/,
  "(",
  /\d/,
  /\d/,
  /\d/,
  ")",
  "-",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];
export const phoneNumberNationalMask = [
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\?\d/,
];

//Esquemas
export const Schemas = {
  SAT_CATALOG: "SATCatalog",
  UBILL: "UBill",
};

export const CodeTemplateEmail = {};

export const CodeEmailAction = {};

export const DateFormat = {
  DDMMYYYY: "dd/MM/yyyy",
  DDMMYYYYhhmm: "dd/MM/yyyy hh:mm aa",
  DDMMYYYYhhmmssAPI: "yyyy-MM-dd HH:mm:ss",
};

export const FormatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

//Codigos de Opciones Generales
export const GeneralOptionFather = {
  PAYMENT_METHOD: "PAYMENT_METHOD",
  EVENT_TYPE: "EVENT_TYPE",
  COMPARISON_OPERATOR: "COMPARISON_OPERATOR",
  AUTOCOMPLETE_EMPLOYEES: "Employees",
};

export const StatusBillConcept = {
  PENDING: 1,
};

export const StatusBill = {
  PENDING_AUTHORIZATION: 1,
  AUTHORIZED: 2,
  REFUSED: 3,
  CANCELLED: 4,
  IN_VERIFICATION: 5,
  IN_VALIDATION: 6,
  FINALIZED: 7,
  IN_CLARIFICATION: 8,
};

export const AUTHORIZED_REFUSED_REQUEST = "AUTHORIZED_REFUSED_REQUEST";
export const TypeSwalAction = {
  CONFIRM: 1,
  TEXTAREA: 2,
  DATE: 3,
};

export const DAYS_TO_CHECK = 5;

export const STATUS_CODE_SERVER = {
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  OK: 200,
};

// export const SUPPLIER_PORTAL_PHONE = 8119665404;
// export const MANUAL_USER = "MANUAL_USER";
// export const MANUAL_CFDI = "MANUAL_CFDI";
// export const MANUAL_CRP = "MANUAL_CRP";
// export const MANUAL_FOREIG = "MANUAL_FOREIG";
// export const MANUAL_WCA = "MANUAL_WCA";
//Pages
export const TECHNICALSUPPORT_PAGE = "/APP/PROVIDER/Help/TechnicalSupport";

//
export const COMPANY = {
  MULTITRASLADOS: {
    ID_COMPANY: 1,
  },
};

export const PROVIDERPORTAL_PAYMENTOUTSTATUS = {
  APROVE: "Aprobado",
  REJECT: "Rechazado",
  TO_AUTORIZED: "Por Autorizar",
  WHITOUTPROOF: "Sin Comprobante",
};

export const PATH_FILE_UPLOAD = "PATH_FILE_UPLOAD";
export const PATH_FILE_UPLOAD_SAM = "PATH_FILE_UPLOAD_SAM";
export const DEFAULT_SOURCE_FILE = "NA";

export const ID_APPLICATION = 4;

export const GENERAL_OPTION = {
  SUPPLIER: "SUPPLIER_LIST",
  SHIPMENT: "SHIPMENT_LIST",
  CURRENCY: "CURRENCY_LIST",
  PAYMENTOUTSTATUS: "PAYMENTOUTSTATUS_LIST",
  MODALITY: "MODALITY_LIST",
  CITY: "CITY_LIST",
  USERBYWORKGROUP: "USERBYWORKGROUP_LIST",
  COMPANYBYUSER: "COMPANYBYUSER_LIST",
  CUSTOMERBYCOMPANY: "CUSTOMERBYCOMPANY_LIST",
  LEAFLETBYMODALITY: "LEAFLETBYMODALITY_LIST",
};

export const CURRENCY = {
  USD: {
    CURRENCY_NAME: "U.S. Dollar",
  },
  MXN: {
    CURRENCY_NAME: "Pesos Mexicanos",
  },
  EUR: {
    ID_CURRENCY: 3,
    CURRENCY_NAME: "Euro",
  },
};

export const RFC = {
  MLTI: "MIN930323266",
};

export const ID_USER_INVOICE = "ID_USER_INVOICE";

//Tipos de Archivos
export const INVOICE_FILE = "Invoice";
export const INSTRUCTIONLETTER_FILE = "InstructionLetter";
export const XML_FILE = "Xml";
export const POD_FILE = "POD";

//Parametros
export const CLOSE_PORTAL = "CLOSE_PORTAL";
export const REOPEN_PORTAL = "REOPEN_PORTAL";

export const NA = "NA";
