import React from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function handleForgetPassword (navigation ,Fields,setErrors,setSuccesses) {
    axios.post('v_1_0/forget-password', {
        username: Fields.username,
    })
        .then(function (response) {
            const {data} = response;
            if (data.status == 'success'){
                setErrors('')
                if (data.type == 'phone'){
                    setSuccesses(data.message)
                    // navigation.navigate('Panel',{screen:'VerifyForgetPassword'})
                }else {
                    setSuccesses(data.message)
                }
            }else {
                setSuccesses('');
                setErrors(data.message);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
