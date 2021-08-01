import { actions } from "../..";
import { getType } from "typesafe-actions";
import {GATEWAY} from "core/models";
import {gateways,gatewayWithDevices} from "core/utils/data";
const error={message:"some error message",name:"name",stack:"stack"}
describe("Test gatewaysAction", () => {

test("should create an action to get a gateways", () => {
  const expectedAction = {
    type: getType(actions.gatewaysGetAction),
    payload: undefined,
  };
  expect(actions.gatewaysGetAction()).toEqual(expectedAction);
});

test("should create an action to create gateway", () => {
  expect(actions.gatewayCreateAction({IPv4address:"000.000.000.000",name:"name"},{}));
});
test("should create an action to set selected gateway", () => {
  expect(actions.gatewayInfoSetAction());
});

test("should create an action to get selected gateway", () => {
  const gatewayId="some id"
  const expectedAction = {
    type: getType(actions.gatewayInfoGetAction),
    payload: {id:gatewayId},
  };
  expect(actions.gatewayInfoGetAction(gatewayId)).toEqual(expectedAction);
});
test("should create an action to set gateway", () => {
  const expectedAction = {
    type: getType(actions.gatewaysSetAction),
    payload: {gateways:gateways},
  };
  expect(actions.gatewaysSetAction(gateways)).toEqual(expectedAction);
});
test("should create an action to set gateway error", () => {
  const expectedAction = {
    type: getType(actions.gatewayErrorAction),
    payload: {error},
};
  expect(actions.gatewayErrorAction(error)).toEqual(expectedAction);
});
test("should create an action to clear gateway error", () => {
  const expectedAction = {
    type: getType(actions.gatewayErrorAction),
    payload: {error:undefined},
};
  expect(actions.gatewayErrorAction()).toEqual(expectedAction);
});
})