/*
 * Парс числа з Number.parseInt() та Number.parseFloat()
 */

// const userAge = prompt('Enter your age');

// const userAge = prompt('Enter your age');
// const x = Number.parseFloat(userAge); //25.25

// console.log(x);
/*
 * - Метод число.toFixed(digits)
 */

// const x = 10.34534545345345;
// console.log(x.toFixed(0));

/*
 * - Приведення (перетворення) до Number(value)
 * - Значення NaN (Not a Number) та метод Number.isNaN(value)
 */

// const str = 'null';
// const x = Number(str);
// console.log(x);

// const str = '-123';
// console.log(+str);

/*
 * Об'єкт Math
 * - Зведення в ступінь
 * - Exponent operator
 */

// const x = Math.pow(2, 3);
// const y = Math.sqrt(9);
// const q = Math.tan(150);

// console.log(3 ** 2);

// =================

// +
// -
// *
// /
// **
// %

// const x = 2;
// const y = 3;

// let q = 10;
// q = q + 20;
// q += 20;
// q *= 2;
// q -= 10;
// q /= 2;
// q **= 4;
// q %= 4;

// q++; // q+=1  q = q+1
// q--; // q-=1  q = q-1

// console.log(result);

/*
 * Напиши скрипт який просить користувача ввести число та ступінь,
 * зводить число в цей ступінь і виводить результат у консоль
 */

// 1. попросити ввести число і зберегти змінну
// 2. попросити ввести ступінь і зберегти змінну
// 3. Звести введені дані у ступінь та вивести

// const x = prompt('Enter x');
// const y = prompt('Enter y');
// console.log(Number(x) ** Number(y));

/*
 * Генерим псевдовипадкові числа
 * - Math.random()
 * - Math.round()
 */

const x = Math.random() * 990 + 10;
const y = Math.round(10.623);
// const c = Math.ceil(10.0000001);
// const t = Math.floor(10.623);

console.log(y);
console.log(c);
console.log(t);
