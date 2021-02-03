import { TestScheduler } from "jest";
import Haiku from "../src/haiku.js";

describe("Haiku", () => {

  test("should correctly create a haiku object with three keys", () => {
    const haiku = new Haiku([],[],[]);
    expect(haiku.line1).toEqual([]);
    expect(haiku.line2).toEqual([]);
    expect(haiku.line3).toEqual([]);
  });
});