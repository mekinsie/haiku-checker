// Identify vowels

// Identify consonants

// Identify number of lines in poem 

// Identify first line has 5 syllables

// Identify second line has 7 syllables

// Identify third line has 5 syllables

// If 2 consonants are together they get split, except when they are put together for a single sound (ie: th, ph, ng)

export default class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  line1Count() {
    let firstString = `${this.line1} `;
    firstString = firstString.replace(/\W/g," ");
    let line1Array = firstString.match(/[aeiouy]/gi);
    let line1Syl = line1Array.length;
    
    line1Array = firstString.match(/\w{2}e\s+/gi);
    line1Syl -= line1Array.length;

    line1Array = firstString.match(/[aeiouy]{2}/gi);
    line1Syl -= line1Array.length;

    line1Array = firstString.match(/[aeiouy]{3}/gi);
    line1Syl -= line1Array.length;

    line1Array = firstString.match(/[^aeiouy]+le\s+/gi);
    line1Syl += line1Array.length;

    return line1Syl;
  }
};













// line2Count() {
//   let line2Array = this.line2.match(/[aeiouy]/gi);
//   return line2Array;
// }

// line3Count() {
//   let line3Array = this.line3.match(/[aeiouy]/gi);
//   return line3Array;
// }