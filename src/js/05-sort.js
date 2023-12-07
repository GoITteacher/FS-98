/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

// const numbers = [1, 6, 9, 6, 3];

// const result = numbers.toSorted((a, b) => {
//   return a - b;
// });

// console.log(result);

// const sorted = numbers;
// console.log("sorted ", sorted);

// const letters = ["b", "B", "a", "A"];
// console.log("letters", letters);

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

/* 
console.log(
  numbers.toSorted((curEl, nextEl) => {
    return nextEl - curEl;
  })
);

const descSortedNumbers = numbers;
const ascSortedNumbers = numbers;
console.log("descSortedNumbers", descSortedNumbers);
console.log("ascSortedNumbers", ascSortedNumbers); */

/**
 * Сортування масиву об'єктів
 */
// const players = [
//   { id: 'player-1', name: 'Test', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Mango', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Ajax', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Mango', timePlayed: 80, online: true },
//   { id: 'player-5', name: 'Test', timePlayed: 80, online: true },
//   { id: 'player-5', name: 'Mango', timePlayed: 80, online: true },
// ];

// const result = players.toSorted((player2, player1) => {
//   return player1.timePlayed - player2.timePlayed;
// });

// const result2 = players.toSorted((p1, p2) => {
//   if (p1.name === p2.name) {
//     return p1.timePlayed - p2.timePlayed;
//   } else {
//     return p1.name.localeCompare(p2.name);
//   }
// });

// console.table(result2);

// За ігровим часом

/* const sortedByBestPlayers = players;
console.table(sortedByBestPlayers);

const sortedByWorstPlayers = players;
console.table(sortedByWorstPlayers);

// По первой букве имени
const byName = players;
console.table(byName); */

// ==================
// const x = 'abcT';
// const y = 'abcY';
// console.log(x.localeCompare(y));
// ==================================

// const arr = [3, 5, 2, 4, 7, 1, 8, 0];

// for (let i = 0; i < arr.length; i += 1) {
//   for (let j = i; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       const temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }

// console.log(arr);

// ===========
