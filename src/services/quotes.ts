import axios from './axios';
import CONSTANTS from '../constants/endpoints';


const getAllQuotes = async (): Promise<object[]> => {
  try {
    const { data }: any = await axios.get(CONSTANTS.QUOTES);
    return data?.quotes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getAllQuotes };
