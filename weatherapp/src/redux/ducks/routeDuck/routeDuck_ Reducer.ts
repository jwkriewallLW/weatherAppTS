import { History } from "history";
import { Middleware } from "redux";
import { RouteActionType, routeHistory } from "../../../models/RouteModel";
import { actionTypes } from "./routeDuck_ActionTypes";
import { getRouteDuckInitialState } from "./routeDuck_InitialState";

export function routeDuckMiddleware(history?: History): Middleware {
  return () => (next) => (action: RouteActionType) => {
    next(action);
    // Helpful for future. Can be used to perform taks before state update.
  };
}

export function routeDuckReducer(
  state = getRouteDuckInitialState(routeHistory),
  action: RouteActionType
) {
  switch (action.type) {
    case actionTypes.ROUTE_PUSH:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.ROUTE_GO_BACK:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.ROUTE_REPLACE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
