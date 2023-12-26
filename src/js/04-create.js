/*
 * Створення та додавання елементів
 */
const arr = [];

for (let i = 0; i < 10; i++) {
  const myElem = document.createElement('h1');
  myElem.textContent = i;
  myElem.classList.add('bold');
  myElem.style.color = 'tomato';
  arr.push(myElem);
}

const boxElem = document.querySelector('.js-hero');
boxElem.append(...arr);

/*
 * Створюємо заголовок
 */
const titleEl = document.createElement('h1');

/*
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
/* const imageEl = document.createElement('img');

imageEl.setAttribute(
  'src',
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg',
);

imageEl.style.width = '150px';
imageEl.style.height = '300px';
boxElem.prepend(imageEl);

const heroEl = document.querySelector('.hero');
 */
/*
 * Створюємо та додаємо новий пункт меню
 */
const navItemEl = document.createElement('li');

const images = [
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg',
];

const result = images.map(url => {
  const elem = document.createElement('img');
  elem.setAttribute('src', url);
  elem.style.width = '200px';
  return elem;
});

boxElem.append(...result);
