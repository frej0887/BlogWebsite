import {CurrentUserSetting} from "./types.tsx";
import {type Point, PointList} from "./PointList.tsx";

export const pointRangeToPointList = (startPoint: Point, endPoint: Point): PointList => {
  const out: PointList = new PointList();
  for (let time = startPoint.time; time <= endPoint.time; time++) {
    for (let day = startPoint.day; day <= endPoint.day; day++) {
      out.add({time: time, day: day});
    }
  }
  return out;
}

export const getListWithRules = (rules: Map<string, PointList>, point: Point) => {
  for (const [rule, pointList] of rules)
    if (pointList.has(point)) return rule
  return undefined;
}

export const userSettingToString = (userSetting: CurrentUserSetting): string => {
  if (userSetting)
    return userSetting
  return ''
}
