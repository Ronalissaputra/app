import {QueryClient, QueryClientProvider} from 'react-query';
import {setContext} from 'axios';
import {create} from 'axios';

const axiosInstance = create({
  baseURL: 'http://10.0.2.2:5000',
});

axiosInstance.interceptors.request.use(config => {
  // tambahkan authorization header jika diperlukan
  return config;
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Menonaktifkan caching ketika aplikasi berada dalam mode development
      // Untuk mempercepat pengembangan dan mencegah data lama ditampilkan pada aplikasi
      cacheTime: process.env.NODE_ENV === 'development' ? 0 : 30000,
      staleTime: 30000,
    },
  },
});

export const axios = axiosInstance;
export const QueryProvider = ({children}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
