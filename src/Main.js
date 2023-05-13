/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Authstucknavigation from './navigations/Authstucknavigation';
import Stacknavigation from './navigations/Stacknavigation';
import {useGetmeLogin} from './features/authintence';
import {useEffect} from 'react';
import {SpinloadComp} from './components/utils';

const Main = () => {
  const {mutate, isSuccess, isLoading} = useGetmeLogin();

  const Getme = async () => {
    await mutate();
  };

  useEffect(() => {
    Getme();
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <View className="w-full bg-slate-200 min-h-screen flex-1 items-center justify-center">
            <SpinloadComp />
          </View>
        </>
      ) : (
        <>
          <NavigationContainer>
            {isSuccess ? <Stacknavigation /> : <Authstucknavigation />}
          </NavigationContainer>
        </>
      )}
    </>
  );
};

export default Main;
