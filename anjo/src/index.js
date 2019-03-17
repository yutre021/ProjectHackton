// src/index.js

import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import Page7 from './pages/page7';


import { createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Home: Page1,
  Cadastro: Page2,
  Menu: Page3,
  Info: Page4,
  Alerta: Page5,
  CadAnjos: Page7,
}, { initialRouteName: 'Home',
     defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "pink"
        },

        headerTintColor: '#FFF'
    },
});

export default { StackNavigator };