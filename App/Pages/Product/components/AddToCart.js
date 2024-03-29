import {React, axios, ToastAndroid, useContext, BasketContext, CheckBasket} from '../../../Global/Import/Imports';
export function AddToCart (product,setBasketCount) {
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
                CheckBasket(setBasketCount)
                ToastAndroid.show(data.message,
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTON,
                    )
            }else {
                ToastAndroid.show(data.message,
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTON,
                )
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
