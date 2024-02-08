import { NewsAPI } from './modules/newsApi2';

const newsApi = new NewsAPI();

const refs = {
  targetElem: document.querySelector('.js-target'),
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
};

// =====================================

const options = {
  rootMargin: '500px',
};

const callback = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadMore();
    }
  });
};

const observer = new IntersectionObserver(callback, options);

// =====================================

refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.target.elements.query.value;
  newsApi.query = query;
  newsApi.page = 1;
  refs.articleListElem.innerHTML = '';

  const result = await newsApi.getArticles();
  renderArticles(result.articles);
  newsApi.total_pages = result.total_pages;
  changeObserverStatus();
});

async function loadMore() {
  newsApi.page += 1;
  const result = await newsApi.getArticles();
  renderArticles(result.articles);
  changeObserverStatus();
}

function changeObserverStatus() {
  if (newsApi.page >= newsApi.total_pages) {
    observer.unobserve(refs.targetElem);
    console.log('remove observer');
  } else {
    observer.observe(refs.targetElem);
    console.log('add observer');
  }
}

// =====================================

function templateArticle({ author, title, summary, media, published_date }) {
  return `
    <li class="card news-card">
          <img loading="lazy"
            class="news-image"
            src="${media}"
            alt="${title}"
          />
          <h3 class="card-title">
            ${title}
          </h3>
          <p class="card-desc">
          ${summary}
          </p>
          <div class="card-footer">
            <span>${author}</span>
            <span>${published_date}</span>
          </div>
        </li>`;
}

function renderArticles(articles) {
  const markup = articles.map(templateArticle).join('');
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);
}
