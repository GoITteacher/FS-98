'use strict';
const users = [
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 28,
    email: 'alice@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 42,
    email: 'bob@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Eva',
    lastName: 'Williams',
    age: 35,
    email: 'eva@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'David',
    lastName: 'Brown',
    age: 22,
    email: 'david@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Sophia',
    lastName: 'Davis',
    age: 29,
    email: 'sophia@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Michael',
    lastName: 'Miller',
    age: 50,
    email: 'michael@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Olivia',
    lastName: 'Wilson',
    age: 19,
    email: 'olivia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Daniel',
    lastName: 'Thompson',
    age: 31,
    email: 'daniel@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Ava',
    lastName: 'Harris',
    age: 27,
    email: 'ava@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'James',
    lastName: 'Jackson',
    age: 38,
    email: 'james@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Emma',
    lastName: 'Taylor',
    age: 23,
    email: 'emma@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'William',
    lastName: 'Anderson',
    age: 45,
    email: 'william@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Mia',
    lastName: 'Martin',
    age: 29,
    email: 'mia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Joseph',
    lastName: 'Clark',
    age: 33,
    email: 'joseph@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Charlotte',
    lastName: 'Rodriguez',
    age: 26,
    email: 'charlotte@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'John',
    lastName: 'Lopez',
    age: 31,
    email: 'john@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Amelia',
    lastName: 'Lee',
    age: 20,
    email: 'amelia@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Benjamin',
    lastName: 'Gonzalez',
    age: 40,
    email: 'benjamin@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Chloe',
    lastName: 'Hernandez',
    age: 24,
    email: 'chloe@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Daniel',
    lastName: 'Young',
    age: 37,
    email: 'daniel@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Olivia',
    lastName: 'Miller',
    age: 38,
    email: 'olivia@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'James',
    lastName: 'Jones',
    age: 29,
    email: 'james@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Sophia',
    lastName: 'Davis',
    age: 31,
    email: 'sophia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'William',
    lastName: 'Wilson',
    age: 52,
    email: 'william@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Ava',
    lastName: 'Taylor',
    age: 19,
    email: 'ava@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Michael',
    lastName: 'Clark',
    age: 40,
    email: 'michael@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Emma',
    lastName: 'Lee',
    age: 27,
    email: 'emma@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Daniel',
    lastName: 'Martinez',
    age: 35,
    email: 'daniel@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Isabella',
    lastName: 'Hernandez',
    age: 42,
    email: 'isabella@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Liam',
    lastName: 'Garcia',
    age: 26,
    email: 'liam@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Mia',
    lastName: 'Rodriguez',
    age: 30,
    email: 'mia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Noah',
    lastName: 'Lopez',
    age: 24,
    email: 'noah@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Charlotte',
    lastName: 'Perez',
    age: 29,
    email: 'charlotte@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Ethan',
    lastName: 'Turner',
    age: 37,
    email: 'ethan@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Amelia',
    lastName: 'White',
    age: 23,
    email: 'amelia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Alexander',
    lastName: 'Jackson',
    age: 41,
    email: 'alexander@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Sofia',
    lastName: 'Brown',
    age: 33,
    email: 'sofia@example.com',
    isActive: true,
    gender: 'Female',
  },
];

/* 
while for
*/
// const age = 18;
// let counter = 0;

// while (age > 10 && counter < 100) {
//   console.log(age, counter);
//   counter++;
// }

// for (let i = 10, counter = 0; i > 0 && counter < 5000; i++, counter++) {
//   console.log(i);
// }
// ==========================================
// CALLBACK
// ==========================================

/* function father(x) {
  x(15, 14);
}
const myValue = function (q1, q2) {
  console.log(q1 + q2);
};
father(myValue); */

/* function myForeach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

myForeach([1,2,3,4,5]) */

// function logElems(elem) {
//   console.log(elem);
// }
// function logIndex(_,idx) {
//   console.log(idx);
// }
// function logInfo(elem, idx) {
//   console.log(elem, idx);
// }

// const arr = ['Hello', 'World', 'Test', 'Text', 'JS', 'CSS'];

// myForeach(arr, logElems);
// myForeach(arr, logIndex);
// myForeach(arr, logInfo);

// ==========================================
// forEach
// ==========================================
// const arr = ['Hello', 'World', 'Test', 'Text', 'JS', 'CSS'];

