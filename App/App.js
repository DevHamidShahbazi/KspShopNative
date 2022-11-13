import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';

import Register from './Auth/Register/Register.js';
import Login from './Auth/Login/Login';
import SplashScreen from './SplashScreen/SplashScreen';

// axios.defaults.baseURL = 'https://ksp-shop.com/';
axios.defaults.baseURL = 'http://192.168.100.15:8000/api/';


const Tab = createBottomTabNavigator();

export default App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Register" component={Register} />
                <Tab.Screen name="Login" component={Login} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};


