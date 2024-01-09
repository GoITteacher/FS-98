/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

// container.addEventListener('click', e => {
//   if (e.target.nodeName !== 'BUTTON') return;
//   if (!e.target.classList.contains('box')) return;
//   if (e.target === e.currentTarget) return;
//   console.log(e.target.dataset.color);
// });

/**
 * Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

const container = document.querySelector('.container');
const backdrop = document.querySelector('.js-backdrop');
const modal = document.querySelector('.js-modal');

container.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;
  const color = e.target.parentNode.dataset.color;
  modal.style.backgroundColor = color;
  showModal();
});

backdrop.addEventListener('click', e => {
  if (e.target === e.currentTarget) hideModal();
});

modal.addEventListener('click', e => {
  console.log(e.target.style.backgroundColor);
  e.stopPropagation();
});

function showModal() {
  console.log('SHOW & ADDLISTENERw');
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', onModalClose);
}

function hideModal() {
  console.log('HIDE & REMOVE');
  document.body.classList.remove('show-modal');
  window.removeEventListener('keydown', onModalClose);
}

function onModalClose(e) {
  console.log(e.code);
  if (e.code === 'Escape') {
    hideModal();
  }
}
