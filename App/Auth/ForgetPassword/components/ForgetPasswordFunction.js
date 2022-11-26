import React from 'react';
import axios from 'axios';
export default function handleForgetPassword (navigation ,Fields,setErrors) {
    axios.post('v_1_0/forget-password', {
        username: Fields.username,
    })
        .then(function (response) {
            const {data} = response;
            if (data.status == 'success'){
                setErrors('')
                navigation.navigate('Panel',
                    {
                        screen:'VerifyForgetPassword',
                        params:{UserName:Fields.username}
                    })
            }else {
                setErrors(data.message);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
