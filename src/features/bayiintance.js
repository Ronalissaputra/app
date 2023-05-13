import {useQuery, useMutation} from 'react-query';
import {axiosIsntance} from '../lib/baseUrl';

export const useGetbayi = () => {
  try {
    const Getbayi = async () => {
      const response = await axiosIsntance.get('/bayi');
      return response.data;
    };
    return useQuery('bayi', Getbayi);
  } catch (error) {
    console.log(error);
  }
};

export const useCreatebayi = () => {
  try {
    return useMutation(async data => {
      const response = await axiosIsntance.post('/bayi', data);
      return response.data;
    });
  } catch (error) {
    console.log(error);
  }
};
