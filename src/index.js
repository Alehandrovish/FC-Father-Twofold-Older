"use strict";

function fatherTwofoldOlder(ageF, ageS) {
  let counter = 0;
  if (ageF - ageS >= 15) {
    if (ageF >= ageS * 2) {
      while (ageF !== ageS * 2) {
        counter++;
        ageF++;
        ageS++;
      }
    } else {
      while (ageF !== ageS * 2) {
        counter++;
        ageF--;
        ageS--;
      }
    }
  } else {
    return "diference between ages is not 15";
  }
  return counter;
}

console.log(fatherTwofoldOlder(30, 10));
console.log(fatherTwofoldOlder(50, 27));
console.log(fatherTwofoldOlder(25, 20));
