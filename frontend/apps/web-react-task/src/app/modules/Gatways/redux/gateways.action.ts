import { createAction } from "typesafe-actions";

import {
  GATEWAYS_SET,
  GATEWAYS_GET,
  GATEWAY_INFO_GET,
  GATEWAYS_ERROR,
  GATEWAY_INFO_SET,
  GATEWAY_CREATE
} from "./gateways.types";
import { GATEWAY } from "../../../../shared/types/models";

export const gatewaysGetAction = createAction(
  GATEWAYS_GET,
  (resolve) => () => resolve()
);

export const gatewaysSetAction = createAction(
  GATEWAYS_SET,
  (resolve) => (gateways:Array<GATEWAY>) => resolve({gateways})
);

export const gatewayCreateAction = createAction(
  GATEWAY_CREATE,
  (resolve) => (gateway:GATEWAY,navigate:any) => resolve({gateway,navigate:navigate})
);

export const gatewayInfoGetAction = createAction(
  GATEWAY_INFO_GET,
  (resolve) => (id?: string) => resolve({id})
);

export const gatewayInfoSetAction = createAction(
  GATEWAY_INFO_SET,
  (resolve) => (gateway?: GATEWAY) => resolve({gateway})
);

export const gatewayErrorAction = createAction(
  GATEWAYS_ERROR,
  (resolve) => (error?: Error) => resolve({error})
);



