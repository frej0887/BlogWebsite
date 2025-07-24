export type Point = {
  time: number;
  day: number;
}

export enum CurrentUserSetting {
  NoWeekly,
  MaybeWeekly,
  YesThis,
  NoThis,
}
export type WeekdayTypeDispatch = {
  toggleWeekdayVisibility: (weekday: number) => void,
  setSelectedStart: (start: Point) => void,
  setSelectedEnd: (end: Point) => void,
  clearSelectedStart: () => void,
  clearSelectedEnd: () => void,
  setSelectedSetting: (userSetting: CurrentUserSetting) => void,
  clearSelectedSetting: () => void,
  removeFromRules: (userSetting: CurrentUserSetting, points: Point[]) => void,
  addToRules: (userSetting: CurrentUserSetting, points: Point[]) => void,
  getRules: (userSetting: CurrentUserSetting) => Point[],
}
export type WeekdayType = {
  usedWeekdays: boolean[],
  selectedStart?: Point,
  selectedEnd?: Point,
  selectedSetting?: CurrentUserSetting,
}
