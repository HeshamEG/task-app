import { Epic } from "redux-observable";
import { from, of} from "rxjs";
import { exhaustMap, filter, map, catchError,tap ,ignoreElements,mergeAll,mergeMap} from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import toaster from "toasted-notes";


import { RootState } from "../reducers";

import { actions, ActionsType,history } from "..";
import {DEVICE} from "core/models"
import * as API from "API";

export const deviceCreateEpic: Epic<
  ActionsType,
  ActionsType,
  RootState,
  typeof API
> = (action$, store, { createDevice }) =>
  action$.pipe(
    filter(isActionOf(actions.deviceCreateAction)),
    exhaustMap((action) =>
      from(createDevice(action.payload.device)).pipe(
        tap(res => {
        toaster.notify(res.data, {
          duration: 2000,
          type:"success"
        });  
        }),
        map(()=>actions.deviceErrorAction()),
        catchError((error) => of(actions.deviceErrorAction(error.response.data))),
      )
    )
  );

export const deviceRemoveEpic: Epic<
ActionsType,
ActionsType,
RootState,
typeof API
> = (action$, store, { removeDevice }) =>
action$.pipe(
  filter(isActionOf(actions.deviceRemoveAction)),
  exhaustMap((action) =>
    from(removeDevice(action.payload.id,action.payload.gatewayId)).pipe(
      tap(res => {
      toaster.notify("Removed", {
        duration: 2000,
        type:"default"
      });  
      }),
      map(()=>actions.deviceErrorAction()),
      map(()=>actions.gatewayInfoGetAction(action.payload.gatewayId as string )),
      catchError((error) => of(actions.deviceErrorAction(error.response.data))),
    )
  )
);

export default [deviceCreateEpic,deviceRemoveEpic];
