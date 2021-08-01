import { createReducer } from "typesafe-actions";
import { actions, ActionsType } from "..";

export interface gatewaysState {
  gateways?: any;
  selectedGatewayInfo?: any;
  errors?:any;

}

export const initialState = {};

export const gatewaysReducer = createReducer<gatewaysState, ActionsType>(
  initialState
)
  .handleAction(actions.gatewaysSetAction, (state, action) => ({
    ...state,
    gateways: action.payload.gateways?action.payload.gateways:undefined,
  }))
  .handleAction(actions.gatewayInfoSetAction, (state, action) => ({
    ...state,
    selectedGatewayInfo: action.payload.gateway?action.payload.gateway:undefined,
  }))
  .handleAction(actions.gatewayErrorAction, (state, action) => ({
    ...state,
    errors: action.payload.error,
  }))
