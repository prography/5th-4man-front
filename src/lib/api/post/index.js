import axios from 'axios';

const API_URL = 'https://gaegata.fourman.store';

export const getTeamList = async () => {
  const re = await axios.get(`${API_URL}/team/`);

  return re;
};

export const getRecentTeamList = async () => {
  const re = await axios.get(`${API_URL}/team/recent/`);

  return re;
};

export const getTeamDetail = async id => {
  const re = await axios.get(`https://gaegata.fourman.store/team/${id}/`);

  return re;
};

export const getTeamComment = async id => {
  const re = await axios.get(
    `https://gaegata.fourman.store/team/${id}/comment/`,
  );

  return re;
};

export const addComment = async params => {
  const re = await axios.post(`${API_URL}/comment/`, params);

  return re;
};

export const updateComment = async params => {
  console.log(params);
  const re = await axios.put(`${API_URL}/comment/${params.id}/`, params);

  return re;
};

export const deleteComment = async params => {
  const re = await axios.delete(`${API_URL}/comment/${params.id}/`);

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
