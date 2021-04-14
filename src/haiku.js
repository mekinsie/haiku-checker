// export default class Haiku {
//   constructor(line1, line2, line3) {
//     this.line1 = line1;
//     this.line2 = line2;
//     this.line3 = line3;
//   }

function checkHaiku(array) {
  return (haikuChecker(array) === "575");
}

function haikuChecker(haikuArray){
  if (haikuArray.length < 1){
    return ''
  }
  let lineString = `${haikuArray[0]} `;
  lineString = lineString.replace(/\W/g," ");
  let lineSyl = lineString.match(/[aeiouy]/gi).length;
  if (lineString.match(/\w{2}e\s+/gi) != null) {
    lineSyl -= lineString.match(/\w{2}e\s+/gi).length;
  }
  if (lineString.match(/\bthe\b/gi) != null) {
    lineSyl += lineString.match(/\bthe\b/gi).length;
  }
  if (lineString.match(/[aeiouy]{2}/gi) != null) {
    lineSyl -= lineString.match(/[aeiouy]{2}/gi).length;
  }
  if (lineString.match(/[aeiouy]{3}/gi) != null) {
    lineSyl -= lineString.match(/[aeiouy]{3}/gi).length;
  }
  if (lineString.match(/[aieouy]{1}ing\b/gi) != null) {
    lineSyl += lineString.match(/[aeiouy]{1}ing\b/gi).length;
  }
  if (lineString.match(/ia/gi) != null ){
    lineSyl += lineString.match(/ia/gi).length;
  }
  if (lineString.match(/[^aeiouy]+le\s+/gi) != null) {
    lineSyl += lineString.match(/[^aeiouy]+le\s+/gi).length;
  }
  haikuArray.shift();
  return lineSyl + haikuChecker(haikuArray);
}

// ["An old silent pond", "A frog jumps into the pond", "Splash! Silence again."]


console.log(checkHaiku(["only one guy and", "only one fly trying to", "make the guest room do"]));
// console.log(haikuChecker(["Over their wintry", "Forerest, winds howl in rage", "With no leav to blow."]));
console.log(checkHaiku(["Over their wintry", "Forerest, winds howl in rage", "With no leaves to blow."]));
  // haikuChecker() {
  //   let arrayOfStrings = (Object.values(this));
  //   let line1Syl = this.syllableCounter(arrayOfStrings[0]);
  //   let line2Syl = this.syllableCounter(arrayOfStrings[1]);
  //   let line3Syl = this.syllableCounter(arrayOfStrings[2]);
  //   if (line1Syl === 5 && line2Syl === 7 && line3Syl === 5) {
  //     return true
  //   } else {
  //     return false;
  //   }
  // }
