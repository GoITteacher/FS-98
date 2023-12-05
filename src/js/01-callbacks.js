/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

// function day1() {
//   console.log('Піти до муз школи');
// }
// function day2() {
//   console.log('Піти до танці');
// }
// function day3() {
//   console.log('Піти до магазину');
//   return 20;
// }

// function myDay(x, y) {
//   console.log('Прокидаємось');
//   console.log('Застелити ліжкр');
//   console.log('Почистити зубки');
//   console.log('Поснідати');
//   console.log('Піти до школи');
//   console.log('Прийти додому');
//   y();
//   console.log('Повчити уроки');
//   console.log('Повечеряти');
//   console.log('Зубки');
//   console.log('Лягти спати');
// }

// myDay(100, day3);
// myDay(100, day2);

/**
 * Функція calc(a, b, callback)
 */

/* function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function sub(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function cacl(x, y, callback) {
  x *= 100;
  y *= 100;
  return callback(x, y);
}

const res1 = cacl(10, 20, sum);
const res2 = cacl(10, 20, sub);
const res3 = cacl(10, 20, multiply);
const res4 = cacl(10, 20, divide);
const res5 = cacl(10, 20, function () {
  console.log('Hello');
});

console.log(res1, res2, res3, res4); */

// ==========

/* function foo(x) {
  console.log(x);
}

foo(10); */

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

function each(array, onElem) {
  const newArr = [];
  for (const elem of array) {
    const result = onElem(elem);
    newArr.push(result);
  }
  return newArr;
}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  }),
);

console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  }),
);
