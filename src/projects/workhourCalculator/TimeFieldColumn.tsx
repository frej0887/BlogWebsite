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

export const TimeFieldColumn = () => {
  const fields = [...Array(24 * 4).keys()].map((_, i) => (TimeField(i)))

  return (
    <div>
      <div className={"tableHeader"}>Times</div>
      {fields}
    </div>
  )
}