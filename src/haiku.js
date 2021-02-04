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

  line2Count() {
    let secondString = `${this.line2} `;
    secondString = secondString.replace(/\W/g," ");
    let line2Array = secondString.match(/[aeiouy]/gi);
    let line2Syl = line2Array.length;

    line2Array = secondString.match(/\w{2}e\s+/gi);
    line2Syl -= line2Array.length;

    line2Array = secondString.match(/[aeiouy]{2}/gi);
    line2Syl -= line2Array.length;

    line2Array = secondString.match(/[aeiouy]{3}/gi);
    line2Syl -= line2Array.length;

    line2Array = secondString.match(/[^aeiouy]+le\s+/gi);
    line2Syl += line2Array.length;

    return line2Syl;
  }
};