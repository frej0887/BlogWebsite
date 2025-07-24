import {useCallback, useState} from "react";
import './workhourCalculator/WorkhourCalculator.css';
import {TimeFieldColumn} from "./workhourCalculator/TimeFieldColumn.tsx";
import {FieldColumn} from "./workhourCalculator/FieldColumn.tsx";
import {WeekdayContext, WeekdayContextDispatch} from "./workhourCalculator/contexts.tsx";
import {CurrentUserSetting, type Point} from "./workhourCalculator/types.tsx";
import {UserSettings} from "./workhourCalculator/UserSettings.tsx";

const ALL_WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


export const WorkhourCalculator = () => {
  const [usedWeekdays, setUsedWeekdays] = useState([true, true, true, true, true, false, false]);
  const [selectedStart, setSelectedStart] = useState<Point|undefined>();
  const [selectedEnd, setSelectedEnd] = useState<Point|undefined>();
  const toggleWeekdayVisibility = useCallback((weekday: number) =>
      setUsedWeekdays(m => m.map((value, i) => i !== weekday ? value : !value)),
    [])
  const clearSelectedStart = useCallback(() => setSelectedStart(undefined), [setSelectedStart]);
  const clearSelectedEnd = useCallback(() => setSelectedEnd(undefined), [setSelectedEnd]);
  const [selectedSetting, setSelectedSetting] = useState<CurrentUserSetting|undefined>();
  const clearSelectedSetting = useCallback(() => setSelectedSetting(undefined), [setSelectedSetting]);

  return (
    <div>
      <WeekdayContext value={{usedWeekdays, selectedStart, selectedEnd, selectedSetting}}>
        <WeekdayContextDispatch value={{toggleWeekdayVisibility, setSelectedStart, setSelectedEnd, clearSelectedStart, clearSelectedEnd, setSelectedSetting, clearSelectedSetting}}>
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
