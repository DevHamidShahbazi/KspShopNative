import React from 'react';
import {AsyncStorage, axios} from '../../../../Global/Import/Imports';

export default function handleSubmit({setErrors,Fields}) {
    AsyncStorage.getItem('api_token',(error, result) => {
        if (result){
            axios.post('v_1_0/set-location',{
                name: Fields.name,
                last_name: Fields.last_name,
                state: Fields.state,
                city: Fields.city,
                address: Fields.address,
                plaque: Fields.plaque,
                unit: Fields.unit,
                code_post: Fields.code_post,
                number: Fields.number,
            },{
                headers:{
                    api_token:result
                }
            })
                .then(function (response) {
                    const {data} = response;
                    console.log(data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }else {
            console.log('توکن نامعتبر')
        }

    })
}
