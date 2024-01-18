import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { images } from './images';

const galleryElem = document.querySelector('.js-gallery');
function imagesTemplate() {
  const markup = images
    .map(el => {
      return `
    <a href="${el.img}">
    <img src="${el.img}" alt="" title=""/>
    </a>`;
    })
    .join('\n');

  return markup;
}

const markup = imagesTemplate();
galleryElem.insertAdjacentHTML('afterbegin', markup);

new SimpleLightbox('.gallery a', {
  nav: true,
});
