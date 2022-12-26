import {React, axios,} from '../../../Global/Import/Imports';
export default function getData (Search,setItems) {
    axios.post('v_1_0/search',{
        'name':Search
    })
        .then(function (response) {
            const {data} = response;
            if (data.status == 'success'){
                setItems(data.items)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
