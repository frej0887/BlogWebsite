import type {TenderInfo} from "./types.tsx";
import type {Dispatch, SetStateAction} from "react";

export const setFunction = (change: number, state: TenderInfo, setState: Dispatch<SetStateAction<TenderInfo>>) =>
  setState({...state, ...{count: change}})