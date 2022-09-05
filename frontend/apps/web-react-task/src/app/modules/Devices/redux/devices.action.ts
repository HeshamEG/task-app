import { createAction } from "typesafe-actions";

import {
DEVICE_REMOVE,
DEVICE_SET,
DEVICE_ERROR
} from "./devices.types";
import { DEVICE } from "../../../../shared/types/models";

export const deviceRemoveAction = createAction(
  DEVICE_REMOVE,
  (resolve) => (id: string|number,gatewayId:string|number) => resolve({id,gatewayId})
);

export const deviceCreateAction = createAction(
  DEVICE_SET,
  (resolve) => (device:DEVICE) => resolve({device})
);

export const deviceErrorAction = createAction(
  DEVICE_ERROR,
  (resolve) => (error?:Error) => resolve({error})
);

