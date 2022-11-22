import React from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CheckAuth, CheckUser, CheckVerify, LogOut} from '../../components/FunctionAuth';

export function handleVerify (navigation,Fields,setVerify,setErrors,setSuccesses) {

    AsyncStorage.getItem('api_token',(error, result) => {
        if (result){
            axios.post('v_1_0/verify', {
                code: Fields.code,
            },{
                headers:{
                    api_token:result
                }
            })
                .then(function (response) {
                    const {data} = response;
                    if (data.status == 'success'){
                        console.log('success')
                        AsyncStorage.setItem('Verify',JSON.stringify(true))
                        setErrors('')
                        setVerify(true)
                        navigation.navigate('Panel',{screen:'Profile'})
                    }else {
                        setSuccesses('')
                        setErrors(data.message);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }else {
            console.log('توکن نامعتبر')
        }

    })


}

export function handleAgainVerify (navigation,setErrors,setSuccesses) {

    AsyncStorage.getItem('api_token',(error, result) => {
        if (result){
            axios.post('v_1_0/verify-again', {},{
                headers:{
                    'api_token':result
                }
            })
                .then(function (response) {
                    const {data} = response;
                    if (data.status == 'success'){
                        setErrors('')
                        setSuccesses('کد برای شما پیامک شد')
                    }else {
                        setSuccesses('')
                        setErrors(data.message);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }else {
            return null;
        }
    })
    return null;
}

export function NavigationSetOptionsVerify (navigation) {
    return (
        navigation.setOptions({
            headerShown: false
        })
    )
}
