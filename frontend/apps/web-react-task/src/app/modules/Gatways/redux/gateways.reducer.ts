import { GATEWAY } from "apps/web-react-task/src/shared/types/models";
import { createReducer } from "typesafe-actions";
import { ActionsType } from "../../../../configs/redux/store";
import { gatewaysSetAction, gatewayInfoSetAction, gatewayErrorAction } from "../../../../configs/redux/store/actions";

export interface GatewaysState {
  gateways: Array<GATEWAY>;
  loading: boolean;
  selectedGatewayInfo?: any;
  errors?:any;

}

export const initialState = { gateways:[], loading:true };

export const gatewaysReducer = createReducer<GatewaysState, ActionsType>(
  initialState
)
  .handleAction(gatewaysSetAction, (state, action) => ({
    ...state,
    gateways: action.payload.gateways,
    loading: false
  }))
  .handleAction(gatewayInfoSetAction, (state, action) => ({
    ...state,
    selectedGatewayInfo: action.payload.gateway?action.payload.gateway:undefined,
    loading: false
  }))
  .handleAction(gatewayErrorAction, (state, action) => ({
    ...state,
    errors: action.payload.error,
    loading: false
  }))
