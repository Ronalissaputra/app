/**
 * @format
 */
import axios from 'axios';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
axios.defaults.withCredentials = true;

AppRegistry.registerComponent(appName, () => App);
