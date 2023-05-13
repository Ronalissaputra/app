/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegisterScreen, LoginScreen} from '../screens';
import Stacknavigation from './Stacknavigation';

const Stack = createNativeStackNavigator();
const Authstucknavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="Stacknavigation" component={Stacknavigation} />
    </Stack.Navigator>
  );
};

export default Authstucknavigation;
