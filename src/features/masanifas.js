import {useQuery, useMutation} from 'react-query';
import {axiosIsntance} from '../lib/baseUrl';

export const useGetmasanifas = () => {
  try {
    const Getmasanifas = async () => {
      const response = await axiosIsntance.get('/masanifas');
      return response.data;
    };
    return useQuery('masanifas', Getmasanifas);
  } catch (error) {
    console.log(error);
  }
};

export const useCreatemasanifas = () => {
  try {
    return useMutation(async data => {
      const response = await axiosIsntance.post('/masanifas', data);
      return response.data;
    });
  } catch (error) {
    console.log(error);
  }
};
