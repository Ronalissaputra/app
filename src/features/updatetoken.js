import {axiosInstance} from '../lib/baseUrl';

export const getUpdatedToken = async () => {
  try {
    const response = await axiosInstance.get('/refreshtoken');
    return response.data.accesstoken; // Mengembalikan token akses baru
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw new Error('Failed to refresh token');
  }
};
