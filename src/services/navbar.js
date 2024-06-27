import axios from 'axios';

const API = 'http://localhost:1337/api/main-menu?populate=*';

export const getMenu = async () => {
  try {
    const response = await axios.get(API);
    return response.data;
  } catch (error) {
    console.error('Error fetching menu data:', error);
    return [];
  }
};
