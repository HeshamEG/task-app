import { combineReducers } from "redux";

import { gatewaysReducer, gatewaysState } from "./GatewaysReducer";
import {devicesReducer , devicesState } from "./DevicesReducer";

import { connectRouter } from 'connected-react-router'



export type RootState = {
  gateways: gatewaysState;
  devices:devicesState;
};


const reducers=(history:any) => combineReducers({
  router: connectRouter(history),
  gateways: gatewaysReducer,
  devices: devicesReducer,

})


export default reducers;
