import {React,axios} from '../../../Global/Import/Imports';
export default function getData (product_id,setData,setLoading) {
    axios.post('v_1_0/product-detail',{
        'product_id':product_id
    })
        .then(function (response) {
            const {data} = response;
            if (data.status == 'success'){
                setData(data.data)
                setLoading(false)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
