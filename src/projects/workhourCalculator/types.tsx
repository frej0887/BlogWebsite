import {type Point, PointList} from "./PointList.tsx";

export enum CurrentUserSetting {
  NoWeekly = '#932F67',
  MaybeWeekly = '#D92C54',
  YesThis = '#DDDEAB',
  NoThis = '#8ABB6C',
}
export type WeekdayTypeDispatch = {
  toggleWeekdayVisibility: (weekday: number) => void,
  setSelectedStart: (start: Point) => void,
  setSelectedEnd: (end: Point) => void,
  clearSelectedStart: () => void,
  clearSelectedEnd: () => void,
  setSelectedSetting: (userSetting: CurrentUserSetting) => void,
  clearSelectedSetting: () => void,
  removeFromRules: (userSetting: CurrentUserSetting|undefined, points: PointList) => void,
  addToRules: (userSetting: CurrentUserSetting, points: PointList) => void,
}
export type WeekdayType = {
  usedWeekdays: boolean[],
  selectedStart?: Point,
  selectedEnd?: Point,
  selectedSetting?: CurrentUserSetting,
  rules: Map<string, PointList>
}
