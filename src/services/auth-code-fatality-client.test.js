import {defaultHttpHeaders, endPoints} from "./client.js";

export const Device={
    id: "",
    name: "",
    mac: "",
};
export const ResponseAuthCodeFatality={
    mock:""
};

const checkDevice = (device= Device) =>(
    device.id 
    && device.name
    && device.mac);

const sendAuthCodeFatality = async(device= Device) =>{
    if(!checkDevice(device)){
        throw new Error("Device not valid");
    }

    const response = await fetch(endPoints.authCodeFatality, {
        method: 'POST',
        headers: defaultHttpHeaders,
        body: JSON.stringify(device)
    });
    const content = await response.json();
    return content;
};

export {
    checkDevice,
    sendAuthCodeFatality
};