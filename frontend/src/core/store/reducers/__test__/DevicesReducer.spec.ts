import { actions } from "../..";
import { devicesReducer , initialState as devicesReducerInitialState  } from "../DevicesReducer";
import {DEVICE} from "core/models";
import {gateways} from "core/utils/data";


describe("Test devicesReducer", () => {
  test("should return the initial state", () => {
    // @ts-expect-error set null action
    expect(devicesReducer(undefined, {})).toEqual({});
  });
  test("should handle actions.deviceErrorAction on set error", () => {
    expect(
      devicesReducer(devicesReducerInitialState, actions.deviceErrorAction({message:"some error message",name:"name",stack:"stack"} as Error))
    ).toEqual({errors:{message:"some error message",name:"name",stack:"stack"}});
  });
  test("should handle actions.deviceErrorAction on clear", () => {
    expect(
      devicesReducer(devicesReducerInitialState, actions.deviceErrorAction())
    ).toEqual({errors:undefined});
  });

});
