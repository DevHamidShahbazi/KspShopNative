import {React,axios} from '../../../Global/Import/Imports';
export default function getData (setBody,setLoading,setRender,Render) {
    axios.post('v_1_0/about')
        .then(function (response) {
            const {data} = response;
            if (typeof data == 'string'){
                setRender(Render+1)
            }else {
                if (data.status == 'success'){
                    setBody(data.body)
                    setLoading(false)
                }
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
