/**
 * LocalStorage
 */

/* const LS_KEY = 'Array of names';
const names = ['Alice', 'Kate', 'Emma'];

const data = {
  x: 123,
  y: 2334,
  u: true,

  showInfo() {
    console.log('Hello');
  },

  test: undefined,
};

const LocalStorageOBJ = {
  x: 10,
  y: 20,
  user: {},
}; */

/* const copy = JSON.stringify(data);

const myCopy = JSON.parse(copy);

console.log(data === myCopy); */

/* const obj = {
  name: 'Vasya',
  age: 10,
  location: {
    x: 1023,
    y: 4234,
  },
};

const copy = { ...obj };

copy.location.x = 12334;

console.log(obj); */
/* const data = true;
const myJson = JSON.stringify(data);
console.log(myJson); */

// const myjson = '"awdawdawdawd"';

// const myData = JSON.parse(myjson);

// console.log(myData);
//==============================
/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

/* const obj = {
  name: 'Vasya',
  age: 20,
  isStudent: false,
};

const str = JSON.stringify(obj);

localStorage.setItem('user', str); */

/**
 *
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

/* const data = localStorage.getItem('user');

const obj = JSON.parse(data);

console.log(obj); */

// console.log(localStorage.getItem('sef'));

/* const key0 = localStorage.key(0);
for(let i=0;i<localStorage.length;i++){
  localStorage.key(i);
} */
/**
 * Видалення
 */

/* localStorage.removeItem('user1');
localStorage.removeItem('user2');
localStorage.removeItem('user3'); */

// localStorage.clear();
/**
 * LocalStorage не може зберігати функції
 */

/* function add(a, b) {
  return a + b;
}

const calculator = {
  a: 5,
  b: 10,
  add() {
    return this.a + this.b;
  },
};
 */

//=======================================

// localStorage.setItem('myWord', 'Hello');

/* const data = localStorage.getItem('myWord');

const word = JSON.parse(data);

console.log(word);

console.log('ENd');

 */

// console.log('START');

/* try {
  const x = 10;
  console.log(x);
  const data = loadFromLS('sefsef'); // null
  const result = JSON.parse(data);
  console.log(result);
} catch {
  console.log('ERROR');
}

console.log('END'); */

// ====================================

const obj1 = { name: '123' };
const obj2 = { name: '123' };
const obj3 = { name: '123' };
const obj4 = { name: '123' };

/* 
localStorage.setItem('user1', JSON.stringify(obj1));
localStorage.setItem('user2', JSON.stringify(obj2));
localStorage.setItem('user3', JSON.stringify(obj3));
localStorage.setItem('user4', JSON.stringify(obj4)); 
*/

/* saveToLS('user1', obj1);
saveToLS('user2', obj2);
saveToLS('user3', obj3);
saveToLS('user4', obj4);

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
} */

/* try {
  const user1 = JSON.parse(localStorage.getItem('user1'));
  console.log(user1);
} catch {
  console.log('Error');
}
try {
  const user1 = JSON.parse(localStorage.getItem('user1'));
  console.log(user1);
} catch {
  console.log('Error');
}
try {
  const user1 = JSON.parse(localStorage.getItem('user1'));
  console.log(user1);
} catch {
  console.log('Error');
}
try {
  const user1 = JSON.parse(localStorage.getItem('user1'));
  console.log(user1);
} catch {
  console.log('Error');
}
try {
  const user1 = JSON.parse(localStorage.getItem('user1'));
  console.log(user1);
} catch {
  console.log('Error');
}
try {
  const user1 = JSON.parse(localStorage.getItem('user1'));
  console.log(user1);
} catch {
  console.log('Error');
}
try {
  const user1 = JSON.parse(localStorage.getItem('user1'));
  console.log(user1);
} catch {
  console.log('Error');
}
 */

function loadFromLS(key = 'empty') {
  const data = localStorage.getItem(key); // 'Hello World'

  try {
    const result = JSON.parse(data);
    return result;
  } catch {
    return data;
  }
}
