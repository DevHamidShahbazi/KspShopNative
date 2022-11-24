import React,{useEffect,useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import StylesPanel,{NavigationSetOptionsPanel} from './components/PanelStyles';
import Register from '../../Auth/Register/Register';
import Login from '../../Auth/Login/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from './Profile';
import VerifyView  from '../../Auth/Verify/Verify';
import ForgetPassword from '../../Auth/ForgetPassword/ForgetPassword';
import VerifyForgetPassword from '../../Auth/VerifyForgetPassword/VerifyForgetPassword';
const PanelStack = createStackNavigator();
export default function Panel ({navigation ,route,Auth,setAuth,Verify,setVerify,setUser,User}) {
    useEffect(()=>{
        NavigationSetOptionsPanel(navigation)
    },[]);
    // AsyncStorage.clear();
    // AsyncStorage.getAllKeys((error, result) => console.log(result))
    //
    // AsyncStorage.multiGet(['Auth', 'verify', 'api_token', 'user',],(errors, result) => {
    // // console.log(JSON.parse(result[3][1] ))
    //     console.log(result)
    // })
    //
    // console.log({
    //     'Auth':Auth,
    //     'Verify':Verify,
    //     'User':User
    // })
    return (
        <React.Fragment>
            <PanelStack.Navigator>
                {
                    Auth==true && Verify==true ?
                        <React.Fragment>
                            <PanelStack.Screen name="Profile"  >
                                {(props) => <Profile  {...props} Auth={Auth} User={User} setAuth={setAuth} setVerify={setVerify} setUser={setUser}/>}
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
                            <PanelStack.Screen name="ForgetPassword">
                                {(props) => <ForgetPassword  {...props} Auth={Auth} setAuth={setAuth} setVerify={setVerify} setUser={setUser} User={User}/>}
                            </PanelStack.Screen>
                            <PanelStack.Screen name="VerifyForgetPassword">
                                {(props) => <VerifyForgetPassword  {...props} Auth={Auth} setAuth={setAuth} setVerify={setVerify}/>}
                            </PanelStack.Screen>
                        </React.Fragment>:null
                }
                {
                    Auth==true && Verify==false ?
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
