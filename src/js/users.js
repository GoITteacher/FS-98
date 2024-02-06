// ===================================================
import { UsersAPI } from './modules/usersAPI';
const refs = {
  userListElem: document.querySelector('.js-user-list'),
  createUserForm: document.querySelector('.js-create-form'),
  updateUserForm: document.querySelector('.js-update-form'),
  resetUserForm: document.querySelector('.js-reset-form'),
  deleteUserForm: document.querySelector('.js-delete-form'),
};
const usersAPI = new UsersAPI();
// ============================================================

refs.createUserForm.addEventListener('submit', onUserCreate);
refs.updateUserForm.addEventListener('submit', onUserUpdate);
refs.resetUserForm.addEventListener('submit', onUserReset);
refs.deleteUserForm.addEventListener('submit', onUserDelete);

async function onUserCreate(e) {
  e.preventDefault();

  const { userName, userPhone, userEmail } = e.target.elements;

  const data = {
    email: userEmail.value,
    phone: userPhone.value,
    name: userName.value,
  };

  const newUser = await usersAPI.createUser(data);
  const markup = userTemplate(newUser);
  refs.userListElem.insertAdjacentHTML('beforeend', markup);
  e.target.reset();
}
async function onUserUpdate(e) {
  e.preventDefault();

  const { userName, userPhone, userEmail, userId } = e.target.elements;

  const data = {
    email: userEmail.value,
    phone: userPhone.value,
    name: userName.value,
    id: userId.value,
  };

  const newUser = await usersAPI.updateUser(data);
  const previousUser = document.querySelector(`[data-id="${data.id}"]`);
  const markup = userTemplate(newUser);
  previousUser.insertAdjacentHTML('afterend', markup);
  previousUser.remove();
  e.target.reset();
}
async function onUserReset(e) {
  e.preventDefault();

  const { userName, userPhone, userEmail, userId } = e.target.elements;

  const data = {
    email: userEmail.value,
    phone: userPhone.value,
    name: userName.value,
    id: userId.value,
  };

  const newUser = await usersAPI.updateUser(data);
  const previousUser = document.querySelector(`[data-id="${data.id}"]`);
  const markup = userTemplate(newUser);
  previousUser.insertAdjacentHTML('afterend', markup);
  previousUser.remove();
  e.target.reset();
}
async function onUserDelete(e) {
  e.preventDefault();
  const { userId } = e.target.elements;
  const id = userId.value;
  await usersAPI.deleteUser(id);
  const previousUser = document.querySelector(`[data-id="${id}"]`);
  previousUser.remove();
  e.target.reset();
}

// ============================================================

function userTemplate({ id, name, email, phone }) {
  return `<li class="card user-item" data-id="${id}">
  <img
    src="https://source.unsplash.com/500x500/?random=${id}&portret,man,woman"
    alt="#"
    class="user-avatar"
  />
  <h3>${name}</h3>
  <p>${email}</p>
  <p>${phone}</p>
</li>`;
}

function usersTemplate(users) {
  return users.map(userTemplate).join('');
}

function renderUsers(users) {
  const markup = usersTemplate(users);
  refs.userListElem.innerHTML = markup;
}
// ============================================================

async function initPage() {
  const data = await usersAPI.getUsers();
  renderUsers(data);
}

initPage();
// ============================================================
