export type Point = {
  time: number;
  day: number;
}

export const pointContains = (arr: Point[], val: Point) => {
  const pointEquality = (element: Point) =>  val.day === element.day && val.time === element.time;
  return arr.some(v => pointEquality(v));
}

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
  removeFromRules: (userSetting: CurrentUserSetting, points: Point[]) => void,
  addToRules: (userSetting: CurrentUserSetting, points: Point[]) => void,
  getRules: (userSetting: CurrentUserSetting) => Point[],
}
export type WeekdayType = {
  usedWeekdays: boolean[],
  selectedStart?: Point,
  selectedEnd?: Point,
  selectedSetting?: CurrentUserSetting,
  rules: Map<string, Point[]>
}
