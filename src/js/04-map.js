/**
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

/* const arr = [3, 4, 1, 3, 4, 5, 1, 3, 5, 6];

const result = arr.map((item, i, array) => {
  return item * i;
});

console.log(result); */

// const friends = ['Max', 'Roman', 'Mila', 'Olya', 'Natali'];
// const newArr = friends
//   .map(name => {
//     return `<li>${name}</li>`;
//   })
//   .join('\n');

// console.log(newArr);

// [0, 4, 2,6,12,]

const allCars = [
  { make: 'Honda', model: 'CR-V', amount: 14, price: 24045 },
  { make: 'Honda', model: 'Accord', amount: 2, price: 22455 },
  { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195 },
  { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520 },
  { make: 'Toyota', model: '4Runner', amount: 19, price: 34210 },
  { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560 },
  { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320 },
  { make: 'Ford', model: 'F-150', amount: 11, price: 27110 },
  { make: 'Ford', model: 'Fusion', amount: 13, price: 22120 },
  { make: 'Ford', model: 'Explorer', amount: 6, price: 31660 },
];

/**
 * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */

// const getModels = cars => cars.map(car => car.model);

// const getModels = cars => cars.map(car => car.model);

// console.table(getModels(allCars));

// const getUpdatedCars = cars => {
//   return cars.map(car => {
//     const obj = {
//       model: car.model,
//       price: car.price,
//     };
//     return obj;
//   });
// };

// const result = getUpdatedCars(allCars);
// console.table(result);

/**
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
 * значенням властивості price залежно від переданої знижки.
 */
/* 
const makeCarsWithDiscount = (cars, discount) => {
  return cars.map(car => {
    const copy = { ...car };
    copy.price *= 1 - discount;
    return copy;
  });
}; */

// console.table(makeCarsWithDiscount(allCars, 0.2));
// console.table(makeCarsWithDiscount(allCars, 0.4));

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// console.table(players);

/*
 * Збільшуємо кількість годин гравця за id
 */

// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player => {
//   const copy = { ...player };
//   if (copy.id === playerIdToUpdate) {
//     copy.timePlayed += 10;
//   }
//   return copy;
// });

// console.table(updatedPlayers);

// ============================

// const obj = {
//   name: 123,
//   age: 21,
//   isAdmin: true,
// };

// const arr = [obj];

// const arr2 = [];

// arr2[0] = arr[0];

// console.log(arr);
// console.log(arr2);
