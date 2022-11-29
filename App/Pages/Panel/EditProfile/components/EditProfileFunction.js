import React from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text} from 'react-native';

export const handleEditProfile = (navigation ,Fields,setErrors,setUser,setSuccesses) => {
    AsyncStorage.getItem('api_token',(error, result) => {
        if (result){
            axios.post('v_1_0/edit-profile', {
                name: Fields.name,
                phone: Fields.phone,
            },{
                headers:{
                    api_token:result
                }
            })
                .then(function (response) {
                    const {data} = response;
                    console.log(data)
                    if (data.status == 'success'){
                        setErrors('')
                        AsyncStorage.removeItem('user')
                        AsyncStorage.setItem('user',JSON.stringify(data.user))
                        setUser(data.user)
                        if (data.user.phone == Fields.phone){
                            setSuccesses(data.message)
                        }
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
};

export function TextWarningPhoneMustNotNull (phone) {
    return phone==null? <Text style={{fontFamily:'Vazir',color:'red',textAlign:'center'}}>برای خرید از فروشگاه لازم است شماره موبایل خود را وارد و تایید کنید</Text>:null;
}


