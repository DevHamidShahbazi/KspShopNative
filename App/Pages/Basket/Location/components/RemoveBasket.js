import {React, axios} from '../../../../Global/Import/Imports';

const RemoveBasket = () => {
    axios.post('v_1_0/remove/basket',{})
        .then(function (response) {
            //
        })
        .catch(function (error) {
            //
        });
};
export default RemoveBasket;
