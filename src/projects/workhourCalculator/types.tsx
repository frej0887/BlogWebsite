export type Point = {
  time: number;
  day: number;
}

export type WeekdayTypeSet = {
  toggleWeekdayVisibility: (weekday: number) => void,
  setSelectedStart: (start: Point) => void,
  setSelectedEnd: (end: Point) => void,
  clearSelectedStart: () => void,
  clearSelectedEnd: () => void,
}
export type WeekdayType = {
  usedWeekdays: boolean[],
  selectedStart?: Point,
  selectedEnd?: Point
}