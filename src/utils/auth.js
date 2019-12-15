import axios from 'axios';

export const setToken = token => {
  localStorage.setItem('token', JSON.stringify(token));
  axios.defaults.headers.common.Authorization = `Bearer ${token.access}`;
};

export const getToken = () => {
  return JSON.parse(localStorage.getItem('token'));
};

export const removeToken = () => {
  localStorage.removeItem('token');
  axios.defaults.headers.common.Authorization = null;
};
