import {React, axios,} from '../../../Global/Import/Imports';
export default function getData (Search,setData) {
    axios.post('v_1_0/search',{
        'name':Search
    })
        .then(function (response) {
            const {data} = response;
            if (data.status == 'success'){
                setData({
                    'Products':data.products,
                    'Categories':data.categories,
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
