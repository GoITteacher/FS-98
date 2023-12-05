/**
 * Метод flatMap
 */

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const tags = [];

tweets
  .flatMap(item => {
    return item.tags;
  })
  .forEach(item => {
    if (!tags.includes(item)) {
      tags.push(item);
    }
  });

console.log(tags);
