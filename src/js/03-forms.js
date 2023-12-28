/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const form = document.querySelector('.js-form');
const btnElem = document.querySelector('.js-show-users');

form.addEventListener('submit', onFormSubmit);

const users = [];

function onFormSubmit(event) {
  event.preventDefault();
  console.log(form.elements);
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const comment = form.elements.comment.value;

  const userData = {
    email,
    password,
    comment,
  };

  users.push(userData);

  form.reset();
}

btnElem.addEventListener('click', obBtnClick);

function obBtnClick(event) {
  console.log(users);
}
