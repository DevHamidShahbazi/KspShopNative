import React,{useEffect,useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import StylesPanel,{NavigationSetOptionsPanel} from './components/PanelStyles';
import Register from '../../Auth/Register/Register';
import Login from '../../Auth/Login/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from './Profile';
import {Text} from 'react-native';
import VerifyView  from '../../Auth/Verify/Verify';
import MiddlewareNotAuth from '../../Global/components/middleware/MiddlewareNotAuth';
import MiddlewareAuth from '../../Global/components/middleware/MiddlewareAuth';
import MiddlewareVerify from '../../Global/components/middleware/MiddlewareVerify';
import MiddlewareNotVerify from '../../Global/components/middleware/MiddlewareNotVerify';

const PanelStack = createStackNavigator();
export default function Panel ({navigation ,route,Auth,setAuth,Verify,setVerify,setUser,User}) {
    useEffect(()=>{
        NavigationSetOptionsPanel(navigation)
    },[]);
    // AsyncStorage.clear();
    // AsyncStorage.getAllKeys((error, result) => console.log(result))
    //
    // AsyncStorage.multiGet(['Auth', 'verify', 'api_token', 'user',],(errors, result) => {
    // console.log(JSON.parse(result[3][1] ))
    //     console.log(result)
    // })

    // console.log({
    //     'Auth':Auth,
    //     'Verify':Verify,
    //     'User':User
    // })
    return (
        <React.Fragment>
            <PanelStack.Navigator>
                {
                    Auth && Verify ?
                        <React.Fragment>
                            <PanelStack.Screen name="Profile"  >
                                {(props) => <Profile  {...props} Auth={Auth} setAuth={setAuth} User={User}/>}
                            </PanelStack.Screen>
                        </React.Fragment>:null
                }
                {
                    Auth==false && Verify==false ?
                        <React.Fragment>
                            <PanelStack.Screen name="Register">
                                {(props) => <Register  {...props} Auth={Auth} setAuth={setAuth} setVerify={setVerify} setUser={setUser}/>}
                            </PanelStack.Screen>
                            <PanelStack.Screen name="Login">
                                {(props) => <Login  {...props} Auth={Auth} setAuth={setAuth} setVerify={setVerify} setUser={setUser}/>}
                            </PanelStack.Screen>
                        </React.Fragment>:null
                }
                {
                    Auth && !Verify ?
                        <React.Fragment>
                            <PanelStack.Screen name="Verify">
                                {(props) => <VerifyView  {...props} Auth={Auth} setAuth={setAuth} setVerify={setVerify} />}
                            </PanelStack.Screen>
                        </React.Fragment>:null
                }
            </PanelStack.Navigator>
        </React.Fragment>
    );
}
