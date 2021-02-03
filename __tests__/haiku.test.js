import Haiku from "../src/haiku.js";

describe("Haiku", () => {

test("should correctly create a haiku object with three keys", () => {
    const haiku = new Haiku("","","");
    expect(haiku.line1).toEqual("");
    expect(haiku.line2).toEqual("");
    expect(haiku.line3).toEqual("");
  });

test("it should return an array of vowles from a string", () => {
    const haiku = new Haiku("Hello","","");
    expect(haiku.vowelCheck()).toEqual(["e","o"]);
  });
});

