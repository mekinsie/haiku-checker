import Haiku from "../src/haiku.js";

describe("Haiku", () => {

test("should correctly create a haiku object with three keys", () => {
    const haiku = new Haiku("","","");
    expect(haiku.line1).toEqual("");
    expect(haiku.line2).toEqual("");
    expect(haiku.line3).toEqual("");
  });

// test("it should count the syllabels in line 1", () => {
//     const haiku = new Haiku("Hello please, count my stale beautiful syllable for me","","");
//     expect(haiku.line1Count()).toEqual(14);
//   });

//   test("it should count the syllabels in line 2", () => {
//     const haiku = new Haiku("","Hello please, count my stale beautiful syllable for me","");
//     expect(haiku.line2Count()).toEqual(14);
//   });

  test("it should count the syllabels in line 3", () => {
    const haiku = new Haiku("","","hi can you read me");
    expect(haiku.line3Count()).toEqual(5);
  });
})