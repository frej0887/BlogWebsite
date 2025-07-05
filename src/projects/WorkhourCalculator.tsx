import Spreadsheet, {Selection} from "react-spreadsheet";
import {useCallback, useState} from "react";
import {produce} from "immer";

export const WorkhourCalculator = () => {
  const columnLabels = ["Flavour", "Food"];
  const [data, setData] = useState([
    [{ value: "Vanilla", readOnly: true}, { value: "Chocolate" }],
    [{ value: "Strawberry" }, { value: "Cookies" }],
  ]);

  const changeOneCell = useCallback((rowId: number, colId: number, value: string) => {
    setData(
      produce((draft) => {
        const todo = draft[rowId][colId];
        todo.value = value
      })
    );
  }, []);

  const onSelect = (selected: Selection)=> {
    const startLoc = selected.toRange(data)?.start;
    changeOneCell(startLoc!.row, startLoc!.column, "Hello")
    // const endLoc = selected.toRange(data)?.end;
  }
  return <Spreadsheet
    data={data}
    columnLabels={columnLabels}
    onSelect={onSelect}
  />;
}