import {React, axios} from '../../../../Global/Import/Imports';
export function getDetailChildCategory (category_id,setData,setLoading) {
    axios.post('v_1_0/child-category',{
        'category_id':category_id
    })
        .then(function (response) {
            const {data} = response;
            if (data.status == 'success'){
                setData({
                    Products:data.Products,
                    ProductsHighlight:data.ProductsHighlight,
                    h1:data.h1,
                    name:data.name,
                });
                setLoading(false)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
