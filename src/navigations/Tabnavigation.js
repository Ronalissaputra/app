/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  HomeScreen,
  MonitoringScreen,
  ArticleScreen,
  AddScreen,
} from '../screens';
const Tab = createBottomTabNavigator();
const Tabnavigation = () => {
  return (
    <Tab.Navigator
      barStyle="light-content"
      backgroundColor={'transparent'}
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {
          backgroundColor: 'white',
          height: 43,
          padding: 0,
        },
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: '#c471ed',
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'HomeScreen') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
            size = focused ? size + 2 : size + 1;
          } else if (route.name === 'MonitoringScreen') {
            iconName = focused ? 'reader' : 'reader-outline';
            size = focused ? size + 2 : size + 1;
          } else if (route.name === 'AddScreen') {
            iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            size = focused ? size + 2 : size + 1;
          } else if (route.name === 'ArticleScreen') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
            size = focused ? size + 2 : size + 1;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        options={{title: 'Beranda'}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{title: 'Pemantauan'}}
        name="MonitoringScreen"
        component={MonitoringScreen}
      />
      <Tab.Screen
        options={{title: 'Edukasi'}}
        name="ArticleScreen"
        component={ArticleScreen}
      />
      <Tab.Screen
        options={{title: 'Tambah'}}
        name="AddScreen"
        component={AddScreen}
      />
    </Tab.Navigator>
  );
};

export default Tabnavigation;
