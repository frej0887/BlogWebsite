import {useCallback, useEffect, useState} from "react";
import './workhourCalculator/WorkhourCalculator.css';
import {TimeFieldColumn} from "./workhourCalculator/TimeFieldColumn.tsx";
import {FieldColumn} from "./workhourCalculator/FieldColumn.tsx";
import {WeekdayContext, WeekdayContextDispatch} from "./workhourCalculator/contexts.tsx";
import {UserSetting, type storageType} from "./workhourCalculator/types.tsx";
import {UserSettingsComponent} from "./workhourCalculator/UserSettingsComponent.tsx";
import {
  createLocalStorage,
  pointRangeToPointList,
  readLocalStorage,
  userSettingToString
} from "./workhourCalculator/tools.ts";
import {type Point, PointList} from "./workhourCalculator/PointList.tsx";
import {useLocalStorage} from "@uidotdev/usehooks";
import {early} from "./workhourCalculator/distributionMethods.ts";

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
  const [selectedSetting, setSelectedSetting] = useState<UserSetting | undefined>();
  const clearSelectedSetting = useCallback(() => setSelectedSetting(undefined), [setSelectedSetting]);
  const [rules, setRules] = useState(new Map<string, PointList>(new Map(Object.values(UserSetting).map((textKey) => [textKey.toString(), new PointList()]))));
  const [localStorage, saveLocalStorage] = useLocalStorage<storageType>('rules', undefined);
  const [workingHours, setWorkingHours] = useState(37);

  useEffect(() => {
    setRules(readLocalStorage(localStorage))
  }, [])

  const addToRules = useCallback((userSetting: UserSetting, pointsToAdd: PointList) => {
    if (!pointsToAdd.length()) return;
    const updatableRules = rules;
    updatableRules.forEach((rule, setting) =>
      setting == userSettingToString(userSetting)
        ? rule.union(pointsToAdd)
        : rule.without(pointsToAdd)
    )
    setRules(updatableRules);
    saveLocalStorage(createLocalStorage(updatableRules))
  }, [rules]);

  const removeFromRules = useCallback((userSetting: UserSetting|undefined, points: PointList) => {
    if (!points.length()) return;

    const updatableRules = rules;
    updatableRules.forEach((rule, setting) => {
      if (setting != userSettingToString(userSetting))
        rule.without(points)
    })
    setRules(updatableRules);
    saveLocalStorage(createLocalStorage(updatableRules))
  }, [rules]);

  const calculate = () => {
    const yesThis = rules.get(UserSetting.YesThis) || new PointList();
    const noWeekly = (rules.get(UserSetting.NoWeekly) || new PointList()).union(rules.get(UserSetting.NoThis) || new PointList());
    const maybeWeekly = rules.get(UserSetting.MaybeWeekly) || new PointList();

    let neededQuarters = workingHours*4 - yesThis.length();
    if (neededQuarters <= 0) {
      console.log("Needs are already fulfilled")
      return;
    }

    const oneDayPointList = (i: number) => pointRangeToPointList({time: 0, day: i}, {time: 24 * 4 - 1, day: i});

    const possiblePointList = (usedWeekdays.map((v, i) => v ? oneDayPointList(i) : new PointList()))
      .map(x => x.copy())
      .reduce((prev, current) => prev.union(current))
      .without(noWeekly)
      .without(yesThis)   // on the list and taken account for in neededQuarters
    if (possiblePointList.length() < neededQuarters) {
      console.log("WARNING: too much no!")
      return
    }

    const preferredPointList = possiblePointList
      .copy()
      .without(maybeWeekly)

    const {out, newNeededQuarters} = early([preferredPointList], neededQuarters);
    addToRules(UserSetting.YesThis, out);
    if (newNeededQuarters >= 0)
      addToRules(UserSetting.YesThis, early([possiblePointList.without(preferredPointList)], newNeededQuarters).out);
  }

  return (
    <div>
      <WeekdayContext value={{
        usedWeekdays,
        selectedStart,
        selectedEnd,
        selectedSetting,
        rules,
      }}>
        <WeekdayContextDispatch value={{
          toggleWeekdayVisibility,
          setSelectedStart,
          setSelectedEnd,
          clearSelectedStart,
          clearSelectedEnd,
          addToRules,
          removeFromRules,
        }}>
          <UserSettingsComponent setSelectedSetting={setSelectedSetting} calculate={calculate} clearSelectedSetting={clearSelectedSetting} setWorkingHours={setWorkingHours} />
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
