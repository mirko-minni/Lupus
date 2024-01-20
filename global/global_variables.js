const isDebug = true;
const myIp = "192.168.1.2";

export const serverLink = isDebug ? `http://${myIp}:1337/api/` : '';