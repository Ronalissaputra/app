import {useQuery, useMutation} from 'react-query';
import {axiosIsntance} from '../lib/baseUrl';

export const useGetuser = () => {
  try {
    const Getuser = async () => {
      const response = await axiosIsntance.get('/user');
      return response.data;
    };
    return useQuery('user', Getuser);
  } catch (error) {
    console.log(error);
  }
};

export const useGetusermutate = () => {
  try {
    return useMutation(async () => {
      const response = await axiosIsntance.get('/user');
      return response.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const useCreateuser = () => {
  try {
    return useMutation(async data => {
      const response = await axiosIsntance.post('/user', data);
      return response.data;
    });
  } catch (error) {
    console.log(error);
  }
};
