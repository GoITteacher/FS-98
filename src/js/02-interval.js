/*
 * Метод setInterval(callback, delay, args)
 */

// const id = setInterval(() => {
//   console.log('Hello');
// }, 1000);

/*
 * Очищення інтервалу за допомогою clearInterval(intervalId)
 */

const id = setInterval(() => {
  console.log('Hello');
}, 1000);

setTimeout(() => {
  clearInterval(id);
}, 5000);

//===============

/* const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');

let intervalId = null; //7

startBtn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    console.log(`Interval ID: intervalId, ${Math.random()}`);
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  console.log(`Interval with id ${intervalId} has stopped!`);
});
 */
