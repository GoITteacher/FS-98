/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

console.log(Boolean(true)); // true
console.log(Boolean(false)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(3.14)); // true
console.log(Boolean(-10)); // true
console.log(Boolean('')); // false
console.log(Boolean('hello')); // true
console.log(Boolean('false')); // true

/**
 * --------------------------------
 */

// && завжди повертає ліву частину якщо там false;

// 'Mango' && false;// false
// 'false' && true; // true
// 10 && 15; // 15
// '' && false; // ''
// false && false; // ''
// false && '';

// || завжди повертає ліву частину якщо там true;

// 0 || true
// true || false
// 'Mango' || "True"
// true || true

// function isNumberInRange(start, end, number) {
//   return number >= start && number <= end;
// }

// number >= start && number < end;

/**
 * --------------------------------
 */

// console.log(false || 5);
// console.log(false || null);

/**
 * --------------------------------
 */

// console.log(!5);
// console.log(!false);

/**
 * --------------------------------
 */

// && завжди повертає ліву частину якщо там false;
// || завжди повертає ліву частину якщо там true;

console.log(true && 3); //3

console.log(false && 3); //f

console.log(true && 4 && 'kiwi'); //k

console.log(true && 0 && 'kiwi'); //0

// 3 f k 0

console.log(true || 3); // t

console.log(true || 3 || 4); // t

console.log(true || false || 7); // t

console.log(null || 2 || undefined); // 2

console.log((1 && null && 2) > 0); // f

console.log(null || (2 && 3) || 4); //3

if (null || (2 && 3) || 4) {
}

// ====================

// let x = 10;
// let start = 0;
// let end = 20;

// x >= start;

// ================

// && => *
// || => +

// true || false && false && true || true; - true
// 1 + 0 * 0 * 1 + 1 = 2
