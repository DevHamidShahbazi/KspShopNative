import React,{useEffect,useState,useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import {NavigationSetOptionsPanel} from './components/PanelStyles';
import Register from '../../Auth/Register/Register';
import Login from '../../Auth/Login/Login';
import VerifyScreen  from '../../Auth/Verify/Verify';
import ForgetPassword from '../../Auth/ForgetPassword/ForgetPassword';
import VerifyForgetPassword from '../../Auth/VerifyForgetPassword/VerifyForgetPassword';
import MiddlewareAuth from '../../Global/components/middleware/MiddlewareAuth';
import MiddlewareNotAuth from '../../Global/components/middleware/MiddlewareNotAuth';
import MiddlewareVerifyShow from '../../Global/components/middleware/MiddlewareVerifyShow';
import MiddlewareVerify from '../../Global/components/middleware/MiddlewareVerify';
import Profile from '../Profile/Profile';
const PanelStack = createStackNavigator();
export default function Panel ({navigation ,route}) {
    useEffect(()=>{
        NavigationSetOptionsPanel(navigation)
    },[]);
    return (
        <React.Fragment>

            <MiddlewareAuth>
                <MiddlewareVerify>
                    <PanelStack.Navigator>
                        <PanelStack.Screen name="Profile" component={Profile}/>
                    </PanelStack.Navigator>
                </MiddlewareVerify>
            </MiddlewareAuth>

            <MiddlewareNotAuth>
                <PanelStack.Navigator>
                    <PanelStack.Screen name="Register" component={Register} />
                    <PanelStack.Screen name="Login" component={Login}/>
                    <PanelStack.Screen name="ForgetPassword" component={ForgetPassword} />
                    <PanelStack.Screen name="VerifyForgetPassword" component={VerifyForgetPassword}/>
                </PanelStack.Navigator>
            </MiddlewareNotAuth>

            <MiddlewareAuth>
                <MiddlewareVerifyShow>
                    <PanelStack.Navigator>
                        <PanelStack.Screen name="Verify" component={VerifyScreen}/>
                    </PanelStack.Navigator>
                </MiddlewareVerifyShow>
            </MiddlewareAuth>

        </React.Fragment>
    );
}
