import { combineEpics } from "redux-observable";
import gatewayEpic from "./GatewaysEpic";
import devicesEpic from "./DevicesEpic";


const epics = combineEpics(...gatewayEpic,...devicesEpic);

export default epics;
