import {PointList} from "./PointList.tsx";

export const early = (toChooseFrom: PointList[], neededQuarters: number) => {
  let out = new PointList();
  for (const pointList of toChooseFrom) {
    if (pointList.length() >= neededQuarters) {
      out.union(pointList.firstN(neededQuarters));
      neededQuarters = 0;
      break;
    }
    neededQuarters -= pointList.length();
    out.union(pointList);
  }
  return {out, newNeededQuarters: neededQuarters};
}

export const middle = (toChooseFrom: PointList[], totalNeededQuarters: number) => {
  let out = new PointList();
  for (const pointList of toChooseFrom) {
    const listLength = pointList.length();
    if (listLength >= totalNeededQuarters) {
      out.union(pointList.middleN(totalNeededQuarters));
      totalNeededQuarters = 0;
      break;
    }
    totalNeededQuarters -= listLength;
    out.union(pointList);
  }
  return {out, newNeededQuarters: totalNeededQuarters};
}
