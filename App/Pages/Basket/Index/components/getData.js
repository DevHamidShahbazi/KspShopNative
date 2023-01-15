import {React,axios} from '../../../../Global/Import/Imports';

const getData = (setLoading,setBasket,setIsEmpty,setFactor,setRender,Render) => {
    axios.post('v_1_0/basket')
        .then(function (response) {
            const {data} = response;
            if (typeof data == 'string'){
                setRender(Render+1)
            }else {
                if (data.count > 0){
                    setIsEmpty(false)
                }else {
                    setIsEmpty(true)
                }
                setLoading(false)
                setBasket(data)
                setFactor(data.factor=='1'?true:false)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
};

export default getData;
