import {useCallback, useState} from "react";
import './workhourCalculator/WorkhourCalculator.css';
import {TimeFieldColumn} from "./workhourCalculator/TimeFieldColumn.tsx";
import {FieldColumn} from "./workhourCalculator/FieldColumn.tsx";
import {WeekdayContext, WeekdayContextDispatch} from "./workhourCalculator/contexts.tsx";
import {CurrentUserSetting} from "./workhourCalculator/types.tsx";
import {UserSettings} from "./workhourCalculator/UserSettings.tsx";
import {userSettingToString} from "./workhourCalculator/tools.ts";
import {type Point, PointList} from "./workhourCalculator/PointList.tsx";

const ALL_WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


export const WorkhourCalculator = () => {
  const [usedWeekdays, setUsedWeekdays] = useState([true, true, true, true, true, false, false]);
  const [selectedStart, setSelectedStart] = useState<Point | undefined>();
  const [selectedEnd, setSelectedEnd] = useState<Point | undefined>();
  const toggleWeekdayVisibility = useCallback((weekday: number) =>
      setUsedWeekdays(m => m.map((value, i) => i !== weekday ? value : !value)),
    [])
  const clearSelectedStart = useCallback(() => setSelectedStart(undefined), [setSelectedStart]);
  const clearSelectedEnd = useCallback(() => setSelectedEnd(undefined), [setSelectedEnd]);
  const [selectedSetting, setSelectedSetting] = useState<CurrentUserSetting | undefined>();
  const clearSelectedSetting = useCallback(() => setSelectedSetting(undefined), [setSelectedSetting]);
  const [rules, setRules] = useState(new Map<string, PointList>(new Map(Object.values(CurrentUserSetting).map((textKey) => [textKey.toString(), new PointList()]))));

  const addToRules = useCallback((userSetting: CurrentUserSetting, pointsToAdd: PointList) => {
    if (!pointsToAdd.length()) return;
    const updatableRules = rules;
    updatableRules.forEach((rule, setting) =>
      setting == userSettingToString(userSetting)
        ? rule.union(pointsToAdd)
        : rule.without(pointsToAdd)
    )
    setRules(updatableRules);
  }, [rules]);

  const removeFromRules = useCallback((userSetting: CurrentUserSetting, points: PointList) => {
    if (!points.length()) return;

    const updatableRules = rules;
    updatableRules.forEach((rule, setting) => {
      if (setting != userSettingToString(userSetting))
        rule.without(points)
    })
    setRules(updatableRules);
  }, [rules]);

  const getRules = useCallback((userSetting: CurrentUserSetting) => {
    const points = rules.get(userSettingToString(userSetting));
    if (!points || !points.length()) return new PointList();
    return points;
  }, [rules]);


  return (
    <div>
      <WeekdayContext value={{
        usedWeekdays,
        selectedStart,
        selectedEnd,
        selectedSetting,
        rules
      }}>
        <WeekdayContextDispatch value={{
          toggleWeekdayVisibility,
          setSelectedStart,
          setSelectedEnd,
          clearSelectedStart,
          clearSelectedEnd,
          setSelectedSetting,
          clearSelectedSetting,
          getRules,
          addToRules,
          removeFromRules,
        }}>
          <UserSettings/>
          <Table/>
        </WeekdayContextDispatch>
      </WeekdayContext>
    </div>
  )
}


const Table = () => {
  return (
    <div style={{...{display: "flex", flexDirection: "row"}}}>
      <TimeFieldColumn/>
      {ALL_WEEKDAYS.map((name, weekday) => FieldColumn(name, weekday))}
    </div>
  )
}

/*
- Hard deadlines Sleep etc. - same col as sat+sun - weekly
- weekly plz no
- this week
 */
