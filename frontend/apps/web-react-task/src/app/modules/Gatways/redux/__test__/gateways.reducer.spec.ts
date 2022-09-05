import { GATEWAY } from "apps/web-react-task/src/shared/types/models";
import { gatewaysReducer, initialState as gatewaysReducerInitialState } from "../gateways.reducer";
import { gateways } from '../../../../../configs/utils/data';
import { gatewaysSetAction, gatewayInfoSetAction, gatewayErrorAction } from "../../../../../configs/redux/store/actions";

describe("Test gatewaysReducer", () => {
  test("should return the initial state", () => {
    // @ts-expect-error set null action
    expect(gatewaysReducer(undefined, {})).toEqual(gatewaysReducerInitialState);
  });
  test("should handle gatewaysSetAction no values", () => {
    expect(
      gatewaysReducer(gatewaysReducerInitialState, gatewaysSetAction([]))
    ).toEqual({ gateways: [] ,loading: false});
  });
  test("should handle gatewaysSetAction on setting gateways", () => {
    expect(
      gatewaysReducer(gatewaysReducerInitialState, gatewaysSetAction(gateways as Array<GATEWAY>))
    ).toEqual({ gateways: gateways ,loading: false});
  });

  test("should handle gatewayInfoSetAction no values", () => {
    expect(
      gatewaysReducer(gatewaysReducerInitialState, gatewayInfoSetAction())
    ).toEqual({ selectedGatewayInfo: undefined,gateways:[],loading: false });
  });
  test("should handle gatewayInfoSetAction on set gateway", () => {
    expect(
      gatewaysReducer(gatewaysReducerInitialState, gatewayInfoSetAction(gateways[0] as GATEWAY))
    ).toEqual({...gatewaysReducerInitialState, selectedGatewayInfo: gateways[0] ,loading: false});
  });
  test("should handle gatewayErrorAction on set error", () => {
    expect(
      gatewaysReducer(gatewaysReducerInitialState, gatewayErrorAction({ message: "some error message", name: "name", stack: "stack" } as Error))
    ).toEqual({...gatewaysReducerInitialState, errors: { message: "some error message", name: "name", stack: "stack" } ,loading: false});
  });
  test("should handle gatewayErrorAction on clear", () => {
    expect(
      gatewaysReducer(gatewaysReducerInitialState, gatewayErrorAction())
    ).toEqual({ ...gatewaysReducerInitialState,errors: undefined ,loading: false});
  });

});
