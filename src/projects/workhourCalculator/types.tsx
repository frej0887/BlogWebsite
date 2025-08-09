import {type Point, PointList} from "./PointList.tsx";

export enum UserSetting {
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
  removeFromRules: (userSetting: UserSetting|undefined, points: PointList) => void,
  addToRules: (userSetting: UserSetting, points: PointList) => void,
}

export type WeekdayType = {
  usedWeekdays: boolean[],
  selectedStart?: Point,
  selectedEnd?: Point,
  selectedSetting?: UserSetting,
  rules: Map<string, PointList>,
}

export type storageType = {
  noWeekly: Point[],
  maybeWeekly: Point[],
  yesThis: Point[],
  noThis: Point[],
  timestamp: number,
}