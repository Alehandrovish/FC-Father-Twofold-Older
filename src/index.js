"use strict";
/**
 * Calculate the age at which a father should be twice as old as his son
 * @param {number} ageF - Father's age
 * @param {number} ageS  - Son's age
 * @returns {number} Age number
 */
function fatherTwofoldOlder(ageF, ageS) {
  if (ageF - ageS >= 15) {
    const difference = ageF - ageS * 2;
    if (difference === 0) {
      return "Father already twofold older than son";
    } else if (difference > 0) {
      return `Father was twofold older than son 
             ${Math.abs(difference)} years ago`;
    } else {
      return `Father will be twofold older than son after 
             ${Math.abs(difference)} years`;
    }
  } else {
    return "diference between ages is not 15";
  }
}
console.log(fatherTwofoldOlder(50, 25)); //difference > 15 Fa == Sa
console.log(fatherTwofoldOlder(30, 10)); //difference > 15 Fa >= Sa
console.log(fatherTwofoldOlder(50, 27)); //difference > 15 Fa <= Sa
console.log(fatherTwofoldOlder(25, 20)); //difference < 15
