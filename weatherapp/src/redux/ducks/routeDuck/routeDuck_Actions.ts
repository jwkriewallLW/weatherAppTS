import { RouteActionModel, RouteDataType } from "../../../models/RouteModel";
import { actionTypes } from "./routeDuck_ActionTypes";

export function ROUTE_ON_GO_BACK(payload: RouteDataType) {
  return RouteActionModel(actionTypes.ROUTE_GO_BACK, payload);
}
export function ROUTE_ON_PUSH(payload: RouteDataType) {
  return RouteActionModel(actionTypes.ROUTE_PUSH, payload);
}

export function ROUTE_ON_REPLACE(payload: RouteDataType) {
  return RouteActionModel(actionTypes.ROUTE_REPLACE, payload);
}
