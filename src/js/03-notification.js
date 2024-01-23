/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

const notification = document.querySelector('.js-alert');
let timeoutId = null;

setTimeout(() => {
  showNotification();
  timeoutId = setTimeout(hideNotification, 5000);
}, 2000);

notification.addEventListener('click', () => {
  clearTimeout(timeoutId);
  hideNotification();
});

function showNotification() {
  console.log('show');
  notification.classList.add('is-visible');
}

function hideNotification() {
  console.log('hide');
  notification.classList.remove('is-visible');
}
