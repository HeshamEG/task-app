import {
    get,
    post
  } from "../../configs/network";
import { GATEWAY } from "../../shared/types/models";

  const getGateway = (gatewayId: unknown): Promise<any> =>get(`api/gateways?id=${gatewayId}`);
  const getGateways = (): Promise<any> =>get(`api/gateways`);
  const createGateway = (gateway:GATEWAY ): Promise<any> =>post("api/gateway/create", gateway);

export { getGateways , getGateway , createGateway};
