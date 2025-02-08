"use strict";
/**
 * Calculate the age at which a father should be twice as old as his son
 * @param {number} ageF - Father's age
 * @param {number} ageS  - Son's age
 * @returns {number} Age number
 */
function fatherTwofoldOlder(ageF, ageS) {
  if (
    ageF - ageS >= 15 &&
    ageF >= 0 &&
    ageS >= 0 &&
    typeof (ageF - ageS) === "number"
  ) {
    const difference = ageF - ageS * 2;
    return difference;
  }
  return NaN;
}
function consoleTest(numberF) {
  let yearWord;
  let absNumberF = Math.abs(numberF);
  if (absNumberF % 10 === 1 && absNumberF % 100 !== 11) {
    yearWord = "рік";
  } else if (
    absNumberF % 10 >= 2 &&
    absNumberF % 10 <= 4 &&
    (absNumberF % 100 < 10 || absNumberF % 100 > 20)
  ) {
    yearWord = "роки";
  } else if (absNumberF > 4) {
    yearWord = "років";
  }

  if (numberF === 0) {
    return "Зараз вік батька вдвічі більше ніж вік сина";
  }
  if (numberF < 0) {
    return `Батьку було ${absNumberF} ${yearWord} назад вдвічі більше ніж сину`;
  }
  if (numberF > 0) {
    return `Батьку через ${absNumberF} ${yearWord} буде вдвічі більше ніж сину`;
  }
  if (Number.isNaN(numberF)) {
    return "it`s NaN";
  }
}

//test segment
const fatherAge = 30;
const sonAge = 10;
console.log(consoleTest(fatherTwofoldOlder(fatherAge, sonAge)));
