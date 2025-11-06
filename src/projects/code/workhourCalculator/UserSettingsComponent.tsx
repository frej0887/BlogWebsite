import {useContext} from "react";
import {WeekdayContext} from "./contexts.tsx";
import {UserSetting} from "./types.tsx";
import {userSettingToString} from "./tools.ts";

type UserSettingsProps = {
  setSelectedSetting: (userSetting?: UserSetting) => void,
  clearSelectedSetting: () => void,
  calculate: () => void,
  setWorkingHours: (hours: number) => void,
}

export const UserSettingsComponent = ({setSelectedSetting, clearSelectedSetting, calculate, setWorkingHours}: UserSettingsProps) => {
  const weekdayContext = useContext(WeekdayContext);

  const baseStyle = {border: 0, margin: "0.1rem", width: "10rem"};
  const colorStyle = (currentSetting?: UserSetting) => {
    if (!currentSetting) return { backgroundColor: "#666666" }
    return { backgroundColor: userSettingToString(currentSetting) }
  }
  const selectedStyle = (setting?: UserSetting) =>
    weekdayContext.selectedSetting == setting ? {...colorStyle(setting), ...baseStyle} : baseStyle;

  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>Weekly</div>
        <button
          style={selectedStyle(UserSetting.NoWeekly)}
          onClick={() => weekdayContext.selectedSetting == UserSetting.NoWeekly ? clearSelectedSetting() : setSelectedSetting(UserSetting.NoWeekly)}>
          Hard no
        </button>
        <button
          style={selectedStyle(UserSetting.MaybeWeekly)}
          onClick={() => weekdayContext.selectedSetting == UserSetting.MaybeWeekly ? clearSelectedSetting() : setSelectedSetting(UserSetting.MaybeWeekly)}>
          Meh
        </button>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>This week</div>
        <button
          style={selectedStyle(UserSetting.YesThis)}
          onClick={() => weekdayContext.selectedSetting == UserSetting.YesThis ? clearSelectedSetting() : setSelectedSetting(UserSetting.YesThis)}>
          Yes
        </button>
        <button
          style={selectedStyle(UserSetting.NoThis)}
          onClick={() => weekdayContext.selectedSetting == UserSetting.NoThis ? clearSelectedSetting() : setSelectedSetting(UserSetting.NoThis)}>
          No
        </button>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>Meta</div>
        <button
          style={selectedStyle(undefined)}
          onClick={clearSelectedSetting}>
          Delete
        </button>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>Meta</div>
        <input style={baseStyle} type={'number'} defaultValue={37} onChange={(event) => setWorkingHours(parseFloat(event.target.value))}/>
        <button style={baseStyle} onClick={calculate}>Calculate</button>
      </div>
    </div>
  )
}