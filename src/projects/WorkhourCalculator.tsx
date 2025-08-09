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
    let neededQuarters = workingHours*4;
    console.log(neededQuarters);
    const no = (rules.get(UserSetting.NoWeekly) || new PointList()).union(rules.get(UserSetting.NoThis) || new PointList());
    const preferablyNot = rules.get(UserSetting.MaybeWeekly) || new PointList();

    const possible = usedWeekdays.map((v, i) => v ? pointRangeToPointList({time: 0, day: i}, {time: 24*4-1, day: i}).without(no) : new PointList())
    const allOneList = possible
      .map(x => x.copy())
      .reduce((prev, current) => prev.union(current));
    if (allOneList.length() < neededQuarters) {
      console.log("WARNING: too much no!")
      return
    }
    const preferred = allOneList
      .copy()
      .without(no)
      .without(preferablyNot);

    addToRules(UserSetting.YesThis, preferred);
    if (neededQuarters >= preferred.length()) {
      // Use all preferred + what is needed from allAvailable
      neededQuarters -= preferred.length();
      for (let oneDay of possible) {
        oneDay.without(preferred);
      }
    }

    // Put it all early on
    for (const pointList of possible) {
      if (pointList.length() >= neededQuarters) {
        addToRules(UserSetting.YesThis, pointList.firstN(neededQuarters));
        neededQuarters = 0;
        break;
      }
      neededQuarters -= pointList.length();
      addToRules(UserSetting.YesThis, pointList);
    }
    console.log(rules)
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
