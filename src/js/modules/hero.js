const refs = {
  formEl: document.querySelector('.js-search-form[data-id="1"]'),
  heroEl: document.querySelector('.js-hero-container'),
};

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const name = e.target.elements.query.value;

  fetchHero(name).then(hero => {
    const markup = heroTemplate(hero);
    refs.heroEl.insertAdjacentHTML('afterbegin', markup);
  });

  e.target.reset();
}

function fetchHero(superhero) {
  const BASE_URL = 'https://superhero-search.p.rapidapi.com';
  const END_POINT = '/api/';
  const PARAMS = new URLSearchParams({
    hero: superhero,
  });
  const url = `${BASE_URL}${END_POINT}?${PARAMS}`;

  const options = {
    headers: {
      'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      console.log('ERROR');
    }
  });
}

function heroTemplate(hero) {
  return `<div class="hero-card card">
  <div class="image-container">
    <img
      src="${hero.images.lg}"
      alt="#"
      class="hero-image"
    />
  </div>
  <div class="hero-body">
    <h4 class="hero-name">${hero.name}</h4>
    <p class="hero-bio">
      ${hero.biography.fullName} - ${hero.biography.placeOfBirth}, ${hero.work.base}
    </p>
  </div>
</div>`;
}
