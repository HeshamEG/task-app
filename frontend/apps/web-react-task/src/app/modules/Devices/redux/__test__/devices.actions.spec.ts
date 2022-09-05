import { getType } from "typesafe-actions";
import { DEVICE } from "apps/web-react-task/src/shared/types/models";
import { deviceCreateAction, deviceRemoveAction, deviceErrorAction } from "../devices.action";

const error={message:"some error message",name:"name",stack:"stack"}
const device:DEVICE={UID:"id",gateway:"gatewayId",status:"ofline",vendor:"vendor"}

describe("Test devicesAction", () => {

test("should create an action to create a device", () => {
  expect(deviceCreateAction(device));
});

test("should create an action to remove a device", () => {
  expect(deviceRemoveAction("device id","gateway id"));
});

test("should create an action to handle device error", () => {
  const expectedAction = {
    type: getType(deviceErrorAction),
    payload: {error},
};
  expect(deviceErrorAction(error)).toEqual(expectedAction);
});
test("should create an action to clear device error", () => {
  const expectedAction = {
    type: getType(deviceErrorAction),
    payload: {error:undefined},
};
  expect(deviceErrorAction()).toEqual(expectedAction);
});
})
