import { BooksApi } from './modules/booksAPI';

const refs = {
  createFormElem: document.querySelector('.js-create-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  deleteFormElem: document.querySelector('.js-delete-form'),
  bookListElem: document.querySelector('.js-article-list'),
};

const booksApi = new BooksApi();
// =============================================

refs.createFormElem.addEventListener('submit', onBookCreate);
refs.updateFormElem.addEventListener('submit', onBookUpdate);
refs.resetFormElem.addEventListener('submit', onBookReset);
refs.deleteFormElem.addEventListener('submit', onBookDelete);
refs.bookListElem.addEventListener('click', onBookClick);
refs.bookListElem.addEventListener('click', onBookDeleteClick);

async function onBookCreate(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const book = {};

  formData.forEach((value, key) => {
    key = key.toLowerCase().slice(4);
    book[key] = value;
  });

  const newBook = await booksApi.createBook(book);
  const markup = bookTemplate(newBook);
  refs.bookListElem.insertAdjacentHTML('afterbegin', markup);

  e.target.reset();
}
async function onBookUpdate(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const book = {};

  formData.forEach((value, key) => {
    key = key.toLowerCase().slice(4);
    if (value) book[key] = value;
  });

  const updatedBook = await booksApi.updateBook(book);
  const oldElem = document.querySelector(`[data-id="${book.id}"]`);
  const markup = bookTemplate(updatedBook);
  oldElem.insertAdjacentHTML('afterend', markup);
  oldElem.remove();

  e.target.reset();
}

async function onBookReset(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const book = {};

  formData.forEach((value, key) => {
    key = key.toLowerCase().slice(4);
    book[key] = value;
  });

  const updatedBook = await booksApi.resetBook(book);
  const oldElem = document.querySelector(`[data-id="${book.id}"]`);
  const markup = bookTemplate(updatedBook);
  oldElem.insertAdjacentHTML('afterend', markup);
  oldElem.remove();

  e.target.reset();
}
async function onBookDelete(e) {
  e.preventDefault();
  const id = e.target.elements.bookId.value;

  await booksApi.deleteBook(id);
  const oldBookElem = document.querySelector(`[data-id="${id}"]`);
  oldBookElem.remove();

  e.target.reset();
}
function onBookClick(e) {
  if (e.target === e.currentTarget) return;
  const liElem = e.target.closest('li');
  const id = liElem.dataset.id;

  refs.updateFormElem.elements.bookId.value = id;
  refs.resetFormElem.elements.bookId.value = id;
  refs.deleteFormElem.elements.bookId.value = id;

  if (e.shiftKey) {
    booksApi.deleteBook(id);
    liElem.remove();
  }
}
function onBookDeleteClick(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  const liElem = e.target.closest('li');
  const id = liElem.dataset.id;

  booksApi.deleteBook(id);
  liElem.remove();
}

// =============================================
function bookTemplate({ id, title, author, desc }) {
  return `<li class="card book-item" data-id="${id}">
  <h4>${id} - ${title}</h4>
  <p>${desc}</p>
  <p>${author}</p>
  <button>delete</button>
</li>`;
}

function booksTemplate(books) {
  return books.map(bookTemplate).join('');
}

function renderBooks(books) {
  const markup = booksTemplate(books.reverse());
  refs.bookListElem.innerHTML = markup;
}

booksApi.getBooks().then(renderBooks).catch(onError);

function onError(err) {
  console.log(err.message);
  switch (err.message) {
    case '404':
      console.log('Ahahahaha');
      break;
    case '401':
      console.log('Your Password - 123123');
      break;
    default:
      console.log('Я такого не знаю');
  }
}
