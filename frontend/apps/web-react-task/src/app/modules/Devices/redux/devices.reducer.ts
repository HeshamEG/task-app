
import { createReducer } from "typesafe-actions";
import { ActionsType } from "../../../../configs/redux/store";
import { deviceErrorAction } from "./devices.action";

export interface DevicesState {
  errors?:any;
}

export const initialState = {};

export const devicesReducer = createReducer<DevicesState, ActionsType>(
  initialState
)
  .handleAction(deviceErrorAction, (state, action) => ({
    ...state,
    errors: action.payload.error,
  }))
