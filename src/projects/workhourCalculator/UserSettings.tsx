import {useContext} from "react";
import {WeekdayContext, WeekdayContextDispatch} from "./contexts.tsx";
import {CurrentUserSetting} from "./types.tsx";
import {userSettingToString} from "./tools.ts";

export const UserSettings = () => {
  const weekdayContext = useContext(WeekdayContext);
  const weekdayContextDispatch = useContext(WeekdayContextDispatch);

  const baseStyle = {border: 0, margin: "0.1rem", width: "10rem"};
  const colorStyle = (currentSetting?: CurrentUserSetting) => {
    if (!currentSetting) return { backgroundColor: "#666666" }
    return { backgroundColor: userSettingToString(currentSetting) }
  }
  const selectedStyle = (setting?: CurrentUserSetting) =>
    weekdayContext.selectedSetting == setting ? {...colorStyle(setting), ...baseStyle} : baseStyle;

  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>Weekly</div>
        <button
          style={selectedStyle(CurrentUserSetting.NoWeekly)}
          onClick={() => weekdayContext.selectedSetting == CurrentUserSetting.NoWeekly ? weekdayContextDispatch.clearSelectedSetting() : weekdayContextDispatch.setSelectedSetting(CurrentUserSetting.NoWeekly)}>
          Hard no
        </button>
        <button
          style={selectedStyle(CurrentUserSetting.MaybeWeekly)}
          onClick={() => weekdayContext.selectedSetting == CurrentUserSetting.MaybeWeekly ? weekdayContextDispatch.clearSelectedSetting() : weekdayContextDispatch.setSelectedSetting(CurrentUserSetting.MaybeWeekly)}>
          Meh
        </button>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>This week</div>
        <button
          style={selectedStyle(CurrentUserSetting.YesThis)}
          onClick={() => weekdayContext.selectedSetting == CurrentUserSetting.YesThis ? weekdayContextDispatch.clearSelectedSetting() : weekdayContextDispatch.setSelectedSetting(CurrentUserSetting.YesThis)}>
          Yes
        </button>
        <button
          style={selectedStyle(CurrentUserSetting.NoThis)}
          onClick={() => weekdayContext.selectedSetting == CurrentUserSetting.NoThis ? weekdayContextDispatch.clearSelectedSetting() : weekdayContextDispatch.setSelectedSetting(CurrentUserSetting.NoThis)}>
          No
        </button>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>Meta</div>
        <button
          style={selectedStyle(undefined)}
          onClick={weekdayContextDispatch.clearSelectedSetting}>
          Delete
        </button>
      </div>
    </div>
  )
}