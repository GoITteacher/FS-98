// function foo() {
//   console.log('foo -> this', this);
// }

// foo(); // Який this???

//wind - undefined

/**
 * -------------------------
 */

// const book = {
//   title: 'React for beginners',
//   showThis() {
//     console.log('showThis -> this', this);
//   },
//   showTitle() {
//     console.log('showTitle -> this.title', this.title);
//   },
// };

// book.showThis(); // Який this???

// const outerShowThis = book.showThis;
// outerShowThis(); // Який this???

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // Який this??? // undefined.title

/**
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
 * розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
 * Кількість з властивості stones.
 */
const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],

  calcTotalPrice(stoneName) {
    for (const stone of this.stones) {
      if (stone.name === stoneName) {
        return stone.price * stone.quantity;
      }
    }

    /* const stone = this.stones.find(stone => {
      return stone.name === stoneName;
    }); 
    return stone.price * stone.quantity;
    */
  },
};

console.log(chopShop.calcTotalPrice('Diamond'));
console.log(chopShop.calcTotalPrice('Ruby'));
