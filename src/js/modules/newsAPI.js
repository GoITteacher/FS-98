import axios from 'axios';

export class NewsAPI {
  static BASE_URL = 'https://newsapi.org/v2';

  constructor() {
    this.query = 'Default';
    this.page = 1;
    this.pageSize = 20;
    this.totalResults = 0;
  }

  fetchArticles() {
    const END_POINT = '/everything';
    const url = NewsAPI.BASE_URL + END_POINT;

    const params = {
      q: this.query,
      page: this.page,
      pageSize: this.pageSize,
      apiKey: 'c8747511a2c34730a83caaff4f3693e7',
    };

    return axios.get(url, { params }).then(res => res.data);
  }
}
