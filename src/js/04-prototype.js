/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей с hasOwnProperty()
 * - Ланцюжки прототипів
 */

// const Lviv = {
//   y1: 10,
//   y2: 20,
// };

// const Kyiv = {
//   x1: 10,
//   x2: 20,
//   __proto__: Lviv,
// };

// const Dnipro = {
//   q1: 40,
//   q2: 50,
//   y1: 100,
//   __proto__: Kyiv,
// };

// for (const key in Dnipro) {
//   if (Dnipro.hasOwnProperty(key)) {
//     console.log(Dnipro[key]);
//   }
// }

// Dnipro.hasOwnProperty('x1');

// ===================================

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//   }
// }

/**
 * ----------------------------------------
 */
/* const objC = { c: 'objC prop' };

const objB = Object.create(objC);
objB.b = 'objB prop';

const objA = Object.create(objB);
objA.a = 'objA prop';

console.log(objA);
console.log(objB);
console.log(objC);

console.log(objA.hasOwnProperty('a'));
console.log(objA.a);

console.log(objA.hasOwnProperty('b'));
console.log(objA.b);

console.log(objA.hasOwnProperty('c'));
console.log(objA.c);

console.log(objA.hasOwnProperty('x'));
console.log(objA.x);
 */

// function user(name, age) {
//   this.name = name;
//   this.age = age;
//   return this;
// }
// const user1 = user.call({}, 'Mila', 25);
// const user2 = user.call({}, 'Tamila', 26);
// const user3 = user.call({}, 'Tamila', 26);
// const user4 = user.call({}, 'Tamila', 26);
// const user5 = user.call({}, 'Tamila', 26);

// console.log(user1);
// console.log(user2);

// ============================================

// Замикання - це можливість функції зберегти навколишнє середовище

// function foo(name) {
//   const key = 20;

//   function sum(x, y) {
//     console.log(key, name, x + y);
//   }

//   return sum;
// }

// const calc1 = foo('Volodka');
// const calc2 = foo('Hi xao');

// calc1(10, 20);
// calc1(30, 10);
// calc1(30, 10);
// calc1(30, 10);
// calc1(30, 10);

// calc2(30, 40);
// calc2(50, 40);
// calc2(70, 40);
// calc2(90, 40);
