/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// ====================================
/* const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isActive = Math.random() > 0.5;
    if (isActive) {
      resolve('Смачного');
    } else {
      reject('Sorry');
    }
  }, 400);
}); */

// ==================================
/* promise.then(onFullFiled).catch(onRejected);

function onFullFiled(result) {
  console.log(result, 'Ням ням ням');
}

function onRejected(result) {
  console.log(result, 'Ехххх(((');
} */

// ==================================

/* const promise = new Promise((resolve, reject) => {
  console.log('Запит на сервер...');
  console.log('Start loader...');
  setTimeout(() => {
    const isActive = Math.random() > 0.5;

    if (isActive) {
      resolve(true);
    } else {
      reject();
    }
  }, 3000);
});

promise
  .then(() => {
    console.log('Render books');
  })
  .catch(() => {
    console.log('Error');
  })
  .finally(() => {
    console.log('Stop loader...');
  }); */

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

/* const promise = new Promise((resolve, reject) => {
  console.log('Запит на сервер...');
  console.log('Start loader...');
  setTimeout(() => {
    const isActive = Math.random() > 1;

    if (isActive) {
      resolve(10);
    } else {
      reject('hello');
    }
  }, 3000);
});

promise
  .then(users => {
    const markup = users.map(() => {}).join();
    return markup;
  })
  .catch(() => {
    return ``;
  });
 */
