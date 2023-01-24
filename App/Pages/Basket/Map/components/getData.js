import {React, axios, AsyncStorage} from '../../../../Global/Import/Imports';
const getData = (setLoading,setRegion,setRender,Render) => {
    AsyncStorage.getItem('api_token',(error, result) => {
        if (result){
            axios.post('v_1_0/get-map', {},{
                headers:{
                    api_token:result
                }
            })
                .then(function (response) {
                    const {data} = response;
                    if (typeof data == 'string'){
                        setRender(Render+1)
                    }else {
                        if (data.status == 'success'){
                            setLoading(false)
                            if (data.location != null){
                                setRegion({
                                    latitude:parseFloat(data.location.lat),
                                    longitude:parseFloat(data.location.lng),
                                })
                            }
                        }
                    }
                })
                .catch(function (error) {
                    console.log(error)
                });
        }else {
            console.log('توکن نامعتبر')
        }

    })
};
export default getData;
