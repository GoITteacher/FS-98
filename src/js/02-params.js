/**
 * Деструктуризація об'єкта в параметрах функції
 */

/* const user = {
  username: 'Jacob name',
  age: 10,
  city: 'Dnipro',
};

function showUserProps({ name, age }) {
  console.log(username, age, city, test);
}

showUserProps(user); */

// ==========

/* const arr = [
  { title: 'item1', price: '0000' },
  { title: 'item1', price: '0000' },
  { title: 'item2', price: '0000' },
  { title: 'item3', price: '0000' },
  { title: 'item4', price: '0000' },
  { title: 'item5', price: '0000' },
  { title: 'item6', price: '0000' },
];

const markup = arr.map(({ title, price }) => {
  return `Title: ${title}, price: ${price}`;
});

console.log(markup);
 */

// ========================================

/* const obj = {
  x1: '12',
  x2: '123',
  x3: '345',
};

const { x1, x2, x3, x4 = 0, test: x5 = 0 } = obj;
console.log(x1, x2, x3, x4, x5); */

// ========================================

/* function foo({ fontSize = '0px', display, border }) {
  // console.log(fontSize, display, border);
}

const options = {
  display: 'flex',
  fontSize: '24px',
  border: '1px solid black',
  color: 'black',
};

foo(options); */

/* function foo({
  fontSize = '26px',
  backgroundColor = 'silver',
  border = '1px solid black',
  display = 'block',
}) {
  console.log(fontSize);
  console.log(backgroundColor);
  console.log(border);
  console.log(display);
} */

// ========================================

/* const book = {
  id: 'sefsefsef',
  title: 'Book Title',
  price: 200,
  author: 'Volodka',
  description: '.....',
};

function saveBook({ id, ...myBook }) {
  console.log(id);
  console.log(myBook);
}

saveBook(book); */

/* const { id, price, author, test, t1, t2, t3, ...myBook } = book;

console.log(myBook); */

// ===================
/* 
const arr = [10, 20, 30, 40, 50, 60, 70];

const [x1, , x3, ...test] = arr;

console.log(test); 
*/
