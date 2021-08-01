import { Epic } from "redux-observable";
import { from, of} from "rxjs";
import { exhaustMap, filter, map, catchError,tap ,ignoreElements,mergeAll,mergeMap} from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import toaster from "toasted-notes";


import { RootState } from "../reducers";

import { actions, ActionsType,history } from "..";
import {DEVICE} from "core/models"
import * as API from "API";
const dateFormate=(timestamp:number)=>new Date(timestamp).getFullYear()+'/'+new Date(timestamp).getMonth()+"/"+new Date(timestamp).getDate()

export const gatewaysGetEpic: Epic<
  ActionsType,
  ActionsType,
  RootState,
  typeof API
> = (action$, store, { getGateways }) =>
  action$.pipe(
    filter(isActionOf(actions.gatewaysGetAction)),
    exhaustMap((action) =>
      from(getGateways()).pipe(
        map((gateways)=>actions.gatewaysSetAction(gateways?.data)),
        catchError((error) => of(actions.gatewayErrorAction(error.response.data)))
      )
    )
  );
  export const gatewayGetEpic: Epic<
  ActionsType,
  ActionsType,
  RootState,
  typeof API
> = (action$, store, { getGateways }) =>
  action$.pipe(
    filter(isActionOf(actions.gatewayInfoGetAction)),
    exhaustMap((action) =>
      from(getGateways({id:action.payload.id})).pipe(
        map((gateway)=>{
          let temp_peripheralDevices =gateway?.data[0]?.peripheralDevices.map((device:DEVICE)=>({...device,createdAt:dateFormate(device.createdAt),status:device.status=='0'?"offline":"online"}))
          gateway={...gateway,data:[{...gateway?.data[0],peripheralDevices:temp_peripheralDevices}]}
          return actions.gatewayInfoSetAction(gateway?.data)
        }),
        catchError((error) => of(actions.gatewayErrorAction(error.response.data)))
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
    filter(isActionOf(actions.gatewayCreateAction)),
    exhaustMap((action) =>
      from(createGateway(action.payload.gateway)).pipe(
        tap(res => {
        action.payload.history.push("/")
        toaster.notify(res.data, {
          duration: 2000,
          type:"success"
        });
        }),
        ignoreElements(),
        catchError((error) => of(actions.gatewayErrorAction(error.response.data))),
      )
    )
  );

export default [gatewaysGetEpic,gatewayCreateEpic,gatewayGetEpic];
