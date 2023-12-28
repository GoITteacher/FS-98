/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */

const userName1 = document.querySelector('.js-user-name1');
const userName2 = document.querySelector('.js-user-name2');
const userName3 = document.querySelector('.js-user-name3');

// const userText = document.querySelector('.js-text');

// userName.addEventListener('input', () => {
//   const name = userName.value;
//   userText.innerHTML = `Hello ${name}`;
// });

/* 
userName.addEventListener('focus', () => {
  console.log('focus');
});

userName.addEventListener('blur', () => {
  console.log('blur');
});

userName.addEventListener('change', () => {
  console.log('CHANGE');
}); */

/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */

// userName.addEventListener('blur', onInputBlur);
// userName.addEventListener('focus', onInputFocus);

// function onInputFocus() {
//   userName.classList.remove('valid', 'invalid');
// }

userName1.addEventListener('blur', onInputBlur);
userName2.addEventListener('blur', onInputBlur);
userName3.addEventListener('blur', onInputBlur);

function onInputBlur(e) {
  const name = userName1.value;
  if (name.length > 6) {
    e.target.classList.add('valid');
  } else {
    e.target.classList.add('invalid');
  }
}
