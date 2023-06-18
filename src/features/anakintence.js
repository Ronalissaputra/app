import {useMutation} from 'react-query';
import {getUpdatedToken} from './updatetoken';
import {axiosInstance} from '../lib/baseUrl';

export const useCreateanak = () => {
  try {
    return useMutation(async data => {
      const token = await getUpdatedToken();
      const response = await axiosInstance.post('/anak', data, {
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
