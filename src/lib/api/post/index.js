import axios from 'axios';
import * as authUtils from 'utils/auth';

const API_URL = 'https://api.gaegata.com';

export const SendUrl = async (url, method, params, headers) => {
  let re;
  try {
    re = await axios({
      method,
      url,
      data: params,
      headers,
    });
  } catch (err) {
    console.log(err);
  }
  return re;
};

export const loginGithubAuth = async params => {
  const re = await SendUrl(`${API_URL}/account/token/`, 'post', params);

  return re;
};

export const loginAuth = async params => {
  const re = await SendUrl(`${API_URL}/account/token/`, 'post', params);

  return re;
};

export const addRigster = async params => {
  const re = await SendUrl(
    `${API_URL}/account/${params.userId}/`,
    'patch',
    params,
  );

  return re;
};

export const idCheck = async params => {
  const re = await SendUrl(
    `${API_URL}/account/check/duplication/`,
    'post',
    params,
  );

  return re;
};

export const register = async params => {
  const re = await SendUrl(`${API_URL}/account/`, 'post', params);

  return re;
};

export const myUserDetail = async params => {
  const re = await SendUrl(`${API_URL}/account/self/`, 'get', params);
  return re;
};

export const createTeam = async params => {
  const headers = {
    'content-type':
      'multipart/form-data; boundary=ebf9f03029db4c2799ae16b5428b06bd',
  };

  const re = await SendUrl(`${API_URL}/team/`, 'post', params, headers);

  return re;
};

export const getTeamList = async () => {
  const re = await axios.get(`${API_URL}/team/`);

  return re;
};

export const getRecentTeamList = async () => {
  const re = await axios.get(`${API_URL}/team/recent/`);

  return re;
};

export const getTeamDetail = async id => {
  const re = await axios.get(`${API_URL}/team/${id}/`);

  return re;
};

export const getTeamComment = async id => {
  const re = await axios.get(`${API_URL}/team/${id}/comment/`);

  return re;
};

export const addComment = async params => {
  const re = await axios.post(`${API_URL}/comment/`, params);

  return re;
};

export const updateComment = async params => {
  const re = await axios.put(`${API_URL}/comment/${params.id}/`, params);

  return re;
};

export const deleteComment = async params => {
  const re = await axios.delete(`${API_URL}/comment/${params.id}/`);

  return re;
};

export const teamApplication = async (params, token) => {
  const re = await axios({
    url: `${API_URL}/application/`,
    method: 'post',
    data: params,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  return re;
};

export const getMyApplyTeamList = async () => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const re = await SendUrl(
    `${API_URL}/account/self/applied/teams/`,
    'get',
    {},
    headers,
  );

  return re;
};

export const getTags = () => {
  // const re = await axios.get('http://gaegata.fourman.store/tag/');
  return [
    {
      name: 'React',
    },
    {
      name: 'Vue',
    },
  ];
};
