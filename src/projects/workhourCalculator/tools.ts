import {CurrentUserSetting, type Point, pointContains} from "./types.tsx";

export const pointRangeToPointList = (startPoint: Point, endPoint: Point) => {
  const out: Point[] = [];
  for (let time = startPoint.time; time <= endPoint.time; time++) {
    for (let day = startPoint.day; day <= endPoint.day; day++) {
      out.push({time: time, day: day});
    }
  }
  return out;
}


export const pointInList = (rules: Map<string, Point[]>, userSetting: CurrentUserSetting, point: Point) => {
  const points = rules.get(userSettingToString(userSetting));
  if (!points || !points.length) return false;
  return pointContains(points, point)
}


export const getRules = (rules: Map<string, Point[]>, userSetting: CurrentUserSetting) => {
  const points = rules.get(userSettingToString(userSetting));
  if (!points || !points.length) return [];
  return points;
}

export const getListWithRules = (rules: Map<string, Point[]>, point: Point) => {
  const userSettings = Object.values(CurrentUserSetting)//.filter((key) => typeof key != "string")
  console.log(userSettings)
  for (const userSettingsKey of userSettings) {
    if (pointInList(rules, userSettingsKey, point))
      return userSettingsKey;
  }
  return undefined;
}

export const userSettingToString = (userSetting: CurrentUserSetting): string => {
  if (userSetting)
    return userSetting
  return ''
}
