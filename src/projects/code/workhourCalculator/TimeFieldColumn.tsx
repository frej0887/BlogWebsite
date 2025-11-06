const TimeField = (i: number) => {
  const startHour = String(Math.floor(i)).padStart(2, '0');
  return (
    <div key={i} className={'timeField'}>
      {startHour}:00
    </div>
  )
}

export const TimeFieldColumn = () => {
  const fields = [...Array(24).keys()].map((_, i) => (TimeField(i)))

  return (
    <div>
      <div className={"tableHeader"}>Times</div>
      {fields}
    </div>
  )
}
