import { createReducer } from "typesafe-actions";
import { actions, ActionsType } from "..";

export interface devicesState {
  errors?:any;
}

export const initialState = {};

export const devicesReducer = createReducer<devicesState, ActionsType>(
  initialState
)
  .handleAction(actions.deviceErrorAction, (state, action) => ({
    ...state,
    errors: action.payload.error,
  }))
