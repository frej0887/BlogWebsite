import {createContext} from "react";
import type {WeekdayType, WeekdayTypeSet} from "./types.tsx";

const weekdayTypeSet: WeekdayTypeSet = {
  toggleWeekdayVisibility: () => null,
  setSelectedStart: () => null,
  clearSelectedStart: () => null,
  clearSelectedEnd: () => null,
  setSelectedEnd: () => null,
}
const weekdayType: WeekdayType = {
  usedWeekdays: [true, true, true, true, true, false, false],
  selectedStart: undefined,
  selectedEnd: undefined,
}
export const WeekdayContextDispatch = createContext<WeekdayTypeSet>(weekdayTypeSet);
export const WeekdayContext = createContext<WeekdayType>(weekdayType);
