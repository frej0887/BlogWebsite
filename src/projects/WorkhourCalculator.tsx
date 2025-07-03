import {useState} from "react";
import './WorkhourCalculator.css';

// type WeekdayType = {
//   allWeekdays: string[],
//   usedWeekdays: boolean[],
//   toggleWeekdayVisibility: (weekday: number) => void,
// }
// const weekdayType: WeekdayType = {
//   allWeekdays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
//   usedWeekdays: [true, true, true, true, true, false, false],
//   toggleWeekdayVisibility: () => console.log("testing")
// }
// const WeekdayContext = createContext<WeekdayType>(weekdayType);
//

export const WorkhourCalculator = () => {
  const [usedWeekdays, setUsedWeekdays] = useState<boolean[]>([true, true, true, true, true, false, false]);
  const toggleWeekdayVisibility = (weekday: number) => {
    setUsedWeekdays(usedWeekdays.map((value, i) => i !== weekday ? value : !value));
  }
  const allWeekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  // const weekdayStruct: WeekdayType = {
  //   allWeekdays: allWeekdays,
  //   usedWeekdays: usedWeekdays,
  //   toggleWeekdayVisibility: toggleWeekdayVisibility
  // }

  const TimeField = (i: number) => {
    const startHour = String(Math.floor(i*15/60)).padStart(2, '0');
    const startMinute = String(i*15%60).padStart(2, '0');
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
      <div key={i} className={'field'} style={{background: viridisColorscale[i%4]}}>
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

  const FieldColumn = (name:string, weekday: number) => {
    const fields = [...Array(24*4).keys()].map((_, i) => (Field(i, usedWeekdays[weekday])))

    return (
      <div>
        <div
          style={{textAlign: 'center'}}
          className={"tableHeader"}>
          <div onClick={() => toggleWeekdayVisibility(weekday)}>
            {name}
          </div>
        </div>
        {fields}
      </div>
    )
  }

  const Table = () => {
    return (
      <div style={{...{display: "flex", flexDirection: "row"}}}>
        <TimeFieldColumn/>
        {allWeekdays.map((name, weekday) => FieldColumn(name, weekday))}
      </div>
    )
  }


  return (
    <div>
    {/*<WeekdayContext value={weekdayStruct}>*/}
      {Table()}
    {/*</WeekdayContext>*/}
    </div>
  )
}

