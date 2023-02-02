import {React, axios} from '../../../../Global/Import/Imports';

const RemoveBasket = () => {
    axios.post('v_1_0/remove/basket',{})
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        });
};
export default RemoveBasket;
