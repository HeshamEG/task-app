import { combineEpics } from "redux-observable";
import gatewayEpic from "../../../../app/modules/Gatways/redux/gateways.epic";
import devicesEpic from "../../../../app/modules/Devices/redux/devices.epic";;

const epics = combineEpics(...gatewayEpic,...devicesEpic);

export default epics;
