import {React, axios} from '../../../../Global/Import/Imports';
export function getDetailChildCategory (category_id,setData) {
    axios.post('v_1_0/child-category',{
        'category_id':category_id
    })
        .then(function (response) {
            const {data} = response;
            if (data.status == 'success'){
                setData({
                    Products:data.Products,
                    h1:data.h1,
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
