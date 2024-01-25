/* function createPromise(delay, value, isActive) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });

  return promise;
} */

/* const promise1 = createPromise(1000, 'Смачного', true);
const promise2 = createPromise(3000, 'Sorry', false);

promise1
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.log(error);
  });

promise2
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.log(error);
  }); */

/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

/* function generateArr() {
  const len = 10;
  const arr = [];

  for (let i = 0; i < len; i++) {
    arr.push(Math.round(Math.random() * 100));
  }

  return Promise.reject(arr);
}

const arr1 = generateArr();

console.log(arr1); */

// ===========================

/* function createPromise(delay, value, isActive) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });

  return promise;
}

const p1 = createPromise(1000, 80, true);

p1.then(x => {
  if (x < 70) {
    console.log('Ok');
  } else {
    return Promise.reject('Error');
  }
}); */

// ===========================

// function createPromise(delay, value, isActive) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isActive) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });

//   return promise;
// }

// const p1 = createPromise(4000, 'p1', true);
// const p2 = createPromise(3000, 'p2', false);
// const p3 = createPromise(1000, 'p3', false);
// const p4 = createPromise(500, 'p4', true);

// const arr = [p1, p2, p3, p4];

/* Promise.all(arr)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  }); */

/* Promise.allSettled(arr).then(result => {
  console.log(result);
}); */

/* Promise.race(arr).then(result => {
  console.log(result);
}); */
