import axios from 'axios';
import {useGettokendecoded} from '../features/authintence';
import {axiosIsntance} from './baseUrl';
import jwtDecode from 'jwt-decode';

export const axiosJWT = axios.create();
axiosJWT.interceptors.request.use(
  async config => {
    const {data} = useGettokendecoded();
    const currentDate = new Date();
    if (data.decoded.exp * 1000 < currentDate.getTime()) {
      const response = await axiosIsntance.get('/refreshtoken');
      config.headers.Authorization = `Bearer ${response.data.accesstoken}`;
      const token = response.data.accesstoken;
      const decoded = jwtDecode(response.data.accesstoken);
      return {decoded, token};
    }
    return config;
  },
  error => {
    return promise;
  },
);
