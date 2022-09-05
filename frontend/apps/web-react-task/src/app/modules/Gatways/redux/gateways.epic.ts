import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { exhaustMap, filter, map, catchError, tap, ignoreElements } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import toaster from "toasted-notes";

import { RootState } from "../../../../configs/redux/store/reducers";
import { ActionsType } from "../../../../configs/redux/store";
import * as API from "../../../../API";
import { DEVICE } from "../../../../shared/types/models";
import { gatewaysGetAction, gatewaysSetAction, gatewayErrorAction, gatewayInfoGetAction, gatewayInfoSetAction, gatewayCreateAction } from "../../../../configs/redux/store/actions";

const dateFormate = (timestamp: number) => new Date(timestamp).getFullYear() + '/' + new Date(timestamp).getMonth() + "/" + new Date(timestamp).getDate();

export const gatewaysGetEpic: Epic<
  ActionsType,
  ActionsType,
  RootState,
  typeof API
> = (action$, _store, { getGateways }) =>
    action$.pipe(
      filter(isActionOf(gatewaysGetAction)),
      exhaustMap((_action) =>
        from(getGateways()).pipe(
          map((gateways) => gatewaysSetAction(gateways?.data)),
          catchError((error) => of(gatewayErrorAction(error.response.data)))
        )
      )
    );
export const gatewayGetEpic: Epic<
  ActionsType,
  ActionsType,
  RootState,
  typeof API
> = (action$, _store, { getGateway }) =>
    action$.pipe(
      filter(isActionOf(gatewayInfoGetAction)),
      exhaustMap((action) =>
        from(getGateway(action.payload.id)).pipe(
          map((gateway) => {
            const tempPeripheralDevices = gateway?.data[0]?.peripheralDevices.map((device: DEVICE) => ({ ...device, createdAt: dateFormate(device.createdAt), status: device.status == '0' ? "offline" : "online" }))
            gateway = { ...gateway, data: [{ ...gateway?.data[0], peripheralDevices: tempPeripheralDevices }] }
            return gatewayInfoSetAction(gateway?.data)
          }),
          catchError((error) => of(gatewayErrorAction(error.response.data)))
        )
      )
    );

export const gatewayCreateEpic: Epic<
  ActionsType,
  ActionsType,
  RootState,
  typeof API
> = (action$, store, { createGateway }) =>
    action$.pipe(
      filter(isActionOf(gatewayCreateAction)),
      exhaustMap((action) =>
        from(createGateway(action.payload.gateway)).pipe(
          tap(res => {
            toaster.notify('gateway created', {
              duration: 2000,
              type: "success"
            });
            action.payload.navigate("/")
          }),
          ignoreElements(),
          catchError((error) => of(gatewayErrorAction(error?.response?.data))),
        )
      )
    );

export default [gatewaysGetEpic, gatewayCreateEpic, gatewayGetEpic];
