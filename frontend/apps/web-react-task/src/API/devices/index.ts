import { post } from "../../configs/network";
import { DEVICE } from "../../shared/types/models";

  const createDevice = (device:DEVICE ): Promise<any> =>post("api/device/create", device);
  const removeDevice = (deviceId:string|number,gatewayId:string|number ): Promise<any> =>post("api/device/remove", {id:deviceId,gateway:gatewayId});

export { createDevice, removeDevice};
