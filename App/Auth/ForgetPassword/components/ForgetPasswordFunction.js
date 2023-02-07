import {React,axios} from '../../../Global/Import/Imports';
export default function handleForgetPassword (navigation ,Fields,setErrors,setLoading) {
    setLoading(true)
    axios.post('v_1_0/forget-password', {
        username: Fields.username,
    })
        .then(function (response) {
            const {data} = response;
            if (data.status == 'success'){
                setErrors('')
                setLoading(false)
                navigation.navigate('Panel',
                    {
                        screen:'VerifyForgetPassword',
                        params:{UserName:Fields.username}
                    })
            }else {
                setLoading(false)
                setErrors(data.message);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
