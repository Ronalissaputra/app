import {useMutation, useQuery} from 'react-query';
import {axiosInstance} from '../lib/baseUrl';
import jwt_decode from 'jwt-decode';

export const useGettokendecoded = () => {
  return useQuery('token', async () => {
    const response = await axiosInstance.get('/refreshtoken');
    const {accesstoken} = response.data;
    const decoded = jwt_decode(accesstoken);
    return {decoded, accesstoken};
  });
};

export const useLogin = () => {
  try {
    return useMutation(async data => {
      const response = await axiosInstance.post('/login', data);
      return response.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const useLogout = () => {
  try {
    return useMutation(() => axiosInstance.delete('/logout'));
  } catch (error) {
    console.log(error);
  }
};
