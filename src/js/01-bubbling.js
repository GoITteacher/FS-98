/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const innerChild = document.querySelector('#inner-child');

parent.addEventListener('mouseEnter', e => {
  console.log(e.currentTarget);
  console.log(e.target);
});

child.addEventListener('click', e => {
  console.log(e.currentTarget);
  console.log(e.target);
});

innerChild.addEventListener('click', e => {
  console.log('Гоп-стоп 1');
});

innerChild.addEventListener('click', e => {
  console.log('Гоп-стоп 2');
  e.stopImmediatePropagation();
});

innerChild.addEventListener('click', e => {
  console.log('Гоп-стоп 3');
});
