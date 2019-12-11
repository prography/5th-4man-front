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
