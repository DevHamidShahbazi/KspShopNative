import {React, axios,} from '../../../Global/Import/Imports';
export default function getData (setData,setLoading) {
    axios.post('v_1_0/home')
        .then(function (response) {
            const {data} = response;
            if (data.status == 'success'){
                setData({
                    'Highlight':data.highlights,
                    'Categories':data.categories,
                    'CustomProducts':data.CustomProducts,
                });
                setLoading(false);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
