/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

/* let user = {
  name: 'Vasya',
  age: 25,
  phoneNumber: '2312333242',
  isStudent: false,
  isAdmin: true,
  address: {
    country: 'Ukraine',
    city: 'Dnipro',
    street: 'Shevchenko',
  },
}; */

// user.name = 'Hello World';
// user.test = 'New Value';
// console.log(user.address.city);

// user.position = {
//   x: 10,
//   y: 20,
//   q: 30,
// };

// console.log(user);

// user.age1 = 10;
// user['age2'] = 20;

// console.log(user.age1);
// console.log(user['age2']);

// ==========================

/* let user = {
  name: 'Vasya',
  age: 25,
  phoneNumber: '2312333242',
  isStudent: false,
  isAdmin: true,
  address: {
    country: 'Ukraine',
    city: 'Dnipro',
    street: 'Shevchenko',
  },
};

const part1 = 'Hello';
const part2 = 'World'; */

// user[(10 * 10) / 2] = 'Test';
// console.log(user);

// user['address'].city;
// user['address']['city'];
// user.address['city'];

/**
 * -----------------------------------
//  */
// user.test = 'test';
// console.log(user);

/**
 * -----------------------------------
 */

const key = 'userName';

const obj = {
  [key]: 'Vaysa',
};

console.log(obj);

const str = `${key} - Vasya`;
console.log(str);
