// src/services/api.ts
import axios from 'axios';
import { ApiDataType } from '../types/apiData';

// Define a function to fetch data from the API
export const fetchData = async (page: number): Promise<ApiDataType[]> => {
  try {
    // Make a GET request to fetch paginated data
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
    return response.data;
  } catch (error) {
    // Handle and throw errors if the request fails
    throw new Error('Failed to fetch data');
  }
};
