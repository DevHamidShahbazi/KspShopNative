import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, TouchableOpacity} from 'react-native';
import GlobalStyles from '../../../Global/components/Styles/GlobalStyles';
import axios from 'axios';
import LoginStyles from './LoginStyle';
import {ResponseData_Register_and_Login} from '../../components/FunctionAuth';


export function handleLogin (Fields,setErrors,navigation,setAuth,setVerify,setUser) {
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

export function BtnSubmitLogin (props) {
    return (
        <React.Fragment>
            <TouchableOpacity onPress={() => props.handleLogin(props.Fields,props.setErrors,props.setAuth,props.setVerify,props.setUser)} activeOpacity={.7} style={[GlobalStyles.Btn_Royal,GlobalStyles.Shadow_lg,{marginTop:'5%'}]}>
                <Text style={GlobalStyles.Text_Btn_Royal}>
                    ورود
                </Text>
            </TouchableOpacity>
        </React.Fragment>
    );
}

export function GoToForgetPasswordFromLogin ({navigation}) {
    return (
        <React.Fragment>
            <TouchableOpacity activeOpacity={.4} onPress={() => navigation.navigate('Basket')}>
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
             <TouchableOpacity activeOpacity={.4}>
                 <Text style={LoginStyles.Text_Go_To_Register} onPress={() => navigation.navigate('Register')}>
                     هنوز ثبت نام نکردم !!
                 </Text>
             </TouchableOpacity>
         </React.Fragment>
     );
 }
