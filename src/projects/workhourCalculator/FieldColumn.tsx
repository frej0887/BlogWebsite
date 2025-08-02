import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {WeekdayContext, WeekdayContextDispatch} from "./contexts.tsx";
import {getListWithRules, pointRangeToPointList} from "./tools.ts";

const Field = (time: number, weekday: number) => {
  const viridisColorscale = ['#fafa6e', '#9cdf7c', '#4abd8c', '#00968e'];
  const weekdayContext = useContext(WeekdayContext);
  const weekdayContextDispatch = useContext(WeekdayContextDispatch);
  const [color, setColor] = useState(viridisColorscale[time%4])
  if (!weekdayContext.usedWeekdays[weekday]) {
    return (
      <div key={time} className={'field'} style={{background: '#333333'}}/>
    )
  }

  const onMouseUp = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!selectedStart || !selectedEnd) return;
    event.preventDefault();
    if (weekdayContext.selectedSetting == undefined)
      weekdayContextDispatch.removeFromRules(undefined, pointRangeToPointList(selectedStart, selectedEnd))
    else
      weekdayContextDispatch.addToRules(weekdayContext.selectedSetting, pointRangeToPointList(selectedStart, selectedEnd))

    weekdayContextDispatch.clearSelectedStart();
    weekdayContextDispatch.clearSelectedEnd();
  }

  const onMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    weekdayContextDispatch.setSelectedStart({time: time, day: weekday});
  }

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    if (!selectedStart)
      return;
    weekdayContextDispatch.setSelectedEnd({time: time, day: weekday});
  }

  const selectedStart = weekdayContext.selectedStart;
  const selectedEnd = weekdayContext.selectedEnd;

  useEffect(() => {
    setColor(fieldColor())
  }, [weekdayContext])

  const fieldColor = () => {
    // Current selection
    if (selectedStart && selectedEnd) {
      if ((selectedStart.time <= time && time <= selectedEnd.time || selectedEnd.time <= time && time <= selectedStart.time) &&
        (selectedStart.day <= weekday && weekday <= selectedEnd.day || selectedEnd.day <= weekday && weekday <= selectedStart.day)) {
        return '#bbbbbb'
      }
    }
    // Color based on rules
    const userSetting = getListWithRules(weekdayContext.rules, {time: time, day: weekday});
    if (userSetting) {
      return userSetting
    }
    return viridisColorscale[time%4]
  }

  return (
    <div
      key={time}
      className={'field'}
      style={{background: color}}
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