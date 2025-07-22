export type Point = {
  time: number;
  day: number;
}

export type WeekdayTypeSet = {
  toggleWeekdayVisibility: (weekday: number) => void,
  setSelectedStart: (start: Point|undefined) => void,
  setSelectedEnd: (end: Point|undefined) => void,
}
export type WeekdayType = {
  usedWeekdays: boolean[],
  selectedStart?: Point,
  selectedEnd?: Point
}