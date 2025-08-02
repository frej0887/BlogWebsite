import { PointList } from "../projects/workhourCalculator/PointList";

test('demo', () => {
  expect(true).toBe(true)
})

test("createPointList", () => {
  const pointList = new PointList();
  expect(typeof pointList).toBe('object');
})

test("pointListHas", () => {
  const pointList = new PointList({time: 2, day: 3});
  expect(pointList.has({time: 2, day: 3})).toBe(true);
})

test("pointListIntersection", () => {
  const pointList1 = new PointList({time: 2, day: 3}, {time: 1, day: 4});
  const pointList2 = new PointList({time: 2, day: 3}, {time: 25, day: 6});
  const pointList3 = new PointList({time: 25, day: 6}, {time: 1, day: 4}, {time: 2, day: 3});
  expect(pointList1.intersection(pointList2).equal(pointList3)).toBe(true);
})

test("pointListWithout", () => {
  const pointList1 = new PointList({time: 25, day: 6}, {time: 1, day: 4}, {time: 2, day: 3});
  const pointList2 = new PointList({time: 1, day: 4}, {time: 15, day: 4});
  const pointList3 = new PointList({time: 2, day: 3}, {time: 25, day: 6});
  expect(pointList1.without(pointList2).equal(pointList3)).toBe(true);
})
