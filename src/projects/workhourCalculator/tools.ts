import {CurrentUserSetting, type storageType} from "./types";
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

export const createLocalStorage = (rules:  Map<string, PointList>): storageType => {
  const maybeWeekly = rules.get(CurrentUserSetting.MaybeWeekly)?.object() ?? [];
  const noWeekly = rules.get(CurrentUserSetting.NoWeekly)?.object() ?? [];
  const noThis = rules.get(CurrentUserSetting.NoThis)?.object() ?? [];
  const yesThis = rules.get(CurrentUserSetting.YesThis)?.object() ?? [];
  return {
    maybeWeekly: maybeWeekly,
    noWeekly: noWeekly,
    noThis: noThis,
    yesThis: yesThis,
    timestamp: Date.now(),
  }
}

export const readLocalStorage = (storage: storageType): Map<string, PointList> => {
  if (!storage)
    return new Map([
      [CurrentUserSetting.MaybeWeekly, new PointList()],
      [CurrentUserSetting.NoWeekly, new PointList()],
      [CurrentUserSetting.NoThis, new PointList()],
      [CurrentUserSetting.YesThis, new PointList()],
    ])
  const timestamp = storage['timestamp'];
  const maybeWeekly = storage['maybeWeekly'];
  const noWeekly = storage['noWeekly'];
  const noThis = storage['noThis'];
  const yesThis = storage['yesThis'];

  const date = new Date(timestamp);
  let mondayMidnight = new Date(Date.now());
  mondayMidnight.setDate(mondayMidnight.getDate() - mondayMidnight.getDay()+1);
  mondayMidnight.setHours(0, 0, 0, 0);
  if (date < mondayMidnight) {
    return new Map([
      [CurrentUserSetting.MaybeWeekly, new PointList(...maybeWeekly)],
      [CurrentUserSetting.NoWeekly, new PointList(...noWeekly)],
      [CurrentUserSetting.NoThis, new PointList()],
      [CurrentUserSetting.YesThis, new PointList()],
    ])
  }
  return new Map([
    [CurrentUserSetting.MaybeWeekly, new PointList(...maybeWeekly)],
    [CurrentUserSetting.NoWeekly, new PointList(...noWeekly)],
    [CurrentUserSetting.NoThis, new PointList(...noThis)],
    [CurrentUserSetting.YesThis, new PointList(...yesThis)],
  ])
}
