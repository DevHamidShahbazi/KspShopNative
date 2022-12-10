import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export  function handleResetPassword (Fields,setErrors,setSuccesses) {
    AsyncStorage.getItem('api_token',(error, result) => {
        if (result){
            axios.post('v_1_0/reset-password', {
                password: Fields.password,
                password_confirmation: Fields.password_confirmation,
            },{
                headers:{
                    api_token:result
                }
            })
                .then(function (response) {
                    const {data} = response;
                    if (data.status == 'success'){
                        setErrors('')
                        AsyncStorage.removeItem('api_token')
                        AsyncStorage.setItem('api_token',data.api_token)
                        setSuccesses(data.message)
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
