import  React,{useState,useEffect,useContext} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';
import Home from './Pages/Home/Home';
import Category from './Pages/Category/Category';
import Basket from './Pages/Basket/Basket';
import Chat from './Pages/Chat/Chat';
import Panel from './Pages/Panel/Panel';
import {TabScreenOptions} from './Global/components/Styles/GlobalStyles';
import {CheckToken} from './Auth/components/FunctionAuth';
import {AuthContext} from './Global/components/Context/CustomContext';

import AsyncStorage from '@react-native-async-storage/async-storage';
// .axios.defaults.baseURL = 'https://ksp-shop.com/';
axios.defaults.baseURL = 'http://192.168.100.15:8000/api/';

export default App = () => {
    const [Auth,setAuth] = useState(false);
    const [User,setUser] = useState(null);
    const [Setting,setSetting] = useState(null);
    useEffect(()=>{
        // CheckToken(setAuth,setUser)
    },[]);
    // console.log({
    //     'Auth':Auth,
    //     'User':User
    // })
    const Tab = createBottomTabNavigator();
    return (
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Home" screenOptions={{tabBarHideOnKeyboard: true}}>
                    <Tab.Screen name="Panel" component={Panel}  options={TabScreenOptions('پنل کاربری','account')}/>
                    <Tab.Screen name="Chat" component={Chat}    options={TabScreenOptions('پیام رسان','chat')}/>
                    <Tab.Screen name="Basket" component={Basket} options={TabScreenOptions('سبد خرید','cart')}/>
                    <Tab.Screen name="Category" component={Category} options={TabScreenOptions('دسته بندی ها','view-dashboard')}/>
                    <Tab.Screen name="Home" component={Home} options={TabScreenOptions('خانه','home')}/>
                </Tab.Navigator>
            </NavigationContainer>
    );
};


