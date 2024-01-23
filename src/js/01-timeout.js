/*
 * Метод window.setTimeout(callback, delay, args)
 */

/* for (let i = 1; i <= 3; i++) {
  setTimeout(test, i * 1000, i);
}

function test(i) {
  console.log(i);
} */

/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */

const id = setTimeout(() => {
  console.log('Test');
}, 1000);

clearTimeout(id);

/**
 * Можливість передати параметри для колбеку
 */
