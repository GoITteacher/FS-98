// 'use strict';
/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

/**
 * Глобальний контекст
 */

// function foo() {
//   console.log(this);
// }

// foo();// window || undefined

/**
 * Контекст методу об'єкта
 */

// const obj1 = {
//   name: 'Vasya',
//   showInfo() {
//     console.log(this);
//   },
// };

// const obj2 = {
//   name: 'Petya',
//   showInfo() {
//     console.log(this);
//   },
// };

// obj2.showInfo();

// function showInfo() {
//   console.log(this);
// }

// const obj1 = {
//   name: 'Vasya',
//   test: showInfo,
// };

// const obj2 = {
//   name: 'Petya',
//   test: showInfo,
// };

// obj2.test();

// function foo() {
//   console.log(this);
// }

// const obj1 = {
//   name: 'Vasya',
//   test1: foo,
// };
// const obj2 = {
//   name: 'Petya',
//   test2: obj1.test1,
// };
// const obj3 = {
//   name: 'Kolya',
//   test3: obj2.test2,
// };

// obj3.test3();

/**
 * Контекст методу об'єкта, але оголошено як зовнішню функцію.
 */
// function foo(){
// }

// const obj = {
//   test: foo
// }

// obj.test();
/**
 * Виклик без контексту, але оголошено як метод об'єкта.
 */

// const obj = {
//   showInfo() {
//     console.log(this);
//   },
// };

// const foo = obj.showInfo;

// foo();

/**
 * Контекст у callback-функціях
 */

// function foo1(callback) {
//   const obj1 = {
//     name: 'OBJ1',
//     test: callback,
//   };

//   obj1.test();
// }

// function foo2() {
//   console.log(this);
// }

// foo1(foo2);

// ==========

// function tesla() {
//   // let this = window;
//   console.log(this);
// }

// const obj1 = {
//   name: 'Obj1',
//   drive: tesla,
// };
// const obj2 = {
//   name: 'Obj2',
//   drive: tesla,
// };
// const obj3 = {
//   name: 'Obj3',
//   drive: tesla,
// };
// const obj4 = {
//   name: 'Obj4',
//   drive: tesla,
// };

// drive();

// ==========================

// function foo() {
//   console.log(this);
// }

// foo();

// ============================
// ЗАМИКАННЯ

function foo1() {
  const test = () => {
    console.log(this);
  };

  test();
}

const obj1 = {
  name: 'Vasya',
  showInfo: foo1,
};

// obj1.showInfo();

// ===================================

// Для визначення контексту
/* 

1. Визначаємо тип функції (стрілчата або звичайна)
- якщо стрілчата - то дивимось момент створення контекст бат. функції
- якщо звичайна - дивимось момент виклику
*/

// function foo() {
//   const arrow = () => {
//     console.log(this);
//   };

//   arrow();
// }

// const obj = {
//   name: 'Petya',
//   test: foo,
// };

// obj.test();

// ==========

// const arr = () => {
//   console.log(this);
// };

// arr();

//====================

function foo1() {
  console.log(this);
}

const foo2 = foo1;

const foo3 = foo2;

const foo4 = foo3;

foo4();
