import {useMutation, useQuery} from 'react-query';
import {axiosInstance} from '../lib/baseUrl';
import {getUpdatedToken} from './updatetoken';

export const useCreateibuhamil = () => {
  try {
    return useMutation(async data => {
      const token = await getUpdatedToken();
      const response = await axiosInstance.post('/ibuhamil', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const useGetibuhamil = () => {
  return useQuery('ibuhamil', async () => {
    try {
      const token = await getUpdatedToken();
      const response = await axiosInstance.get('/ibuhamil', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  });
};
