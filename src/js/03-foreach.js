/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

// const arr = [1, 2, 3, 4, 4, 5, 6, 7];

/* 
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
} 
*/

/* const newArr = [];

function foo(elem) {
  newArr.push(elem ** 2);
}

const numbers = [5, 10, 15, 20, 25];



console.log(newArr); */
// const result = numbers.forEach(foo);
// foo(5, 0,numbers)
// foo(10,1,numbers)
// foo(15,2,numbers)
// foo(20,3,numbers)
// foo(25,4,numbers)

// let total = 0;

// console.log(total);

// ==========================
// const numbers = [5, 10, 2, 20, 3];

// numbers.forEach((num, idx) => {
//   console.log(`${idx} - ${num}`);
// });

// numbers.forEach(elem => {
//   if (elem % 2 === 0) {
//     console.log(`+-${elem}`);
//   } else {
//     console.log(`x-${elem}`);
//   }
// });

// numbers.forEach((elem, idx, array) => {
//   if (elem > numbers.length) {
//     console.log(elem);
//   }
// });

// const str = '12323423';
// str.split('').forEach((elem, idx, array) => {
//   if (elem > array.length) {
//     console.log(elem);
//   }
// });
/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function logItems(items) {
//   console.log(items);

//   items.forEach((item, i) => {
//     console.log(`${i + 1} - ${item}`);
//   });
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');

  nameList.forEach((item, i, array) => {
    console.log(`${item}: ${phoneList[i]}`);
  });
}

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// function calculateAverage(...args) {
//   let total = 0;

//   args.forEach(item => (total += item));

//   return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
