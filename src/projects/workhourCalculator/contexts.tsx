import {createContext} from "react";
import type {WeekdayType, WeekdayTypeDispatch} from "./types.tsx";
import {PointList} from "./PointList.tsx";

const weekdayTypeSet: WeekdayTypeDispatch = {
  toggleWeekdayVisibility: () => null,
  setSelectedStart: () => null,
  clearSelectedStart: () => null,
  clearSelectedEnd: () => null,
  setSelectedEnd: () => null,
  setSelectedSetting: () => null,
  clearSelectedSetting: () => null,
  addToRules: () => null,
  removeFromRules: () => null,
}
const weekdayType: WeekdayType = {
  usedWeekdays: [true, true, true, true, true, false, false],
  selectedStart: undefined,
  selectedEnd: undefined,
  selectedSetting: undefined,
  rules: new Map<string, PointList>,
}
export const WeekdayContextDispatch = createContext<WeekdayTypeDispatch>(weekdayTypeSet);
export const WeekdayContext = createContext<WeekdayType>(weekdayType);
