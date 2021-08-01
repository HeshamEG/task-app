import {
    get,
    post
  } from "core/network";
  import { GATEWAY ,DEVICE} from "core/models"
  const getGateways = (params?: any): Promise<any> =>get("api/gateways", params?params:{});
  const createGateway = (gateway:GATEWAY ): Promise<any> =>post("api/gateway/create", gateway);
  const createDevice = (device:DEVICE ): Promise<any> =>post("api/device/create", device);
  const removeDevice = (deviceId:string|number,gatewayId:string|number ): Promise<any> =>post("api/device/remove", {id:deviceId,gateway:gatewayId});


  export { getGateways , createGateway ,createDevice,removeDevice}