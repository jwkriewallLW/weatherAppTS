import { Action, createBrowserHistory, Location } from "history";

export type RouteDataType = {
  location: Location;
  history: Location[];
  routeAction?: Action;
};

export type RouteActionType = {
  type: string;
  payload?: RouteDataType;
};

export function RouteActionModel(
  type: Readonly<string>,
  payload?: RouteDataType
): Readonly<RouteActionType> {
  return Object.freeze({
    type,
    payload,
  } as RouteActionType);
}

export const routeHistory = createBrowserHistory();
