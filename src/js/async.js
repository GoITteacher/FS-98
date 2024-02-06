/* async function foo() {
  console.log('start');

  const promise1 = await fetch('http://localhost:3000/books');
  const promise2 = await fetch('http://localhost:3000/books');
  const promise3 = await fetch('http://localhost:3000/books');
  const promise4 = await fetch('http://localhost:3000/books');

  console.log(promise1, promise2, promise3, promise4);

  console.log('end');
}

foo(); */

/* async function myFoo() {
  const p1 = await Promise.resolve(100);
  console.log(p1);
}
myFoo(); */

/* async function foo() {
  const url = 'http://localhost:3000/books';
  const p1 = fetch(url);

  try {
    const data = await p1;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
} */

// ========================

/* async function f1() {
  const url = 'http://localhost:3000/books';

  const p1 = fetch(url);
  const p2 = fetch(url);
  const p3 = fetch(url);
  const p4 = fetch(url);
  const p5 = fetch(url);

  const promises = [p1, p2, p3, p4, p5];

  const result = await Promise.allSettled(promises);

  console.log(result);
}

f1(); */

// ========================

/* async function foo() {}
const foo = async () => {};

const obj = {
  async showName() {},
};
[].forEach(async () => {}); */

// =====================

async function foo() {
  const promise = axios.get('');
  const data = await promise;
  console.log(data);
}
