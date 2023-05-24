import {useMutation} from 'react-query';
import {axiosIsntance} from '../lib/baseUrl';
import {useGettokendecoded} from './authintence';

export const useCreateibuhamil = () => {
  const {data: token} = useGettokendecoded();
  try {
    return useMutation(async data => {
      const response = await axiosIsntance.post('/ibuhamil', data, {
        headers: {
          Authorization: `Bearer ${token?.accesstoken}`,
        },
      });
      return response.data;
    });
  } catch (error) {
    console.log(error);
  }
};
