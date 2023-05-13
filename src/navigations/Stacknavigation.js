/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Authstucknavigation from './Authstucknavigation';
import {
  BayiForm,
  KehamilanForm,
  NifasForm,
  PersalinanForm,
  BayilahirForm,
  ProfileForm,
  IbuhamilForm,
} from '../components/form';
import {ProfileComp} from '../components/utils';
import {
  IbuhamilMenu,
  AnakkuMenu,
  IbunifasMenu,
  BeresikoMenu,
} from '../components/menu';
import Tabnavigation from './Tabnavigation';

const Stack = createNativeStackNavigator();
const Stacknavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Tabnavigation" component={Tabnavigation} />
      <Stack.Screen name="ProfilComp" component={ProfileComp} />
      <Stack.Screen name="IbuhamilMenu" component={IbuhamilMenu} />
      <Stack.Screen name="AnakkuMenu" component={AnakkuMenu} />
      <Stack.Screen name="IbunifasMenu" component={IbunifasMenu} />
      <Stack.Screen name="BeresikoMenu" component={BeresikoMenu} />
      <Stack.Screen name="KehamilanForm" component={KehamilanForm} />
      <Stack.Screen name="NifasForm" component={NifasForm} />
      <Stack.Screen name="BayiForm" component={BayiForm} />
      <Stack.Screen name="PersalinanForm" component={PersalinanForm} />
      <Stack.Screen name="BayilahirForm" component={BayilahirForm} />
      <Stack.Screen name="IbuhamilForm" component={IbuhamilForm} />
      <Stack.Screen name="ProfileForm" component={ProfileForm} />
      <Stack.Screen
        name="AuthStacknavigation"
        component={Authstucknavigation}
      />
    </Stack.Navigator>
  );
};

export default Stacknavigation;
