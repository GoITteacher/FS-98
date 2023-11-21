/**
 * Методи масиву
 *
 * - join
 * - split
 * - slice
 * - concat
 * - indexOf
 * - push/pop
 */

// const courses = ['10', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// const result = courses.join(' ');
// console.log(result);

//

// const str = 'Hello world it`s test line with some words';
// const arr = str.split(' ');
// console.log(arr);

// ===================================

// const arr = [3, 1, 3, 6, 7, 2, 5, 8, 9, 3, 2, 1, 4, 6, 8, 9];
// const result = arr.slice(-5);
// console.log(result);

// ===============================

// concat

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const result = [].concat(arr1, arr2, arr3);
// console.log(result);

// =============================

// indexOf

// const arr = [1, 4, 6, 2, 4, 7, '89', 2, 1, 3, 6];

// const result1 = arr.indexOf(1);
// const result2 = arr.lastIndexOf(1);
// const result3 = arr.lastIndexOf('89'); // -1

// console.log(result1);
// console.log(result2);
// console.log(result3);

// =================================

// const arr = [];

// const newLength = arr.push(10, 351, 5, 2, 4);

// console.log(newLength);

// const lastElem = arr.pop();

// console.log(lastElem, arr);

// =================================

// shift unshift
// const arr = ['test1', 'test2', 'test3'];
// arr.shift();
// arr.shift();
// arr.unshift(10);
// console.log(arr);

// =================================

// splice

// const arr = [1, 3, 5, 6, 2, 4, 6, 3];

// arr.slice(0, 5);
// const removedElements = arr.splice(4, 3, 'START', 'START', 'START');
// console.log(removedElements);

// ============

// const arr1 = [1, 2, 4, 5];
// const arr2 = [4, 2, 1, 3];
// const arr3 = (arr1 + arr2).split(',');
// console.log(arr3);

[].splice();
