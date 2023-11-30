/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */
// // =========================

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const result = [...arr3, ...arr1, ...arr2];
// [7, 8, 9, 1, 2, 3, 4, 5, 6]
// console.log(result);

// Math.max(1, 2, 3);
// Math.max(arr[0], arr[1], arr[2], arr[3], arr[4]);
// Math.max(...arr);

// Math.max
// Math.min
// push
// unshift
// append
// appendChild
// classList.add
// classList.remove

// =========================
// spread object

// const obj1 = {
//   x: 2,
//   y: 10,
// };

// const obj2 = {
//   t: 20,
//   q: 30,
// };

// const result = { x: 10, ...obj1, ...obj2, x: 30 };

// console.log(result);
// =========================
const numbers = [];
// console.log(numbers);

/**
 * Пошук найменшої аьо найбільшої температури (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];

Math.max(...temps);
/**
 * Створення масиву і тип за посиланням
 */

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];

// console.log(a === b);

// a[0].x = 20;

// console.log('a: ', a);
// console.log('b: ', b);

/*
 * Поєднуємо кілька масивів в один через spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [];
// console.log(allTemps);

/*
 * Створення об'єкта
 */
const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };
const objC = {};

// console.log(objC);

/**
 * Оновлюємо налаштування користувача
 */
const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {};

// console.log(finalSettings);

// ===========================

// function foo(x, y, q, ...arr) {
//   console.log(...arr);
// }
// foo(1, 2, 3, 4, 5, 6);

// =========================

function getTotal(...arr) {
  let total = 0;

  for (const item of arr) {
    total += item;
  }

  return total;
}

const result = getTotal(1, 2, 5, 5);

console.log(result);
