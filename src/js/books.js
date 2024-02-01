import { BookAPI } from './modules/booksAPI';

// ===================================================

const refs = {
  createFormElem: document.querySelector('.js-create-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  deleteFormElem: document.querySelector('.js-delete-form'),
  bookListElem: document.querySelector('.js-article-list'),
};
const booksApi = new BookAPI();

// ===================================================

refs.createFormElem.addEventListener('submit', onCreateBook);
refs.updateFormElem.addEventListener('submit', onUpdateBook);
refs.resetFormElem.addEventListener('submit', onResetBook);
refs.deleteFormElem.addEventListener('submit', onDeleteBook);

// ===================================================

function onCreateBook(e) {
  e.preventDefault();

  const book = {
    title: e.target.elements.bookTitle.value,
    author: e.target.elements.bookAuthor.value,
    desc: e.target.elements.bookDesc.value,
  };

  booksApi.createBook(book).then(createdBook => {
    const markup = bookTemplate(createdBook);
    refs.bookListElem.insertAdjacentHTML('afterbegin', markup);
  });

  e.target.reset();
}

function onUpdateBook(e) {
  e.preventDefault();

  const book = {
    id: e.target.elements.bookId.value,
    title: e.target.elements.bookTitle.value || undefined,
    author: e.target.elements.bookAuthor.value || undefined,
    desc: e.target.elements.bookDesc.value || undefined,
  };

  booksApi.updateBook(book).then(updatedBook => {
    const oldBook = document.querySelector(`[data-id="${book.id}"]`);
    oldBook.insertAdjacentHTML('afterend', bookTemplate(updatedBook));
    oldBook.remove();
  });

  e.target.reset();
}

function onResetBook(e) {
  e.preventDefault();

  const book = {
    id: e.target.elements.bookId.value,
    title: e.target.elements.bookTitle.value,
    author: e.target.elements.bookAuthor.value,
    desc: e.target.elements.bookDesc.value,
  };

  booksApi.resetBook(book).then(updatedBook => {
    const oldBook = document.querySelector(`[data-id="${book.id}"]`);
    oldBook.insertAdjacentHTML('afterend', bookTemplate(updatedBook));
    oldBook.remove();
  });
  e.target.reset();
}

function onDeleteBook(e) {
  e.preventDefault();
  const id = e.target.elements.bookId.value;

  booksApi.deleteBook(id).then(() => {
    const oldBook = document.querySelector(`[data-id="${id}"]`);
    oldBook.remove();
  });

  e.target.reset();
}

// ===================================================

function bookTemplate({ id, title, author, desc }) {
  return `<li class="card book-item" data-id="${id}">
  <h3>${id} - ${title}</h3>
  <p>${desc}</p>
  <p>${author}</p>
</li>`;
}

function booksTemplate(books) {
  return books.map(bookTemplate).join('');
}

function renderBooks(books) {
  const markup = booksTemplate(books);
  refs.bookListElem.innerHTML = markup;
}

// ===================================================

booksApi.getBooks().then(renderBooks);
