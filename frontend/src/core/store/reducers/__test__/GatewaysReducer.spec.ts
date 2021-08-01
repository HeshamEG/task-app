import { actions } from "../..";
import { gatewaysReducer , initialState as gatewaysReducerInitialState  } from "../GatewaysReducer";
import {GATEWAY} from "core/models";
import {gateways} from "core/utils/data";


describe("Test gatewaysReducer", () => {
  test("should return the initial state", () => {
    // @ts-expect-error set null action
    expect(gatewaysReducer(undefined, {})).toEqual({});
  });
  test("should handle actions.gatewaysSetAction no values", () => {
    expect(
      gatewaysReducer(gatewaysReducerInitialState, actions.gatewaysSetAction())
    ).toEqual({gateways: undefined});
  });
  test("should handle actions.gatewaysSetAction on setting gateways", () => {
    expect(
      gatewaysReducer(gatewaysReducerInitialState, actions.gatewaysSetAction(gateways as Array<GATEWAY>))
    ).toEqual({gateways: gateways});
  });

  test("should handle actions.gatewayInfoSetAction no values", () => {
    expect(
      gatewaysReducer(gatewaysReducerInitialState, actions.gatewayInfoSetAction())
    ).toEqual({selectedGatewayInfo: undefined});
  });
  test("should handle actions.gatewayInfoSetAction on set gateway", () => {
    expect(
      gatewaysReducer(gatewaysReducerInitialState, actions.gatewayInfoSetAction(gateways[0] as GATEWAY))
    ).toEqual({selectedGatewayInfo:gateways[0]});
  });
  test("should handle actions.gatewayErrorAction on set error", () => {
    expect(
      gatewaysReducer(gatewaysReducerInitialState, actions.gatewayErrorAction({message:"some error message",name:"name",stack:"stack"} as Error))
    ).toEqual({errors:{message:"some error message",name:"name",stack:"stack"}});
  });
  test("should handle actions.gatewayErrorAction on clear", () => {
    expect(
      gatewaysReducer(gatewaysReducerInitialState, actions.gatewayErrorAction())
    ).toEqual({errors:undefined});
  });

});