// function saveToDatabase(elem, idx) {
//   console.log(`Arr[${idx}]: ${elem}`);
// }

// const result = arr.forEach(saveToDatabase);

// console.log(result);
// log('Hello', 0, arr)
// log('World', 1, arr)
// log('Test', 2, arr)
// log('Text', 3, arr)
// log('JS', 4, arr)
// log('CSS', 5, arr)

// ==========================================
// REDUCE
// ==========================================
// map

// const result = users.reduce((acc, user, idx, arr) => {
//   acc.push(user.firstName);
//   return acc;
// }, []);
// console.log(result);

// filter;

// const result = users.reduce((acc, user) => {
//   if (!user.isActive) {
//     acc.push(user);
//   }
//   return acc;
// }, []);
// console.table(result);

// find
//{} = !true = false

// const user = users.reduce((acc, user) => {
//   if (!acc && user.age === 29) {
//     acc = user;
//   }
//   return acc;
// }, null);

// console.log(user);

/* function myCallback1() {
  console.log('Hello');
}
function myCallback2() {
  console.log('World');
}

setTimeout(myCallback1, 3000);
setTimeout(myCallback2, 5000); */

// some

// const result = users.reduce((acc, user) => {
//   return acc || user.age > 100;
// }, false);

// const res2 = users.some(user => user.age > 100);

// console.log(result);
// every

// ==========================================
// THIS
// ==========================================

/* function foo() {
  console.log(this);
}
foo(); */

/* const user1 = {
  name: 'Yamaha',
  play() {
    console.log(this.name);
  },
};

const user2 = {
  name: 'Roland',
  play() {
    console.log(this.name);
  },
};

function foo() {
  // cons this = user1;
  console.log(this);
}

foo.call(user1); */
// ==========================================
// ARROW
// ==========================================

// const f1 = (x1, x2) => x1 + x2;
// console.log(f1(10, 20));

// const newArr = users
//   .map(user => user.firstName)
//   .filter(name => name.includes('v'))
//   .sort((a, b) => a.length - b.length);

// console.log(newArr);

// ==========================================

/* function hiTechSpecialist(name) {
  function pc(x, y) {
    console.log(name, x + y);
  }

  return pc;
}

const macbook1 = hiTechSpecialist('Volodymyr');
const macbook2 = hiTechSpecialist('Maximus');
const macbook3 = hiTechSpecialist('Timur');
const macbook4 = hiTechSpecialist('Anton');

macbook1(20, 50);
macbook1(50, 30);
macbook1(2, 5);
macbook1(6, 5);

debugger;
macbook3(20, 50);
macbook3(50, 30);
macbook3(2, 5);
macbook3(6, 5); */

// ==========================================

/* function foo() {
  // this = {name:"test"}
  const arrow = () => {
    console.log(this);
  };

  return arrow;
}

const result = foo.call({ name: 'Test' });

result();
result();
result(); */

// ==========================================
// PROTOTYPE

/* const x = 10;
x.toFixed();
x.toLocaleString();
x.toPrecision();
x.toString();
x.toExponential();

const str = '';
str.charCodeAt();
str.concat();

const t = true;
t.valueOf();
t.toString(); */

// console.log(Number);
// console.dir(Number);

// const x = 10;
// x.toString();

// const mySuperNumber = {
//   toString() {
//     console.log('Test');
//   },
// };

// const x1 = {
//   value: 10,
//   __proto__: mySuperNumber,
// };
// const x2 = {
//   value: 10,
//   __proto__: mySuperNumber,
// };
// const x3 = {
//   value: 10,
//   __proto__: mySuperNumber,
// };

// x3.toString();

class MyNumber {
  constructor(x, y) {
    this.q1 = x;
    this.q2 = y;
  }

  toString() {
    console.log('Test');
  }

  showInfo() {
    console.log(this.q1, this.q2);
  }
}

const instance1 = new MyNumber(20, 50);
const instance2 = new MyNumber(10, 20);
const instance3 = new MyNumber(40, 50);

console.log(instance1);
console.log(instance2);
console.log(instance3);

instance1.toString();
// ==========================================

/* 
- while for
- callback
- forEach
- reduce
- this
- arrow / func
- prototype
- class/constructor 
*/
