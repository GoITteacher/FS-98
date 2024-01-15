/**
 * Деструктуризуй об'єкт таким чином щоб отримати значення name, surname, username
 */

const user = {
  id: 1,
  username: 'harry_potter',
  profile: {
    name: 'Harry',
    surname: 'Potter',
    age: 25,
  },
};

const {
  username,
  profile: { name: myName, surname },
} = user;

// Деструктуризація об'єкта для отримання окремих змінних

// Виведення отриманих значень

console.log(`Ім'я користувача: ${myName}`);
console.log(`Прізвище користувача: ${surname}`);
console.log(`Ім'я користувача (за нікнеймом): ${username}`);
