export class BooksApi {
  constructor() {
    this.BASE_URL = 'http://localhost:3000';
    this.END_POINT = '/books';
  }

  getBooks() {
    const url = this.BASE_URL + this.END_POINT;

    return fetch(url).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        const myError = new Error(`${res.status}`);
        throw myError;
      }
    });
  }
  createBook(book) {
    const url = this.BASE_URL + this.END_POINT;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(url, options).then(res => res.json());
  }
  updateBook({ id, ...book }) {
    const url = `${this.BASE_URL}${this.END_POINT}/${id}`;

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(url, options).then(res => res.json());
  }
  resetBook({ id, ...book }) {
    const url = `${this.BASE_URL}${this.END_POINT}/${id}`;

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(url, options).then(res => res.json());
  }
  deleteBook(id) {
    const url = `${this.BASE_URL}${this.END_POINT}/${id}`;

    const options = {
      method: 'DELETE',
    };

    return fetch(url, options).then(res => res.json());
  }
}
