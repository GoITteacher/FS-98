import { NewsAPI } from './modules/newsAPI';

const newsApi = new NewsAPI();

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  loadElem: document.querySelector('.js-loader'),
};

refs.formElem.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMoreClick);

async function onFormSubmit(e) {
  e.preventDefault();
  const query = e.target.elements.query.value;
  newsApi.query = query;
  newsApi.page = 1;
  showLoader();

  const result = await newsApi.fetchArticles();
  const markup = articlesTemplate(result.articles);
  refs.articleListElem.innerHTML = markup;
  newsApi.totalResults = result.totalResults;

  hideLoader();
  changeBtnStatus();
  e.target.reset();
}

async function onLoadMoreClick() {
  newsApi.page += 1;
  showLoader();

  const result = await newsApi.fetchArticles();
  const markup = articlesTemplate(result.articles);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);

  hideLoader();
  changeBtnStatus();
}

function changeBtnStatus() {
  const maxPage = Math.ceil(newsApi.totalResults / newsApi.pageSize);

  refs.btnLoadMore.disabled = newsApi.page >= maxPage;

  /* if (newsApi.page >= maxPage) {
    refs.btnLoadMore.classList.add('hidden');
  } else {
    refs.btnLoadMore.classList.remove('hidden');
  } */
}

function showLoader() {
  refs.loadElem.classList.remove('is-hidden');
}
function hideLoader() {
  refs.loadElem.classList.add('is-hidden');
}

// ===============================================
function articleTemplate({
  urlToImage,
  title,
  description,
  author,
  publishedAt,
}) {
  return `<li class="card news-card">
  <img loading="lazy"
    class="news-image"
    src="${urlToImage}"
    alt="${title}"
  />
  <h3 class="card-title">
    ${title}
  </h3>
  <p class="card-desc">
  ${description}
  </p>
  <div class="card-footer">
    <span>${author}</span>
    <span>${publishedAt}</span>
  </div>
</li>`;
}

function articlesTemplate(articles) {
  return articles.map(articleTemplate).join('');
}
