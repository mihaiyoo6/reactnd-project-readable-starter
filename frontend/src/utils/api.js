const api = "localhost:3001";
// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};

const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(r => r.json);

const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(r => r.json)