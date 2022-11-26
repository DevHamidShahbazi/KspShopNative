import React from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function handleVerifyForgetPassword (navigation,Fields,setErrors,setSuccesses,UserName,setAuth,setUser) {
    axios.post('v_1_0/verify/forget-password', {
        code: Fields.code,
        username:UserName
    })
        .then(function (response) {
            const {data} = response;
            if (data.status == 'success'){
                setErrors('')
                AsyncStorage.setItem('Auth',JSON.stringify(true))
                AsyncStorage.setItem('api_token',data.user.api_token)
                AsyncStorage.setItem('user',JSON.stringify(data.user))
                setAuth(true)
                setUser([data.user])
                navigation.navigate('Panel')
            }else {
                setSuccesses('')
                setErrors(data.message);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    return null
}
export function handleAgainVerifyForgetPassword (navigation,setErrors,setSuccesses,UserName,setTimer) {
    axios.post('v_1_0/forget-password', {
        username:UserName
    })
        .then(function (response) {
            const {data} = response;
            if (data.status == 'success'){
                setErrors('')
                setTimer(50)
                setSuccesses('کد برای شما ارسال شد')
            }else {
                setSuccesses('')
                setErrors(data.message);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    return null
}
