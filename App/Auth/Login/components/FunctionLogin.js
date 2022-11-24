import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, TouchableOpacity} from 'react-native';
import GlobalStyles from '../../../Global/components/Styles/GlobalStyles';
import axios from 'axios';
import LoginStyles from './LoginStyle';
import {ResponseData_Register_and_Login} from '../../components/FunctionAuth';


export function handleLogin (navigation ,Fields,setErrors,setAuth,setVerify,setUser) {
    axios.post('v_1_0/login', {
        username: Fields.username,
        password: Fields.password,
    })
        .then(function (response) {
            ResponseData_Register_and_Login(response,setErrors,navigation,setAuth,setVerify,setUser)
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function GoToForgetPasswordFromLogin ({navigation}) {
    return (
        <React.Fragment>
            <TouchableOpacity activeOpacity={.4} onPress={() => navigation.navigate('ForgetPassword')}>
                <Text style={LoginStyles.Text_Go_To_ForgetPassword}>
                    رمز عبور را فراموش کردم !!
                </Text>
            </TouchableOpacity>
        </React.Fragment>
    );
}
 export function GoToRegisterFromLogin ({navigation}) {
     return (
         <React.Fragment>
             <TouchableOpacity activeOpacity={.4} onPress={() => navigation.navigate('Register')}>
                 <Text style={LoginStyles.Text_Go_To_Register}>
                     هنوز ثبت نام نکردم !!
                 </Text>
             </TouchableOpacity>
         </React.Fragment>
     );
 }

 export function NavigationSetOptionsLogin (navigation) {
     return (
         navigation.setOptions({
             headerShown: false
         })
     )
 }
