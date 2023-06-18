import {useMutation} from 'react-query';
import {axiosInstance} from '../lib/baseUrl';

export const useCreateadmin = () => {
  try {
    return useMutation(async data => {
      const response = await axiosInstance.post('/admin', data);
      return response.data;
    });
  } catch (error) {
    console.log(error);
  }
};
