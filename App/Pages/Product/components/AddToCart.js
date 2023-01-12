import React from 'react';
import {axios} from '../../../Global/Import/Imports';
import {Alert} from 'react-native';

export function AddToCart (product) {
    const url = TypeUrl(product.type);
    axios.post(`v_1_0${url}`, {
        product_id: product.id,
        size_id: product.id,
        attribute_id: product.id,
        count: 1,
    })
        .then(function (response) {
            const {data} = response;
            if (data.status == 'success'){
                Alert.alert(data.message)
            }else {
                Alert.alert(data.message)
            }
        })
        .catch(function (error) {
            console.log(error)
        });
}

const TypeUrl = (type) => {
    let Url;
    switch (type) {
        case 'simple':
            Url = '/cart/put/product';
            break
        case 'size':
            Url = '/cart/put/size';
            break
        case 'attribute':
            Url = '/cart/put/attribute';
            break
    }
    return Url
};
