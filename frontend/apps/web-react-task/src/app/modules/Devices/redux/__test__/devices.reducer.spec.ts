import { deviceErrorAction } from "../devices.action";
import { devicesReducer , initialState as devicesReducerInitialState  } from "../devices.reducer";

describe("Test devicesReducer", () => {
  test("should return the initial state", () => {
    expect(devicesReducer(undefined, {
      type: "@@gateways/GET"
    })).toEqual({});
  });
  test("should handle deviceErrorAction on set error", () => {
    expect(
      devicesReducer(devicesReducerInitialState, deviceErrorAction({message:"some error message",name:"name",stack:"stack"} as Error))
    ).toEqual({errors:{message:"some error message",name:"name",stack:"stack"}});
  });
  test("should handle deviceErrorAction on clear", () => {
    expect(
      devicesReducer(devicesReducerInitialState, deviceErrorAction())
    ).toEqual({errors:undefined});
  });

});
