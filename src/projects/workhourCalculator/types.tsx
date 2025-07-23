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
export type WeekdayTypeSet = {
  toggleWeekdayVisibility: (weekday: number) => void,
  setSelectedStart: (start: Point) => void,
  setSelectedEnd: (end: Point) => void,
  clearSelectedStart: () => void,
  clearSelectedEnd: () => void,
  setSelectedSetting: (userSetting: CurrentUserSetting) => void,
}
export type WeekdayType = {
  usedWeekdays: boolean[],
  selectedStart?: Point,
  selectedEnd?: Point,
  selectedSetting?: CurrentUserSetting
}
