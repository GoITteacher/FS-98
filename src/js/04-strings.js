/*
 * Довжина рядка, властивість length
 */

// let str1 = 'hello';
// console.log(str1.length);

// str1 += 'a1234.awdworld'; // hello world
// console.log(str1.length);

/*
 * Конкатенація рядків
 */

// const str1 = 'hello';
// const str2 = 'world';

// const result = str1 + ' ' + str2;

// console.log(result);
/*
 * Напиши скрипт який виведе рядок у форматі:
 * «Hello UserName»,
 */

// const firstName = prompt('Enter your firstName');
// const lastName = prompt('Enter your lastName');

// const message = 'Hello ' + firstName + ' ' + lastName;
// console.log(message);

/*
 * Шаблонні рядки (template strings)
 * Повертаємося до складання рядка поселення в готель
 */

// const firstName = prompt('Enter your firstName');
// const lastName = prompt('Enter your lastName');

// const message = `Hello ${firstName} ${lastName}!!!`;
// console.log(message);

/*
 * Нормалізація з методом toLowerCase()
 */

// let str = 'hello';
// str = str.toLowerCase();
// str = str.toUpperCase();
// console.log(str);

/*
 * Пошук у рядку з методом includes()
 */

// const message = 'Hello world';

// const result = message.includes('Hec');
// console.log(result);

// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'розпродаж';

// const string1 = 'Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!';
// const string2 = 'Найбільша РОЗПРОДАЖ цього тижня, не пропустіть!';
// const string3 = 'Рекламна кампанія #fatlivesmatter';

// console.log(string1.toLowerCase().includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));
