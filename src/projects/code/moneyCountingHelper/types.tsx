export type TenderInfo = {
  value: number;
  name: string;
  count: number;
}
export type TenderState = {
  state: TenderInfo,
  setState: (currency: number) => void,
}
export type StateFunctions = {
  values: TenderState[],
  sum: number,
  reset: () => void,
}
