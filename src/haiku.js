export default class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  syllableCounter(str) {
    let lineString = `${str} `;
    lineString = lineString.replace(/\W/g," ");
    let lineArray = lineString.match(/[aeiouy]/gi);
    let lineSyl = lineArray.length;

    if (lineString.match(/\w{2}e\s+/gi) != null) {
      lineArray = lineString.match(/\w{2}e\s+/gi)
      lineSyl -= lineArray.length;
    }
    if (lineString.match(/[aeiouy]{2}/gi) != null) {
      lineArray = lineString.match(/[aeiouy]{2}/gi);
      lineSyl -= lineArray.length;
    }  
    if (lineString.match(/[aeiouy]{3}/gi) != null) {
      lineArray = lineString.match(/[aeiouy]{3}/gi);
      lineSyl -= lineArray.length;
    }  
    if (lineString.match(/[^aeiouy]+le\s+/gi) != null) {
      lineArray = lineString.match(/[^aeiouy]+le\s+/gi);
      lineSyl += lineArray.length;
    }
    return lineSyl;
  }

  haikuChecker() {
    let arrayOfStrings = (Object.values(this));
    let line1Syl = this.syllableCounter(arrayOfStrings[0]);
    let line2Syl = this.syllableCounter(arrayOfStrings[1]);
    let line3Syl = this.syllableCounter(arrayOfStrings[2]);
    if (line1Syl === 5 && line2Syl === 7 && line3Syl === 5) {
      return true
    } else {
      return false;
    }
  }
}