/* eslint-disable react/react-in-jsx-scope */
import Main from './src/Main';
import {QueryClientProvider, QueryClient} from 'react-query';
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
};

export default App;
