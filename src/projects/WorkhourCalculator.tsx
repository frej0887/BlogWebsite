import {createContext, useCallback, useContext, useState} from "react";
import './WorkhourCalculator.css';

const ALL_WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


type WeekdayTypeSet = {
  toggleWeekdayVisibility: (weekday: number) => void,
}
const weekdayTypeSet: WeekdayTypeSet = {
  toggleWeekdayVisibility: () => null
}
const WeekdayContextDispatch = createContext<WeekdayTypeSet>(weekdayTypeSet);


type WeekdayType = {
  usedWeekdays: boolean[],
}
const weekdayType: WeekdayType = {
  usedWeekdays: [true, true, true, true, true, false, false],
}
const WeekdayContext = createContext<WeekdayType>(weekdayType);


export const WorkhourCalculator = () => {
  const [usedWeekdays, setUsedWeekdays] = useState([true, true, true, true, true, false, false]);
  const toggleWeekdayVisibility = useCallback((weekday: number) =>
      setUsedWeekdays(m => m.map((value, i) => i !== weekday ? value : !value)),
    [])


  return (
    <div>
      <WeekdayContext value={{usedWeekdays}}>
        <WeekdayContextDispatch value={{toggleWeekdayVisibility}}>
          <Table/>
        </WeekdayContextDispatch>
      </WeekdayContext>
    </div>
  )
}


const TimeField = (i: number) => {
  const startHour = String(Math.floor(i * 15 / 60)).padStart(2, '0');
  const startMinute = String(i * 15 % 60).padStart(2, '0');
  // const endHour = String(Math.floor((i+1)*15/60)).padStart(2, '0');
  // const endMinute = String((i+1)*15%60).padStart(2, '0');
  return (
    <div key={i} className={'field timeField'}>
      {startHour}:{startMinute}
    </div>
  )
}

const Field = (i: number, visible: boolean) => {
  if (!visible) {
    return (
      <div key={i} className={'field'} style={{background: '#333333'}}>
      </div>
    )
  }
  const viridisColorscale = ['#fafa6e', '#9cdf7c', '#4abd8c', '#00968e'];
  return (
    <div key={i} className={'field'} style={{background: viridisColorscale[i % 4]}}>
    </div>
  )
}

const TimeFieldColumn = () => {
  const fields = [...Array(24 * 4).keys()].map((_, i) => (TimeField(i)))

  return (
    <div>
      <div className={"tableHeader"}>Times</div>
      {fields}
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

const FieldColumn = (name: string, weekday: number) => {
  const weekdayContext = useContext(WeekdayContext);
  const weekdayContextDispatch = useContext(WeekdayContextDispatch);
  const fields = [...Array(24 * 4).keys()].map((_, i) => (Field(i, weekdayContext.usedWeekdays[weekday])))

  return (
    <div>
      <div
        style={{textAlign: 'center'}}
        className={"tableHeader"}>
        <div onClick={() => weekdayContextDispatch.toggleWeekdayVisibility(weekday)}>
          {name}
        </div>
      </div>
      {fields}
    </div>
  )
}