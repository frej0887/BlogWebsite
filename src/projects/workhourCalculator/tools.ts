import type {Point} from "./types.tsx";

export const pointRangeToPointList = (startPoint: Point, endPoint: Point) => {
  const out: Point[] = [];
  for (let time = startPoint.time; time <= endPoint.time; time++) {
    for (let day = startPoint.day; day <= endPoint.day; day++) {
      out.push({time: time, day: day});
    }
  }
  return out;
}

