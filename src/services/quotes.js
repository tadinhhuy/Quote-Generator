import axios from './axios';
import CONSTANTS from '../constants/endpoints';

const getAllQuotes = async() => {
  try {
    const { quotes } = await axios.get(CONSTANTS.BASE_URL);
    return quotes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getAllQuotes };
