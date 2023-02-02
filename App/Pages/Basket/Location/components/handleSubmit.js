import {React,AsyncStorage, axios,Linking} from '../../../../Global/Import/Imports';

export default function handleSubmit(setErrors,Fields) {
    let url = axios.defaults.baseURL+'v_1_0/store/payment';
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
                    url +=`?api_token=${result}`;
                    url +=`&order_code=${data.order_code}`;
                    if (Linking.canOpenURL(url)){
                        Linking.openURL(url);
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
