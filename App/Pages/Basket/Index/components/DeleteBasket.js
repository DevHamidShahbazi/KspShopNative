import {
    React, Text, TouchableOpacity,
    View, Icon, Alert, axios, useContext, BasketContext, CheckBasket,
} from '../../../../Global/Import/Imports';
import Styles from './Styles';
export default function DeleteBasket({item,setRender,Render}) {
    const {setBasketCount} = useContext(BasketContext)
    const AlertDelete = () => {
        Alert.alert(
            "حذف شود؟؟",
            `${item.product.DefName}`,
            [
                {
                    text: "نه بیخیال",
                    style: {
                        fontFamily:'Vazir'
                    }
                },
                {
                    text: "بله",
                    onPress: () => handleDelete()
                }
            ],
        );
    }

    const handleDelete = () => {
        axios.post('v_1_0/basket/destroy', {
            id: item.id,
        })
            .then(function (response) {
                const {data} = response;
                if (data.status == 'success'){
                    CheckBasket(setBasketCount)
                    setRender(Render+1)
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    };

    return (
        <React.Fragment>
            <TouchableOpacity onPress={() => AlertDelete()}
                              style={Styles.btnDelete}
                              activeOpacity={.7}>
                <Text style={Styles.textBtnSubmit}>حذف</Text>
                <Icon name={'trash'} color={'#fff'} size={14} />
            </TouchableOpacity>
        </React.Fragment>
    );
}



