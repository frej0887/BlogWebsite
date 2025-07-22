import {useContext} from "react";
import {WeekdayContext, WeekdayContextDispatch} from "./contexts.tsx";

const Field = (time: number, weekday: number) => {
  const weekdayContext = useContext(WeekdayContext);
  const weekdayContextDispatch = useContext(WeekdayContextDispatch);
  if (!weekdayContext.usedWeekdays[weekday]) {
    return (
      <div key={time} className={'field'} style={{background: '#333333'}}/>
    )
  }

  const onMouseUp = () => {
    weekdayContextDispatch.setSelectedEnd(undefined);
    weekdayContextDispatch.setSelectedStart(undefined);
  }

  const onMouseDown = () => {
    weekdayContextDispatch.setSelectedStart({time: time, day: weekday});
  }

  const onMouseMove = () => {
    if (!selectedStart)
      return;
    weekdayContextDispatch.setSelectedEnd({time: time, day: weekday});
    console.log(weekdayContextDispatch);
  }

  const selectedStart = weekdayContext.selectedStart;
  const selectedEnd = weekdayContext.selectedEnd;

  if (selectedStart && selectedEnd) {
    if ((selectedStart.time <= time && time <= selectedEnd.time || selectedEnd.time <= time && time <= selectedStart.time) &&
      (selectedStart.day <= weekday && weekday <= selectedEnd.day || selectedEnd.day <= weekday && weekday <= selectedStart.day)) {
      return (
        <div
          draggable={false}
          key={time}
          className={'field'}
          style={{background: '#bbbbbb'}}
          onMouseUp={onMouseUp}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
        />
      )
    }
  }

  const viridisColorscale = ['#fafa6e', '#9cdf7c', '#4abd8c', '#00968e'];
  return (
    <div
      key={time}
      className={'field'}
      style={{background: viridisColorscale[time % 4]}}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      draggable={false}
    />
  )
}

export const FieldColumn = (name: string, weekday: number) => {
  const weekdayContextDispatch = useContext(WeekdayContextDispatch);
  const fields = [...Array(24 * 4).keys()].map((_, i) => (Field(i, weekday)))

  return (
    <div key={weekday}>
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