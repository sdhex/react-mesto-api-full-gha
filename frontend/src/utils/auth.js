/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable arrow-body-style */
// const BASE_URL = 'http://127.0.0.1:3000';
const BASE_URL = 'http://api.vmesto.nomoreparties.co';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Код ошибки: ${res.status}`);
}

function request(endpoint, options) {
  return fetch(`${BASE_URL}/${endpoint}`, options).then(checkResponse);
}

export const register = ({ email, password }) => {
  return request(`signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

export const login = ({ email, password }) => {
  return request(`signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => {
    localStorage.setItem('userId', res._id);
    return res;
  });
};
export const checkToken = () => {
  return request(`users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const signOut = () => {
  return request(`signout`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    localStorage.removeItem('userId', res._id);
    return res;
  });
};