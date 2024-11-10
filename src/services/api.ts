import axios from 'axios';
import { ApiDataType } from '../types/apiData';

export const fetchData = async (page: number): Promise<ApiDataType[]> => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
