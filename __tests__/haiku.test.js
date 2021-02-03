import Haiku from "../src/haiku.js";

describe("Haiku", () => {

test("should correctly create a haiku object with three keys", () => {
    const haiku = new Haiku("","","");
    expect(haiku.line1).toEqual("");
    expect(haiku.line2).toEqual("");
    expect(haiku.line3).toEqual("");
  });

test("it should return an array of vowels from a string", () => {
    const haiku = new Haiku("Hello","","");
    expect(haiku.line1Count()).toEqual(["e","o"]);
  });

  test("it should return an array of vowels from a string", () => {
    const haiku = new Haiku("","Hello","");
    expect(haiku.line2Count()).toEqual(["e","o"]);
  });

  test("it should return an array of vowels from a string", () => {
    const haiku = new Haiku("","","Hello");
    expect(haiku.line3Count()).toEqual(["e","o"]);
  });
});


// test("it should return the number of elements in an array", () => {
//   expect(haiku.vowel)