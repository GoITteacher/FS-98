/*
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mouseover і mouseout
 * - mousemove (chatty event - балакуча подія)
 */

const boxRef = document.querySelector('.js-box');
/* 
boxRef.addEventListener('mouseenter', () => {
  boxRef.classList.add('box--active');
});

boxRef.addEventListener('mouseleave', () => {
  boxRef.classList.remove('box--active');
}); */

// boxRef.addEventListener('mouseover', e => {
//   console.log('over');
//   boxRef.classList.add('box--active');
//   e.stopPropagation();
// });

// boxRef.addEventListener('mouseout', e => {
//   console.log('out');
//   boxRef.classList.remove('box--active');
//   e.stopPropagation();
// });

boxRef.addEventListener('mousemove', e => {
  console.log(e.x, e.y);
  boxRef.firstElementChild.style.left = e.x + 'px';
  boxRef.firstElementChild.style.top = e.y + 'px';
});
