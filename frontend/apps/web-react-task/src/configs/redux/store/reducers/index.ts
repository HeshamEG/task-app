import { combineReducers } from "redux";

import { DevicesState, devicesReducer } from "apps/web-react-task/src/app/modules/Devices/redux/devices.reducer";
import { gatewaysReducer, GatewaysState } from "../../../../app/modules/Gatways/redux/gateways.reducer";

export type RootState = {
  gateways: GatewaysState;
  devices: DevicesState;
};

const reducers = combineReducers({
  gateways: gatewaysReducer,
  devices: devicesReducer,
})


export default reducers;
