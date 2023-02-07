import {React, axios, AsyncStorage} from '../../../../Global/Import/Imports';

const getData = (setLocation,setLoading,setBasket,setIsEmpty,setFactor,setRender,Render) => {
    AsyncStorage.getItem('api_token',(error, result) => {
        if (result){
            axios.post('v_1_0/get-location',{},{
                headers:{
                    api_token:result
                }
            })
                .then(function (response) {
                    const {data} = response;
                    // console.log(data.count)
                    if (typeof data == 'string'){
                        setRender(Render+1)
                    }else {
                        if (data.count > 0){
                            setIsEmpty(false)
                        }else {
                            setIsEmpty(true)
                        }
                        setLoading(false)
                        setLocation(data.location)
                        setBasket(data)
                        setFactor(data.factor=='1'?true:false)
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

export default getData;
