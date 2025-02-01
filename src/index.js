"use strict";
/**
 * Calculate the age at which a father should be twice as old as his son
 * @param {number} ageF - Father's age
 * @param {number} ageS  - Son's age
 * @returns {number} Age number
 */
function fatherTwofoldOlder(ageF, ageS) {
  if (Math.abs(ageF - ageS) < 15) {
    return "diference between ages is not 15";
  }
  if (ageF < 0) {
    return "Father`s age input uncorect";
  }
  if (ageS < 0) {
    return "Son`s age input uncorect";
  }
  if (ageF < ageS) {
    return "Son are older than father it can not be";
  }
  const DIFFERENCE = ageF - ageS * 2;
  return Math.abs(DIFFERENCE);
}
console.group();
console.log(fatherTwofoldOlder(35, 25));
console.log(fatherTwofoldOlder(-50, 5));
console.log(fatherTwofoldOlder(50, -5));
console.log(fatherTwofoldOlder(30, 50));
console.log(fatherTwofoldOlder(40, 40));
console.log(fatherTwofoldOlder(56, 13));
console.log(fatherTwofoldOlder(60, 44));
console.groupEnd;
