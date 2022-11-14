import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';

import Home from './Pages/Home/Home';
import Category from './Pages/Category/Category';
import Basket from './Pages/Basket/Basket';
import Chat from './Pages/Chat/Chat';
import Panel from './Pages/Panel/Panel';


// .axios.defaults.baseURL = 'https://ksp-shop.com/';
axios.defaults.baseURL = 'http://192.168.100.15:8000/api/';
const Tab = createBottomTabNavigator();
export default App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home"
                           activeColor="#f0edf6"
                           inactiveColor="#3e2465"
                           barStyle={{ backgroundColor: '#ad1d00',paddingBottom: 48 }}
            >
                <Tab.Screen name="Panel" component={Panel} />
                <Tab.Screen name="Basket" component={Basket} />
                <Tab.Screen name="Chat" component={Chat} />
                <Tab.Screen name="Category" component={Category} />
                <Tab.Screen name="Home" component={Home} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};


