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

  union(other: PointList): PointList {
    for (const otherElement of other) {
      if (this.has(otherElement)) continue;
      this.add(otherElement);
    }
    return this
  }

  without(other: PointList): PointList {
    for (const thisElement of this) {
      if (other.has(thisElement)) super.delete(thisElement);
    }
    return this;
  }

  object(): Point[] {
    return [...this.values()];
  }

  copy(): PointList {
    return new PointList(...this.values())
  }

  private compareFunc = (a: Point, b: Point) => {
    if (a.day == b.day) return a.time - b.time;
    return a.day - b.day;
  }

  firstN(n: number): PointList {
    return new PointList(...this.object().sort(this.compareFunc).slice(0, n));
  }

  lastN(n: number): PointList {
    return new PointList(...this.object().sort(this.compareFunc).slice(this.length() - n));
  }
}
