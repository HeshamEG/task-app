import { TestScheduler } from "rxjs/testing";

import * as epics from "../gateways.epic";
import {gateways} from "../../../../../configs/utils/data";
import { gatewaysGetAction, gatewaysSetAction } from "../../../../../configs/redux/store/actions";

const testScheduler = new TestScheduler((actual, expected) => {
  return expect(actual).toEqual(expected);
});

describe("Test GatewaysEpic", () => {
  const error = new Error('test error');

  beforeEach(() => {
    testScheduler.frame = 0;
  });

  describe("should handle gatewaysGetEpic", () => {
    test("success case", () => {
      testScheduler.run(({ hot, cold, expectObservable }) => {
        const values = {
          a: gatewaysGetAction(),
          b: {data:gateways},
          c: gatewaysSetAction(gateways),
        };
        const marbles = {
          a: '-a', // input action
          b: '--b', // mock api response
          c: '---c', // output action
        }
        const action$ = hot(marbles.a, values);
        const state$ = {};
        const dependencies = {
          getGateways: () => cold(marbles.b, values),
        };

        const output$ = epics.gatewaysGetEpic(
          // @ts-expect-error HotObservable can't pass into the ActionsObservable
          action$,
          state$,
          dependencies
        );
        expectObservable(output$).toBe(marbles.c ,values);
      });
    });

    });
  });
