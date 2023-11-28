/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

for (const key in feedback) {
  totalFeedback += feedback[key];
}
// console.log("totalFeedback: ", totalFeedback);

/**
 * ---------------------------------
 */
const keys = Object.keys(feedback);
console.log(keys);

for (const key of keys) {
  console.log(key);
  console.log(feedback[key]);
  totalFeedback += feedback[key];
}
// console.log("totalFeedback: ", totalFeedback);

const values = Object.values(feedback);
console.log(values);

for (const value of values) {
  console.log(value);
  totalFeedback += value;
}
// console.log('totalFeedback: ', totalFeedback);
