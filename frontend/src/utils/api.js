const api = "http://localhost:3001";
// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(checkStatus)
    .then(r => r.ok ? r.json() : []);

export const getPosts = (category = '') => {
  const url = category === '' ?
    `${api}/posts` :
    `${api}/${category}/posts`;

  return fetch(url, { headers })
    .then(checkStatus)
    .then(r => r.ok ? r.json() : []);
}

export const getComments = (postId = '') => {
  const url = `${api}/posts/${postId}/comments`;
  return fetch(url, { headers })
    .then(checkStatus)
    .then(r => r.ok ? r.json() : [])
    .catch(err => []);
}
