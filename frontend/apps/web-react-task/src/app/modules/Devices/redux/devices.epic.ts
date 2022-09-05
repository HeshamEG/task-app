import { Epic } from "redux-observable";
import { from, of} from "rxjs";
import { exhaustMap, filter, map, catchError,tap ,ignoreElements,mergeAll,mergeMap} from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import toaster from "toasted-notes";

import * as API from "../../../../API";
import { ActionsType } from "apps/web-react-task/src/configs/redux/store";
import { RootState } from "apps/web-react-task/src/configs/redux/store/reducers";
import { gatewayInfoGetAction } from "../../Gatways/redux/gateways.action";
import { deviceCreateAction, deviceErrorAction, deviceRemoveAction } from "./devices.action";

export const deviceCreateEpic: Epic<
  ActionsType,
  ActionsType,
  RootState,
  typeof API
> = (action$, store, { createDevice }) =>
  action$.pipe(
    filter(isActionOf(deviceCreateAction)),
    exhaustMap((action) =>
      from(createDevice(action.payload.device)).pipe(
        tap(res => {
        toaster.notify(res.data, {
          duration: 2000,
          type:"success"
        });
        }),
        map(()=>deviceErrorAction()),
        catchError((error) => of(deviceErrorAction(error.response.data))),
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
  filter(isActionOf(deviceRemoveAction)),
  exhaustMap((action) =>
    from(removeDevice(action.payload.id,action.payload.gatewayId)).pipe(
      tap(res => {
      toaster.notify("Removed", {
        duration: 2000,
        type:"default"
      });
      }),
      map(()=>deviceErrorAction()),
      map(()=>gatewayInfoGetAction(action.payload.gatewayId as string )),
      catchError((error) => of(deviceErrorAction(error.response.data))),
    )
  )
);

export default [deviceCreateEpic,deviceRemoveEpic];
