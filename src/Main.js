/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import Authstucknavigation from './navigations/Authstucknavigation';
import Stacknavigation from './navigations/Stacknavigation';
import {useGettokendecoded} from './features/authintence';

const Main = () => {
  const {data, isError} = useGettokendecoded();

  return (
    <NavigationContainer>
      {data && <Stacknavigation />}
      {isError && <Authstucknavigation />}
    </NavigationContainer>
  );
};

export default Main;
