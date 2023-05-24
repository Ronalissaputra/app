import {useMutation} from 'react-query';
import {axiosIsntance} from '../lib/baseUrl';

export const useCreateadmin = () => {
  try {
    return useMutation(async data => {
      const response = await axiosIsntance.post('/admin', data);
      return response.data;
    });
  } catch (error) {
    console.log(error);
  }
};
