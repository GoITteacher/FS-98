/**
 * Цикли
 *
 * - Цикл for
 * - Відлік від 0 до N
 * - Обратний відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while і do...while
 */

// console.log('Before');
// const str = 'HELLO WORLD';

// i = 1
// for (let i = 10; i >= 0; i -= 1) {
//   console.log(str[i]);
// }
// for (let i = 0; i < 50; i += 1) {}

// for (let i = 50; i >= 0; i -= 1) {}

// let x = 10;

// console.log(x++);
// console.log(x);

// console.log('After');

// let total = 0;
// for (let i = 0; i < 5; i++) {
//   const num = Number(prompt('Enter number'));
//   total += num;
// }
// console.log(total);

/**
 * -------------------------------
 */
function myGame() {
  const random = Math.round(Math.random() * 1000);
  let num;

  while (num != random) {
    num = +prompt('x = ');
    if (num > random) {
      console.log('<');
    } else {
      console.log('>');
    }
  }
}

// function myGameV2() {
//   const random = Math.round(Math.random() * 1000);

//   do {
//     let num = +prompt('x = ');
//     if (num > random) {
//       console.log('<');
//     } else {
//       console.log('>');
//     }
//   } while (num != random);
// }

// myGame();
// console.log('After');

// ==============

// while (false) {
//   console.log('Hello');
// }

// const dreams = 1500;
// let salary = 1700;

// while (salary < dreams) {
//   console.log('More', salary);
//   salary += 170;
// }
// console.log(salary);

// do {
//   console.log('More', salary);
//   salary += 170;
// } while (salary < dreams);

// console.log(salary);

/**
 * -------------------------------
 */

// let a = 10;

// console.log(a);
// console.log(b);

/**
 * -------------------------------
 */

// console.log('Before while loop');

// let counter = 0;

// console.log('After while loop');

// ============================================

// for (let i = 1; i < 50; i++) {
//   if (i % 5 === 0 && i % 6 === 0) continue;
//   console.log(i);
// }

// const str = 'Hello world';
// let index = -1;

// for (let i = 0; i < str.length; i++) {
//   console.log(i);
//   if (str[i] === 'o' && index === -1) {
//     index = i;
//     break;
//   }
// }

// const str = 'Hello World';

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === 'H' || str[i] === 'W') continue;
// }
