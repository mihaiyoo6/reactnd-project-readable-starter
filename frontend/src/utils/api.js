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
  'Content-Type': 'application/json',
  'Authorization': token
};

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(checkStatus)
    .then(r => r.ok ? r.json() : [])

export const getPosts = (category = '') => {
  const url = category === '' ?
    `${api}/posts` :
    `${api}/${category}/posts`;

  return fetch(url, { headers })
    .then(checkStatus)
    .then(r => r.ok ? r.json() : [])
}

export const getPost = (postId = null) => {
  if (!postId) {
    throw Error('Post id is required');
  }
  const url = `${api}/posts/${postId}`;
  return fetch(url, { headers })
    .then(checkStatus)
    .then(r => r.ok ? r.json() : [])
}

export const getComments = (postId = '') => {
  const url = `${api}/posts/${postId}/comments`;
  return fetch(url, { headers })
    .then(checkStatus)
    .then(r => r.ok ? r.json() : [])
}

export const postCommentVote = (commentId, option) => {
  const url = `${api}/comments/${commentId}`;
  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option })
  })
    .then(checkStatus)
    .then(r => r.ok ? r.json() : [])
}

export const postCommentCreate = data =>{
  const url = `${api}/comments`;
  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  })
    .then(checkStatus)
    .then(r=>r.ok?r.json(): []);
}
