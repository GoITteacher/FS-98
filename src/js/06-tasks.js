/*
 * Напиши скрипт перевірки підписки користувача придоступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

function foo1(sub) {
  if (sub === 'free') {
    return '-';
  } else {
    return '+';
  }
}

function foo2(sub) {
  if (sub === 'pro' || sub === 'vip') {
    return '+';
  } else {
    return '-';
  }
}

function foo3(sub) {
  return sub === 'free' ? '-' : '+';
}

function checkAccess(subType) {
  return subType == 'pro' || subType == 'vip';
}

/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// function canOpenChat(isOnline, isFriend, isDnd) {
//   return isOnline && isFriend && !isDnd; // true
// }

// console.log('Can Open Chat? ', canOpenChat(isOnline, isFriend, isDnd));

// =================

/* Функція calculateTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6. */

/* Функція calculateTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6. */

// let end = 100;
// let total;

// while (end >= 1) {
//   total += end;
//   end -= 1;
// }

// console.log(total);
