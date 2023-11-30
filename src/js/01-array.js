/**
 * Масив об'єктів
 *
 * - Перебор масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */
/* 
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
]; */

// console.log(friends);

// for (const friend of friends) {
//   console.log(friend.name);
// }

/**
 * Пошук друга за іменем
 */

// const friends = [
//   { name: 'Mango', online: false, age: 10 },
//   { name: 'Kiwi', online: true, age: 20 },
//   { name: 'Poly', online: false, age: 30 },
//   { name: 'Ajax', online: false, age: 40 },
// ];

// function findFriendByName(allFriends, friendName) {
//   const box = [];

//   for (const friend of allFriends) {
//     if (friend.name === friendName) {
//       box.push(friend);
//     }
//   }

//   return box;
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, "Chelsy"));

/**
 * Отримуємо імена всіх друзів
 */

// const friends = [
//   { name: 'Mango', online: false, age: 10 },
//   { name: 'Kiwi', online: true, age: 20 },
//   { name: 'Poly', online: false, age: 30 },
//   { name: 'Ajax', online: false, age: 40 },
// ];

// function getAllNames(allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     names.push(friend.name);
//   }

//   return names;
// }

// console.log(getAllNames(friends));

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
// const friends = [
//   { name: 'Mango', online: false, age: 10 },
//   { name: 'Kiwi', online: true, age: 20 },
//   { name: 'Poly', online: false, age: 30 },
//   { name: 'Ajax', online: true, age: 40 },
// ];

// function getOnlineFriends(allFriends) {
//   const names = [];

//   for (const item of allFriends) {
//     if (item.online) {
//       names.push(item.name);
//     }
//   }

//   return names;
// }

// console.log(getOnlineFriends(friends));

// ===================

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: 'Nike', price: 1300, quantity: 4, withDiscount: 2 },
//   { name: 'Adidas', price: 2700, quantity: 3, withDiscount: 0 },
//   { name: 'Reebok', price: 400, quantity: 7, withDiscount: 4 },
//   { name: 'NewBalance', price: 200, quantity: 2, withDiscount: 1 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const item of stones) {
//     if (item.name === stoneName) {
//       return item.price * (item.quantity - item.withDiscount);
//     }
//   }
// }

// console.log(calcTotalPrice(stones, 'NewBalance'));
