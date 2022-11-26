import React from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export function handleVerify (navigation,Fields,setErrors,setSuccesses) {

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
                        setErrors('')
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

export function handleAgainVerify (navigation,setErrors,setSuccesses,setTimer) {

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
                        setTimer(50)
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

export function SendCodeWithViewVerify (setSuccesses,setTimer,setErrors) {
        AsyncStorage.getItem('user',(error, user) => {
            if (user){
                axios.post('v_1_0/verify-show', {
                    phone:JSON.parse(user).phone
                },{
                    headers:{
                        api_token:JSON.parse(user).api_token
                    }
                })
                    .then(function (response) {
                        const {data} =response
                        if (data.status == 'success'){
                            setErrors('')
                            setTimer(50)
                            setSuccesses('کد برای شما پیامک شد')
                        }else {
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
