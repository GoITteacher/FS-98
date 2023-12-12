/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

/* const obj = {
  name: 'Vasya',
  age: 25,
  city: 'Dnipro',
  showInfo(x, y, q) {
    console.log('-------------');
    console.log(this.name);
    console.log(this.age);
    console.log(this.city);
    console.log('X - ', x);
    console.log('-------------');
  },

  sumRgb(r, g, b) {
    console.log(this);
    console.log(r + g + b);
  },
};

const obj2 = {
  name: 'Petya',
  age: 27,
  city: 'Kyiv',
};

const obj3 = {
  name: 'Kolya',
  age: 27,
  city: 'Kyiv',
};

const obj4 = {
  name: 'Vanya',
  age: 27,
  city: 'Kyiv',
};

const red = 255;
const green = 255;
const blue = 255; */

// obj.sumRgb.apply(obj2, [red, green, blue]);
// obj.sumRgb.call(obj3, red, green, blue);
// =====================

// function showThis(a, b, arr) {
//   console.log(a, b, arr);
//   console.log('showThis -> this', this);
// }
// const test1 = showThis.bind({ name: 'Obj1' });
// const test2 = test1.bind({ name: 'Obj2' });

// const objA = {
//   a: 5,
//   b: 10,
// };

// test2.call(objA, 5, 1, [100, 200, 300]);
// test2.apply(objA, [5, 1, [100, 200, 300]]);

/**
 * -------------------------------
 */
/* const changeColor = function (color) {
  console.log("changeColor -> this", this);
  this.color = color;
};

const hat = {
  color: "black",
};

changeColor.call(hat, "orange");
console.log(hat);

const sweater = {
  color: "green",
};

changeColor.call(sweater, "blue");
console.log(sweater); */

/**
 * -------------------------------
 */
/* const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

changeHatColor("yellow");
console.log(hat);

changeSweaterColor("red");
console.log(sweater); */

/**
 * -------------------------------
 */
/* const counter = {
  value: 0,
  increment(value) {
    console.log("increment -> this", this);
    this.value += value;
  },
  decrement(value) {
    console.log("decrement -> this", this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement.bind(counter));
console.log(counter);
 */

// =========================

// const person1 = {
//   name: 'Nadiya',
//   tesla() {
//     console.log(this);
//   },
// };

// const person2 = {
//   name: 'Lika',
// };

// const tesla2 = person1.tesla.bind(person2);

// tesla2();
// ===============================

/* 
1 - arrow // 10
2 - bind // 7
3 - call apply // 5
4 - object // 3
5 - window | und // 1
*/
