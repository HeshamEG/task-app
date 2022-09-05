import { getType } from "typesafe-actions";
import {gateways} from "../../../../../configs/utils/data";
import { gatewaysGetAction, gatewayCreateAction, gatewayInfoSetAction, gatewayInfoGetAction, gatewaysSetAction, gatewayErrorAction } from "../gateways.action";

const error={message:"some error message",name:"name",stack:"stack"}
describe("Test gatewaysAction", () => {

test("should create an action to get a gateways", () => {
  const expectedAction = {
    type: getType(gatewaysGetAction),
    payload: undefined,
  };
  expect(gatewaysGetAction()).toEqual(expectedAction);
});

test("should create an action to create gateway", () => {
  expect(gatewayCreateAction({IPv4address:"000.000.000.000",name:"name"},{}));
});
test("should create an action to set selected gateway", () => {
  expect(gatewayInfoSetAction());
});

test("should create an action to get selected gateway", () => {
  const gatewayId="some id"
  const expectedAction = {
    type: getType(gatewayInfoGetAction),
    payload: {id:gatewayId},
  };
  expect(gatewayInfoGetAction(gatewayId)).toEqual(expectedAction);
});
test("should create an action to set gateway", () => {
  const expectedAction = {
    type: getType(gatewaysSetAction),
    payload: {gateways:gateways},
  };
  expect(gatewaysSetAction(gateways)).toEqual(expectedAction);
});
test("should create an action to set gateway error", () => {
  const expectedAction = {
    type: getType(gatewayErrorAction),
    payload: {error},
};
  expect(gatewayErrorAction(error)).toEqual(expectedAction);
});
test("should create an action to clear gateway error", () => {
  const expectedAction = {
    type: getType(gatewayErrorAction),
    payload: {error:undefined},
};
  expect(gatewayErrorAction()).toEqual(expectedAction);
});
})
