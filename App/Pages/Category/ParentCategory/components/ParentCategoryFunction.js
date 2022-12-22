import {axios, React} from '../../../../Global/Import/Imports';

export function getDetailParentCategory (category_id,setData) {
    axios.post('v_1_0/parent-category',{
        'category_id':category_id
    })
        .then(function (response) {
            const {data} = response;
            if (data.status == 'success'){
                setData({
                    Products:data.Products,
                    CustomBanner:data.CustomBanner,
                    ChildCategory:data.ChildCategories,
                    h1:data.h1,
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
