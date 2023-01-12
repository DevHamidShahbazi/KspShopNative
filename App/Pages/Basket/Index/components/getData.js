import {React,axios} from '../../../../Global/Import/Imports';

const getData = (setLoading,setBasket,setIsEmpty) => {
    axios.post('v_1_0/basket')
        .then(function (response) {
            const {data} = response;
            if (data.count > 0){
                setIsEmpty(false)
            }else {
                setIsEmpty(true)
            }
            setLoading(false)
            setBasket(data)
        })
        .catch(function (error) {
            console.log(error);
        });
};

export default getData;
