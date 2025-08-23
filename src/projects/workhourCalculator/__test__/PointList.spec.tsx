import {PointList} from "../PointList";

test("createPointList", () => {
  const pointList = new PointList();
  expect(typeof pointList).toBe('object');
})

test("pointListHas", () => {
  const pointList = new PointList({time: 2, day: 3});
  expect(pointList.has({time: 2, day: 3})).toBe(true);
})

test("pointListUnion", () => {
  const pointList1 = new PointList({time: 2, day: 3}, {time: 1, day: 4});
  const pointList2 = new PointList({time: 2, day: 3}, {time: 25, day: 6});
  const pointList3 = new PointList({time: 25, day: 6}, {time: 1, day: 4}, {time: 2, day: 3});
  expect(pointList1.union(pointList2).equal(pointList3)).toBe(true);
})

test("pointListWithout", () => {
  const pointList1 = new PointList({time: 25, day: 6}, {time: 1, day: 4}, {time: 2, day: 3});
  const pointList2 = new PointList({time: 1, day: 4}, {time: 15, day: 4});
  const pointList3 = new PointList({time: 2, day: 3}, {time: 25, day: 6});
  expect(pointList1.without(pointList2).equal(pointList3)).toBe(true);
})

test("pointListFirstN", () => {
  const pointList1 = new PointList(
    {day: 6, time: 5},
    {day: 1, time: 2},
    {day: 1, time: 1},
    {day: 3, time: 4},
    {day: 4, time: 2},
    {day: 6, time: 25},
  );
  const pointList2 = new PointList(
    {day: 1, time: 1},
    {day: 1, time: 2},
    {day: 3, time: 4},
    {day: 4, time: 2},
  );
  expect(pointList1.firstN(2).length()).toBe(2);
  expect(pointList1.firstN(4).equal(pointList2)).toBe(true);
})


test("pointListMiddleNOddListOddWant", () => {

  // Odd list length
  const pointListOdd = new PointList(
    {day: 0, time: 1},
    {day: 0, time: 2},
    {day: 0, time: 3},
    {day: 0, time: 4},
    {day: 0, time: 5},
    {day: 0, time: 6},
    {day: 0, time: 7},
  );

  const pointListOddMiddle3 = new PointList(
    {day: 0, time: 3},
    {day: 0, time: 4},
    {day: 0, time: 5},
  );
  console.log(pointListOdd.middleN(3))
  expect(pointListOdd.middleN(3).equal(pointListOddMiddle3)).toBe(true);
})

test("pointListMiddleNOddListEvenWant", () => {

  // Odd list length
  const pointListOdd = new PointList(
    {day: 0, time: 1},
    {day: 0, time: 2},
    {day: 0, time: 3},
    {day: 0, time: 4},
    {day: 0, time: 5},
    {day: 0, time: 6},
    {day: 0, time: 7},
  );

  const pointListOddMiddle4 = new PointList(
    {day: 0, time: 2},
    {day: 0, time: 3},
    {day: 0, time: 4},
    {day: 0, time: 5},
  );
  expect(pointListOdd.middleN(4).equal(pointListOddMiddle4)).toBe(true);
})

test("pointListMiddleNEvenListOddWant", () => {
  // Even lists
  const pointListEven = new PointList(
    {day: 0, time: 1},
    {day: 0, time: 2},
    {day: 0, time: 3},
    {day: 0, time: 4},
    {day: 0, time: 5},
    {day: 0, time: 6},
  );

  const pointListEvenMiddle3 = new PointList(
    {day: 0, time: 2},
    {day: 0, time: 3},
    {day: 0, time: 4},
  );
  expect(pointListEven.middleN(3).equal(pointListEvenMiddle3)).toBe(true);
})

test("pointListMiddleNEvenListEvenWant", () => {
  // Even lists
  const pointListEven = new PointList(
    {day: 0, time: 1},
    {day: 0, time: 2},
    {day: 0, time: 3},
    {day: 0, time: 4},
    {day: 0, time: 5},
    {day: 0, time: 6},
  );

  const pointListEvenMiddle4 = new PointList(
    {day: 0, time: 2},
    {day: 0, time: 3},
    {day: 0, time: 4},
    {day: 0, time: 5},
  );
  expect(pointListEven.middleN(4).equal(pointListEvenMiddle4)).toBe(true);
})