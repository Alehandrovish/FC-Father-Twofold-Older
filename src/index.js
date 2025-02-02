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
    ageF > ageS &&
    typeof ageF === "number" &&
    typeof ageS === "number"
  ) {
    let difference = ageF - ageS * 2;

    console.log(consoleTest(difference));

    return Math.abs(difference);
  } else {
    console.log("You entered wrong data");
    return NaN;
  }
}
function consoleTest(numberF = NaN) {
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
  return numberF;
}

console.group(`Entering two number: father's age and sons's age`);
console.log("Entered -60 and 30 result is: " + fatherTwofoldOlder(-60, 30)); // -60 < 0 / NaN
console.log("Entered 60 and -30 result is: " + fatherTwofoldOlder(60, -30)); // 60 > 0 but -30 < 0 / NaN
console.log("Entered -60 and -30 result is: " + fatherTwofoldOlder(-60, -30)); // -60 < 0 and -30 < 0 / NaN
console.log("Entered '60' and 30 result is: " + fatherTwofoldOlder("60", 30)); // 60 is not a number / NaN
console.log("Entered 60 and '30' result is: " + fatherTwofoldOlder(60, "30")); // 60 is a number but '30' isn`t / NaN
console.log(
  "Entered '60' and '30' result is: " + fatherTwofoldOlder("60", "30")
); // '60' and '30' not a numbers / NaN
console.log("Entered 30 and 21 result is: " + fatherTwofoldOlder(30, 21)); // 30 and 21 is a numbers but 30-21=9 <= 15/ NaN
console.log("Entered 40 and 25 result is: " + fatherTwofoldOlder(40, 25)); // 40 and 25 is a numbers and 40-25=15 <= 15/ 40 > 15*2=30 / 40-30 > 0 /  буде / 10 / років
console.log("----------------------------------------------------------");
console.log("Entered 40 and 20 result is: " + fatherTwofoldOlder(40, 20)); // 40 and 20 are numbers / 40 = 20*2  / вже зараз
console.log("----------------------------------------------------------");
console.log("Entered 29 and 14 result is: " + fatherTwofoldOlder(29, 14)); // 29 and 14 are numbers / 29 > 14*2=28 / 29-28 > 0 / буде / 1 / рік
console.log("Entered 64 and 31 result is: " + fatherTwofoldOlder(64, 31)); // 64 and 31 are numbers / 64 > 31*2=62 / 64-62 > 0 / буде / 2 / роки
console.log("Entered 71 and 33 result is: " + fatherTwofoldOlder(71, 33)); // 71 and 33 are numbers / 71 > 33*2=66 / 71-66 > 0 / буде / 5 / років
console.log("Entered 30 and 10 result is: " + fatherTwofoldOlder(30, 10)); // 30 and 10 are numbers / 30 > 10*2=20 / 30-20 > 0 / буде / 10 / років
console.log("----------------------------------------------------------");
console.log("Entered 31 and 16 result is: " + fatherTwofoldOlder(31, 16)); // 31 and 16 are numbers / 31 < 16*2=32 / 31-32 < 0 / було / 1 / рік
console.log("Entered 44 and 23 result is: " + fatherTwofoldOlder(44, 23)); // 44 and 23 are numbers / 44 < 23*2=46 / 44-46 < 0 / було / 2 / роки
console.log("Entered 55 and 30 result is: " + fatherTwofoldOlder(55, 30)); // 55 and 30 are numbers / 55 < 30*2=60 / 55-60 < 0 / було / 5 / років
console.log("Entered 74 and 50 result is: " + fatherTwofoldOlder(74, 50)); // 74 and 50 are numbers / 74 < 50*2=100 / 74-100 < 0 / було / 26 / років
console.groupEnd();
