/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Navigator from './src/index';
import {name as appName} from './app.json';
import { createAppContainer } from "react-navigation";

const App = createAppContainer(Navigator.StackNavigator);


AppRegistry.registerComponent(appName, () => App);
