import {createContext} from "react";
import type {WeekdayType, WeekdayTypeSet} from "./types.tsx";

const weekdayTypeSet: WeekdayTypeSet = {
  toggleWeekdayVisibility: () => null
}
const weekdayType: WeekdayType = {
  usedWeekdays: [true, true, true, true, true, false, false],
}
export const WeekdayContextDispatch = createContext<WeekdayTypeSet>(weekdayTypeSet);
export const WeekdayContext = createContext<WeekdayType>(weekdayType);