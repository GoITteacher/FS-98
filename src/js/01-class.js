/**
 * Классы
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

/* class User {
  constructor(name, age, isStudent) {
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;
    this.balance = 0;
    this.test = () => {};
  }

  showInfo() {
    console.log(this.name, this.age);
  }

  showName() {
    console.log(this.name);
  }
}

const user1 = new User('Max', 23, false);
const user2 = new User('Alina', 19, true);
const user3 = new User('Yaroslav', 20, true);

console.log(user1);
user1.showInfo();
user2.showInfo();
user3.showInfo();
user2.showName();
 */

// ===================================

// class Tesla {
//   #maxSpeed = 300;

//   constructor(model, year, price, color) {
//     this.model = model;
//     this.year = year;
//     this.price = price;
//     this.color = color;
//     this.make = 'Tesla';
//   }

//   showMaxSpeed() {
//     console.log(this.#maxSpeed);
//   }
// }

// const car1 = new Tesla('S', 2021, 35000, 'black');

// console.log(car1);

// =================

/* class User {
  #age = 1;
  #isStudent = false;

  constructor(name, age) {
    this.name = name;

    if (age > 0 && age <= 100) {
      this.#age = age;
    }
  }

  get age() {
    return this.#age;
  }

  set age(newValue) {
    if (newValue > this.#age && newValue <= 100) {
      this.#age = newValue;
    }
  }

  get isStudent() {
    return 'Student - ', this.#isStudent;
  }
  set isStudent(value) {
    this.#isStudent = value;
  }
}

const user1 = new User('Toma', 20);

console.log(user1.isStudent);

user1.age = 123; */

// =============================

class MyCalc {
  static counter = 0;

  constructor(x, y) {
    this.x = x;
    this.y = y;
    MyCalc.counter += 1;
  }

  sum() {
    return this.x + this.y;
  }

  subtract() {
    return this.x - this.y;
  }

  divide() {
    return this.x / this.y;
  }

  multiply() {
    return this.x * this.y;
  }

  test() {
    MyCalc.foo();
    return (this.x + this.y) * MyCalc.PI;
  }

  static foo() {}
}

MyCalc.subtract();

// const calc1 = new MyCalc(10, 20);
// const calc2 = new MyCalc(30, 50);
// const calc3 = new MyCalc(5, 5);
// const calc4 = new MyCalc(7, 2);
// const calc5 = new MyCalc(7, 2);
// const calc6 = new MyCalc(7, 2);
// const calc7 = new MyCalc(7, 2);
// const calc8 = new MyCalc(7, 2);
// console.dir(MyCalc.counter);
