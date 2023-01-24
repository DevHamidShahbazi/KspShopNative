import {React, axios, AsyncStorage} from '../../../../Global/Import/Imports';

const handleSubmit = (Region,setLoading,navigation) => {
    setLoading(true)
    AsyncStorage.getItem('api_token',(error, result) => {
        if (result){
            axios.post('v_1_0/map', {
                lat: Region.latitude,
                lng: Region.longitude,
            },{
                headers:{
                    api_token:result
                }
            })
                .then(function (response) {
                    const {data} = response;
                    setLoading(false)
                    if (data.status == 'success'){
                        navigation.navigate('Location')
                    }else {
                        navigation.goBack()
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
export default handleSubmit;
