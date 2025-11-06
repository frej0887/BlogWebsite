import type {Point} from "../PointList";
import {pointRangeToPointList} from "../tools";

test('testPointRageOrderContent', () => {
  const point1: Point = {day: 1, time: 2};
  const point2: Point = {day: 4, time: 5};

  expect(pointRangeToPointList(point1, point2).equal(pointRangeToPointList(point2, point1))).toBe(true);
})