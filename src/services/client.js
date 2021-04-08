//Enumeraciones
export const ACCEPT = {
  APPLICATION_JSON: "application/json",
};

export const CONTENT_TYPE = {
  APPLICATION_JSON: "application/json",
};

//Objetos de configuraciones
export const defaultHttpHeaders = {
  Accept: ACCEPT.APPLICATION_JSON,
  "Content-Type": CONTENT_TYPE.APPLICATION_JSON,
};

export const endPoints = {
  authCodeFatality: "https://fatality-api.herokuapp.com/auth-code-fatality",
};
