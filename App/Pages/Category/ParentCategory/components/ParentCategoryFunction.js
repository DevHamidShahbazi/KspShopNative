import {axios, React} from '../../../../Global/Import/Imports';

export function getDetailParentCategory (category_id,setData,setLoading) {
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
                });
                setLoading(false)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
