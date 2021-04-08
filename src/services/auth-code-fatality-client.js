import { defaultHttpHeaders, endPoints } from "./client.js";

export const Device = {
  code: [],
};

export const ResponseAuthCodeFatality = {
  perfil: "",
  token: "",
};

export const ErrorAuthCodeFatality = {
  statusCode: 500,
  message: "Internal Server Error",
};

const checkDevice = (device = Device) => device && device.id && device.code;

const sendAuthCodeFatality = async (device = Device) => {
  if (!checkDevice(device)) {
    throw new Error("Device not valid");
  }

  const response = await fetch(endPoints.authCodeFatality, {
    method: "POST",
    headers: defaultHttpHeaders,
    body: JSON.stringify(device),
  });
  const content = await response.json();
  return content;
};

export { checkDevice, sendAuthCodeFatality };
