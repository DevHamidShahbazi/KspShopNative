import React from 'react';
import axios from 'axios';

export function handleVerify (Fields,setVerify,setErrors) {
    axios.post('v_1_0/verify', {
        code: Fields.code,
    })
        .then(function (response) {
            const {data} = response;
            console.log(data)
            // setErrors('')
            // const {data} = response;
            // if (data.status == 'success'){
            //
            // }else {
            //     setErrors(data.message);
            // }
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function NavigationSetOptionsVerify (navigation) {
    return (
        navigation.setOptions({
            headerShown: false
        })
    )
}
