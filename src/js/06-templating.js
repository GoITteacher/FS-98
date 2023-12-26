/*
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

const friendListElem = document.querySelector('.js-list');
const friends = ['Vlad', 'Artem', 'Max', 'Roman', 'Lika'];

function friendTemplate(friend) {
  return `<li class="friend-item">${friend}</li>`;
}

function renderFriends() {
  const markup = friends.map(friendTemplate).join('');
  friendListElem.insertAdjacentHTML('beforeend', markup);
}

renderFriends();
