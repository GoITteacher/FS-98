/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

/* function calculateHousePerimeter({ width, height }) {
  const perimeter = width * 2 + height * 2;
  return perimeter;
}

const houseInfo = {
  width: 10,
  height: 15,
};

const perimeter = calculateHousePerimeter(houseInfo);
console.log(`Периметр будинку: ${perimeter}`); */

// ==================

// let arr = [1, 2, 3, 5, 6, 2, 1, 3, 5, 7, 7];

// arr = _.drop(arr, 3);

// console.log(arr);

// ==================================

/* let counter = 0;

function onMouseMove(e) {
  counter++;
  console.log(counter);
}
const copy = _.throttle(onMouseMove, 3000);

document.addEventListener('mousemove', copy); */

// ==================================

document.addEventListener('mousemove', _.debounce(onMouseMove, 1000));

function onMouseMove(e) {
  console.log('Hello');
}
