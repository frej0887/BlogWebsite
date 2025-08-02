export type Point = {
  time: number;
  day: number;
}

export class PointList extends Set<Point>{
  constructor(...values: readonly Point[]) {
    super(values);
  }

  length(): number {
    return this.size
  }

  has(point: Point): boolean {
    for (const x of this) {
      if (x.day == point.day && x.time == point.time) {
        return true;
      }
    }
    return false;
  }

  equal(other: PointList): boolean {
    if (other.length() != this.length()) return false;
    for (const x of this) {
      if (!other.has(x)) return false;
    }
    return true;
  }

  intersection(other: PointList): PointList {
    for (const otherElement of other) {
      if (this.has(otherElement)) continue;
      this.add(otherElement);
    }
    return this
  }

  without(other: PointList): PointList {
    const out = new PointList();
    for (const thisElement of this) {
      if (other.has(thisElement)) continue;
      out.add(thisElement);
    }
    return out;
  }
}
