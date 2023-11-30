/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

// const test = {
//   x: 123,
//   y: 20,
//   t: 456,
// };

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
//   __proto__: test,
// };

// for (const key in feedback) {
//   // console.log(key);
//   console.log(key, feedback[key]);
// }

// console.log(feedback);

/**
 * ---------------------------------
 */

// const obj = {
//   x: 10,
//   y: 20,
//   t: 30,
//   n: 12,
//   u: 33,
//   i: 45,
// };

/* 

arr = [
  ['x', 10],
  ['y', 20],
  ['t', 30],
  ['n', 12],
  ['u', 33],
  ['i', 45],
]

*/

// const arr = Object.entries(obj);
// console.log(arr[0][0]);

// for (const pair of arr) {
//   console.log(pair[0], pair[1]);
// }

// const arr = Object.keys(obj);
// console.log(arr.includes('i'));

// const arr = Object.values(obj);
// console.log(arr.includes(45));

// const arr = Object.keys(obj);
// for (const key of arr) {
//   console.log(key, obj[key]);
// }

// const arr = Object.values(obj);
// console.log(arr);
// for (const value of arr) {
//   console.log(value);
// }

// const arr = Object.entries(obj);

// for (let pair of arr) {
//   // console.log(pair[0]);
//   console.log(pair[1]);
// }

// const obj = {
//   x: 10,
//   y: 20,
//   t: 30,
//   n: 12,
//   u: 33,
//   i: 45,
// };

// delete obj;

// console.log(obj);
