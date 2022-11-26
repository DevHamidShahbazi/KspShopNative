import React,{useEffect,useState,useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import StylesPanel,{NavigationSetOptionsPanel} from './components/PanelStyles';
import Register from '../../Auth/Register/Register';
import Login from '../../Auth/Login/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from './Profile';
import VerifyScreen  from '../../Auth/Verify/Verify';
import ForgetPassword from '../../Auth/ForgetPassword/ForgetPassword';
import VerifyForgetPassword from '../../Auth/VerifyForgetPassword/VerifyForgetPassword';
import LoadingScreen from '../Loading/LoadingScreen';
import {AuthContext} from '../../Global/components/Context/CustomContext';
const PanelStack = createStackNavigator();
export default function Panel ({navigation ,route}) {
    const Auth = useContext(AuthContext);
    // console.log(Auth);
    useEffect(()=>{
        NavigationSetOptionsPanel(navigation)
    },[]);
    // AsyncStorage.clear();
    // AsyncStorage.getAllKeys((error, result) => console.log(result))
    // AsyncStorage.multiGet(['Auth', 'api_token', 'user',],(errors, result) => {
    // // console.log(JSON.parse(result[3][1] ))
    //     console.log(result)
    // })
    // console.log({
    //     'Auth':Auth,
    //     'User':User,
    // })
    return (
        <React.Fragment>
            <PanelStack.Navigator>
                <PanelStack.Screen name="Profile" component={Profile}/>
            </PanelStack.Navigator>
        </React.Fragment>
    );
}



//
// {
//     Auth==true && User != null  ?
//         <>
//             <PanelStack.Screen name="Profile" component={Profile} initialParams={{Auth:Auth}} />
//         </>:
//         <React.Fragment>
//             <PanelStack.Screen name="LoadingProfile" component={LoadingScreen} initialParams={{Auth:Auth,User:User}} />
//         </React.Fragment>
// }
//
// {
//     Auth==false && User == null ?
//         <>
//             <PanelStack.Screen name="Register" component={Register} initailParams={{Auth:Auth,setUser:setUser,setAuth:setAuth}}/>
//             <PanelStack.Screen name="Login" component={Login} initailParams={{Auth:Auth,setUser:setUser,setAuth:setAuth}}/>
//             <PanelStack.Screen name="ForgetPassword" component={ForgetPassword} initailParams={{Auth:Auth,setUser:setUser,setAuth:setAuth,User:User}}/>
//             <PanelStack.Screen name="VerifyForgetPassword" component={VerifyForgetPassword} initailParams={{Auth:Auth,setUser:setUser,setAuth:setAuth}}/>
//         </>:
//         <React.Fragment>
//             <PanelStack.Screen name="LoadingAuth" component={LoadingScreen} initialParams={{Auth:Auth,User:User}} />
//         </React.Fragment>
// }
// {
//     User != null && (User[0].email == null || User[0].verify == '0') ?
//         <>
//             <PanelStack.Screen name="Verify" component={VerifyScreen} initailParams={{setAuth:setAuth,setUser:setUser}}/>
//         </>:
//         <React.Fragment>
//             <PanelStack.Screen name="LoadingVerify" component={LoadingScreen} initialParams={{Auth:Auth,User:User}} />
//         </React.Fragment>
// }
