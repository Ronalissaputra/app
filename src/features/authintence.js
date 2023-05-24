import {useMutation, useQuery} from 'react-query';
import {axiosIsntance} from '../lib/baseUrl';
import jwtDecode from 'jwt-decode';

export const useGettokendecoded = () => {
  return useQuery('data', async () => {
    const response = await axiosIsntance.get('/refreshtoken');
    const accesstoken = response.data.accesstoken;
    const decoded = jwtDecode(response.data.accesstoken);
    return {decoded, accesstoken};
  });
};

export const useLogin = () => {
  try {
    return useMutation(async data => {
      const response = await axiosIsntance.post('/login', data);
      return response.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const useLogout = () => {
  try {
    return useMutation(() => axiosIsntance.delete('/logout'));
  } catch (error) {
    console.log(error);
  }
};
