/**
 * Подія сlick
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */

/* const clickMe = document.querySelector('.js-click');
const box = document.querySelector('.js-box');

clickMe.addEventListener('click', onButtonClick);
box.addEventListener('click', onBoxClick); */
/*
function onButtonClick() {
  boxTop += 10;
  boxLeft += 10;
  box.style.top = `${boxTop}px`;
  box.style.left = `${boxLeft}px`;
}

function onBoxClick() {
  boxTop -= 10;
  boxLeft -= 10;
  box.style.top = `${boxTop}px`;
  box.style.left = `${boxLeft}px`;
} */

// handleElemEvent
// elemEventHandler
// onElemEvent

// =============================

const testBtn = document.querySelector('.js-click');
const addBtn = document.querySelector('.js-add');
const removeBtn = document.querySelector('.js-remove');

addBtn.addEventListener('click', () => {
  console.log('Add');
  testBtn.addEventListener('click', onTestBtnClick);
});

removeBtn.addEventListener('click', () => {
  console.log('remove');
  testBtn.removeEventListener('click', onTestBtnClick);
});

function onTestBtnClick() {
  console.log('Test');
}
