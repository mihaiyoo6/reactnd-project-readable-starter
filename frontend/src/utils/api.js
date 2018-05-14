const api = "http://localhost:3001";
// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

const processResponse = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response.ok ? response.json() : [];
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
    .then(processResponse)

export const getPosts = (category = '') => {
  const url = category === '' ?
    `${api}/posts` :
    `${api}/${category}/posts`;

  return fetch(url, { headers })
    .then(processResponse)
}

export const getPost = (postId = null) => {
  if (!postId) {
    throw Error('Post id is required');
  }
  const url = `${api}/posts/${postId}`;
  return fetch(url, { headers })
    .then(processResponse)
    .then(post => {
      if (Object.keys(post).length > 0) {
        return post;
      } else {
        throw new Error({ statusText: 404 });
      }
    });
}

export const postPostVote = (postId, option) => {
  const url = `${api}/posts/${postId}`;
  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option })
  })
    .then(processResponse)
}

export const postPostCreate = data => {
  const url = `${api}/posts`;
  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  })
    .then(processResponse);
}
export const deletePostDelete = id => {
  const url = `${api}/posts/${id}`;
  return fetch(url, {
    method: 'DELETE',
    headers
  })
    .then(processResponse)
}

export const getComments = (postId = '') => {
  const url = `${api}/posts/${postId}/comments`;
  return fetch(url, { headers })
    .then(processResponse)
}

export const postCommentVote = (commentId, option) => {
  const url = `${api}/comments/${commentId}`;
  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option })
  })
    .then(processResponse)
}

export const postCommentCreate = data => {
  const url = `${api}/comments`;
  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  })
    .then(processResponse);
}
export const putPostEdit = ({ id, body, title }) => {
  const url = `${api}/posts/${id}`;
  return fetch(url, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ body, title })
  })
    .then(processResponse);
}

export const deleteCommentDelete = id => {
  const url = `${api}/comments/${id}`;
  return fetch(url, {
    method: 'DELETE',
    headers
  })
    .then(processResponse);
}

export const putCommentEdit = ({ id, body, timestamp }) => {
  const url = `${api}/comments/${id}`;
  return fetch(url, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ body, timestamp })
  })
    .then(processResponse);
}