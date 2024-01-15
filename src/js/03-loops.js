/**
 * Деструктуризація об'єкта в циклі
 */

const users = [
  {
    name: 'Kate',
    age: 123,
  },
  {
    name: 'Alex',
    age: 123,
  },
  {
    name: 'Mark',
    age: 123,
  },
];

/**
 * Без деструктуризації
 */
/* const names = [];

for (const user of users) {
  names.push(user.name);
}

console.log(names); */

/**
 * З деструктуризацією
 */

/* const names = [];

for (const { name } of users) {
  names.push(name);
}

console.log(names); */

/* const names = users.map(({ name }) => {
  return name;
});

console.log(names); */

// ==========================
