export const Device = {
  id: "",
  name: "",
  mac: "",
};
export const ResponseAuthCodeFatality = {};

const checkDevice = (device = Device) => device.id && device.name && device.mac;

const sendAuthCodeFatality = async (device = Device) => {
  if (!checkDevice(device)) {
    throw new Error("Device not valid");
  }

  const rawResponse = await fetch("https://auth-code-fatality", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(device),
  });
  const content = await rawResponse.json();

  console.log(content);
};
