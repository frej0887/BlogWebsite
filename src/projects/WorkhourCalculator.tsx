import Spreadsheet, {type CellBase, type Matrix, Selection} from "react-spreadsheet";
import {useCallback, useState} from "react";
import {produce} from "immer";

const baseCell = {value: "", readOnly: true}
const integerToString = (i: number) => {
  if (i%4 == 0) {
    const startHour = String(Math.floor(i * 15 / 60)).padStart(2, '0');
    const startMinute = String(i * 15 % 60).padStart(2, '0');
    return startHour + ":" + startMinute;
  }
  return ''
}

export const WorkhourCalculator = () => {
  const columnLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const rowLabels = [...Array(24*4).keys()].map((_, i) => integerToString(i) )
  const [data, setData] = useState<Matrix<CellBase>>(
    [...Array(24*4).keys()].map(() => {
      return [...Array(7).keys()].map(() => {return baseCell})
    })
  );
  const [selection, setSelection] = useState<Selection|null>(null);

  const changeOneCell = useCallback((rowId: number, colId: number, value: string) => {
    setData(
      produce((draft) => {
        const todo = draft[rowId][colId];
        if (!todo) return;
        todo.value = value
      })
    );
  }, []);

  const onSelect = (selected: Selection)=> {
    setSelection(selected);
    console.log(selected);
  }

  const onMouseUp = () => {
    if (!selection) return;
    const pointRange = selection.toRange(data);
    const startLoc = pointRange?.start;
    const endLoc = pointRange?.end;
    if (!startLoc || !endLoc) return;
    for (let rowNumber = startLoc.row; rowNumber <= endLoc.row; rowNumber++) {
      for (let columnNumber = startLoc.column; columnNumber <= endLoc.column; columnNumber++) {
        changeOneCell(rowNumber, columnNumber, "Hello")
      }
    }
  }

  return <div onMouseUp={onMouseUp}><Spreadsheet
    data={data}
    columnLabels={columnLabels}
    rowLabels={rowLabels}
    onSelect={onSelect}
  /></div>;
}

// TODO: Fix row/column selection