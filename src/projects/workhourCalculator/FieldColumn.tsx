import {useContext} from "react";
import {WeekdayContext, WeekdayContextDispatch} from "./contexts.tsx";

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

export const FieldColumn = (name: string, weekday: number) => {
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