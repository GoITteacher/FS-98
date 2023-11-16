/**
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 *  змінної link символом /. Якщо ні, додай до кінця
 *  значення link цей символ.
 * Використовуй конструкцію if...else.
 */

// let link = 'https://my-site.com/about';
// const isCorrectLink = link.endsWith('/');

// if (!isCorrectLink) {
//   link += '/END';
// }

// console.log(link);

/**
 * Форматування посилання (includes та логічне «І»)
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

let url = 'https://my-site.com/about';

const isCorrectEnd = url.endsWith('/');
const hasMySite = url.includes('my-site');

if (!isCorrectEnd && hasMySite) {
  url += '/';
}

console.log(url);

/*
 * Пошук у рядку методом includes()
 */

// const blacklistedWord1 = 'spam';
// const blacklistedWord2 = 'sale';

// const string1 =
//   "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
// const string2 = "Biggest SALE this week, don't miss out!";
// const string3 = '#fatlivesmatter advertising campaign';

// string1.toLowerCase().includes(blacklistedWord1) ||
// string1.toLowerCase().includes(blacklistedWord2);
