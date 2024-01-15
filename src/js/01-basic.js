/**
 * Деструктуризація об'єкта
 */

/* const user = {
  username: 'Jacob name',
  age: 20,
  phoneNumber: '123123123',
  country: 'Ukraine',
  city: 'Dnipro',
  location: {
    x: '123123',
    y: '123123',
  },
  skills: {
    html: true,
    css: false,
    js: true,
  },
}; */

// const { username, age, city, country } = user;

// const username = user.username;
// const age = user.age;
// const city = user.city;
// const country = user.country;

/**
 * Глибока деструктуризація об'єкта
 */

/* const user = {
  username: 'Jacob name',
  age: 20,
  phoneNumber: '123123123',
  country: 'Ukraine',
  city: 'Dnipro',
  location: {
    x: '123123',
    y: '123123',
  },
  skills: {
    html: true,
    css: false,
    js: true,
  },

  test: {
    location: {
      cor: {
        x: 10,
        y: 20,
      },
    },
  },
};

const {
  test: {
    location: {
      cor: { x, y },
    },
  },
} = user; */

// const x = user.test.location.cor.x
// const skills = 'Hello';

/* const {
  skills: { html, css, js },
  location: { x, y },
  username,
  age,
} = user; */

// const { html, js, css } = skills;

// console.log(html, js, css);
// console.log("html", html);
// console.log("css", css);
// console.log("js", js);

// ================================

/* const obj = {
  x: 10,
  y: 20,
  test: {
    key1: 'Hello',
    key2: 'World',
  },
};

const { y, x, test: newTest } = obj;
console.log(x, y, newTest); */

// ================================
/* 
const user = {
  name: 'Volodymyr',
};

let name = 'test';

{name} = user; 
*/

/**
 * Деструктуризація масива
 */

// const rgb = [100, 255, 90];
// const [red, green, blue] = rgb;
// console.log(red, green, blue);

/* const arr = [1, 2, 3, 4, 5];
const [x1, , , , num] = arr;
console.log(x1, num); */
/* 
const obj = {
  key1: 'Hello',
  key2: 'World',
  key3: 'Test',
};

const values = Object.values(obj);
const keys = Object.keys(obj);

for (const [x1, x2] of Object.entries(obj)) {
  console.log(x1, x2);
} */

// ============================

// let x = 10;
// let y = 20;
// let q = 30;
// let t = 50;
// let r = 60;

// [x, y, q, t, r] = [q, q, t, y, x];

// console.log(x, y, q, t, r);
