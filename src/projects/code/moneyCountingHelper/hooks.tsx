import type {StateFunctions} from "./types.tsx";
import {useState} from "react";
import {setFunction} from "./constants.tsx";

export const useStatusHandler = (): StateFunctions => {
  const [halfKrone, setHalfKrone] = useState({value: 0.5, name: "50 øre", count: 0})
  const [oneKrone, setOneKrone] = useState({value: 1, name: "1 krone", count: 0})
  const [twoKrone, setTwoKrone] = useState({value: 2, name: "2 kroner", count: 0})
  const [fiveKrone, setFiveKrone] = useState({value: 5, name: "5 kroner", count: 0})
  const [tenKrone, setTenKrone] = useState({value: 10, name: "10 kroner", count: 0})
  const [twentyKrone, setTwentyKrone] = useState({value: 20, name: "20 kroner", count: 0})
  const [fiftyKrone, setFiftyKrone] = useState({value: 50, name: "50 kroner", count: 0})
  const [oneHundredKrone, setOneHundredKrone] = useState({value: 100, name: "100 kroner", count: 0})
  const [twoHundredKrone, setTwoHundredKrone] = useState({value: 200, name: "200 kroner", count: 0})
  const [fiveHundredKrone, setFiveHundredKrone] = useState({value: 500, name: "500 kroner", count: 0})

  const allUnits = [
    {state: halfKrone, setState: setHalfKrone},
    {state: oneKrone, setState: setOneKrone},
    {state: twoKrone, setState: setTwoKrone},
    {state: fiveKrone, setState: setFiveKrone},
    {state: tenKrone, setState: setTenKrone},
    {state: twentyKrone, setState: setTwentyKrone},
    {state: fiftyKrone, setState: setFiftyKrone},
    {state: oneHundredKrone, setState: setOneHundredKrone},
    {state: twoHundredKrone, setState: setTwoHundredKrone},
    {state: fiveHundredKrone, setState: setFiveHundredKrone},
  ]

  const allStates = allUnits.map((unit) => unit.state)
  const tenderStateArray = allUnits.map((unit) => {
    return {
      state: unit.state,
      setState: (value: number) => setFunction(value, unit.state, unit.setState)
    }
  });
  return {
    values: tenderStateArray,
    sum: allStates.reduce((partialSum: number, unit) => partialSum + unit.value * unit.count, 0),
    reset: () => tenderStateArray.map(({setState}) => setState(0))
  }
}