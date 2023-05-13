import {useMutation, useQuery} from 'react-query';
import {axiosIsntance} from '../lib/baseUrl';

export const useGetmeLogin = () => {
  try {
    return useMutation(async () => {
      const response = await axiosIsntance.get('/meadmin');
      return response.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const useGetme = () => {
  try {
    const Getme = async () => {
      const response = await axiosIsntance.get('/meadmin');
      return response.data;
    };
    return useQuery('admin', Getme);
  } catch (error) {
    console.log(error);
  }
};

export const useLogin = () => {
  try {
    return useMutation(async data => {
      const response = await axiosIsntance.post('/loginadmin', data);
      return response.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const useLogout = () => {
  try {
    return useMutation(() => axiosIsntance.delete('/logoutadmin'));
  } catch (error) {
    console.log(error);
  }
};
