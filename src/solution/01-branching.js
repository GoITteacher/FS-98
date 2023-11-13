/**
 * Розгалуження
 *
 * - Інструкція if
 * - Інструкція if...else
 * - Блок else...if
 * - Тернарний оператор
 */

console.log("Before");

if (5 > 30) {
  console.log("x > y");
} else {
  console.log("x < y");
}

console.log("After");

/**
 * -----------------------------
 */
const points = 5000;

if (points <= 500) {
  console.log("Level 1");
} else if (points > 500) {
  console.log("Level 2");
} else if (points > 1500) {
  console.log("Level 3");
} else {
  console.log("Level 4");
}

/**
 * -----------------------------
 */
const balance = 1000;
// let message;

// if (balance >= 0) {
//   message = 'Positive';
// } else {
//   message = 'Negative';
// }

const message = balance >= 0 ? "Positive" : "Negative";
console.log(message);
