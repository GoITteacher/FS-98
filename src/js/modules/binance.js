const refs = {
  formEl: document.querySelector('.js-search-form[data-id="2"]'),
  infoEl: document.querySelector('.js-binance-info'),
};

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const symbol = e.target.elements.query.value;

  getPrice(symbol).then(data => {
    const markup = symbolTemplate(data);
    refs.infoEl.innerHTML = markup;
  });
}

function getPrice(symbol) {
  const BASE_URL = 'https://binance43.p.rapidapi.com';
  const END_POINT = '/ticker/price';
  const PARAMS = new URLSearchParams({ symbol });
  const url = `${BASE_URL}${END_POINT}?${PARAMS}`;

  const options = {
    headers: {
      'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
      'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return { symbol: 'Null', price: '0' };
    }
  });
}

function symbolTemplate({ price, symbol }) {
  price = (+price).toFixed(2);
  return `<span>${symbol}</span>
  <span>${price}</span>`;
}
