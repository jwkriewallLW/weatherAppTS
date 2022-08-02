import { History } from "history";
import { RouteDataType } from "../../../models/RouteModel";

export function getRouteDuckInitialState(history: History): RouteDataType {
  return {
    location: history.location,
    history: [],
  };
}
