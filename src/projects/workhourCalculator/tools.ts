import {CurrentUserSetting} from "./types";
import {type Point, PointList} from "./PointList";

export const pointRangeToPointList = (startPoint: Point, endPoint: Point): PointList => {
  const out: PointList = new PointList();

  const minTime = Math.min(startPoint.time, endPoint.time);
  const maxTime = Math.max(startPoint.time, endPoint.time);
  const minDay = Math.min(startPoint.day, endPoint.day);
  const maxDay = Math.max(startPoint.day, endPoint.day);

  for (let time = minTime; time <= maxTime; time++) {
    for (let day = minDay; day <= maxDay; day++) {
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

export const userSettingToString = (userSetting?: CurrentUserSetting): string => {
  if (userSetting)
    return userSetting
  return ''
}
