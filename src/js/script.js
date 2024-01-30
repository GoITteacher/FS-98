import './modules/binance';
import './modules/hero';
import './modules/quotes';
import './modules/ipfinder';
import './modules/pokemon';
import './modules/instagram';
import './modules/user';

//============================

/* function fetchUsers() {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/users';
  const url = BASE_URL + END_POINT;

  return fetch(url).then(response => {
    return response.json();
  });
}
*/

/* function fetchComments(postId) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/comments';
  const PARAMS = `?postId=${postId}&userId=1`;

  const url = BASE_URL + END_POINT + PARAMS;

  const options = {
    headers: {
      'X-RapidAPI-Key': '2365176235176235',
      'X-RapidAPI-Host': 'jsygedjaygdjawy',
    },
  };

  return fetch(url, options).then(response => {
    return response.json();
  });
}

fetchComments(5);
fetchComments(1);
fetchComments(10);
fetchComments(21); */
