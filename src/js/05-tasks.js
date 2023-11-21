/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// function getSumOfArray(arr) {
//   let total = 0;

//   for (let num of arr) {
//     if (num % 2 === 0) {
//       total += num;
//     }
//   }

//   return total;
// }

// const result = getSumOfArray(numbers);
// console.log(result);

/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

// const arr1 = names.split(',');
// const arr2 = phones.split(',');

// for (let i = 0; i < arr1.length; i += 1) {
//   console.log(`${arr1[i]} - ${arr2[i]}`);
// }
/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

const string = 'Welcome to the future test last word';
const result = string.split(' ').slice(1, -1).join(' ');

console.log(result);

// const arr = string.split(' ');

// arr.pop();
// arr.shift();

// console.log(arr.join(' '));
/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

const values = [2, 17, 94, 1, 23, 37];
let min = Infinity;
// console.log(min); // 1

for (let num of values) {
  if (num < min) {
    min = num;
  }
}

console.log(min);
