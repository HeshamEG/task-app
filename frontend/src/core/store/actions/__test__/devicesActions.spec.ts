import { actions } from "../..";
import { getType } from "typesafe-actions";
import {DEVICE} from "core/models";

const error={message:"some error message",name:"name",stack:"stack"}
const device:DEVICE={UID:"id",gateway:"gatewayId",status:"ofline",vendor:"vendor"}

describe("Test devicesAction", () => {

test("should create an action to create a device", () => {
  expect(actions.deviceCreateAction(device));
});

test("should create an action to remove a device", () => {
  expect(actions.deviceRemoveAction("device id","gateway id"));
});

test("should create an action to handle device error", () => {
  const expectedAction = {
    type: getType(actions.deviceErrorAction),
    payload: {error},
};
  expect(actions.deviceErrorAction(error)).toEqual(expectedAction);
});
test("should create an action to clear device error", () => {
  const expectedAction = {
    type: getType(actions.deviceErrorAction),
    payload: {error:undefined},
};
  expect(actions.deviceErrorAction()).toEqual(expectedAction);
});
})