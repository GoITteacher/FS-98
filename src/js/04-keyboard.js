/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */
const box = document.querySelector('.js-box');
let boxLeft = 0;
let boxTop = 0;

/* document.addEventListener('keydown', e => {
  console.log('keydown', e.code);

  //   switch (e.code) {
  //     case 'KeyW':
  //       boxTop -= 10;
  //       break;
  //     case 'KeyS':
  //       boxTop += 10;
  //       break;
  //     case 'KeyA':
  //       if (boxLeft > 0) boxLeft -= 10;
  //       break;
  //     case 'KeyD':
  //       if (boxLeft < 1000) boxLeft += 10;
  //       break;
  //   }

  //   box.style.left = boxLeft + 'px';
  //   box.style.top = boxTop + 'px';
}); */

/* document.addEventListener('keypress', e => {
  console.log('keypress', e.code);
}); */

// document.addEventListener('keypress', e => {
//   console.log(e.code);
//   if (e.ctrlKey && e.code === 'KeyQ') {
//     box.classList.toggle('valid');
//   }
// });

document.addEventListener('keydown', e => {
  console.log('keydown', e.code);
});

document.addEventListener('keyup', e => {
  console.log('keyup', e.code);
});

/**
 * Обробка комбінацій клавіш
 */
