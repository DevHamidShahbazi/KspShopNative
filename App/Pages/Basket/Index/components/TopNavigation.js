import {React,View,Text} from '../../../../Global/Import/Imports';
import {CategoriesStyles} from '../../../Category/Index/components/CategoriesStyles';

export default function TopNavigation() {
    return (
        <React.Fragment>
            <View style={[CategoriesStyles.container,{justifyContent:'center'}]}>
                <Text style={{textAlign:'center',fontFamily:'Vazir-Bold',fontSize:19,color:'#fff'}}>
                    سبد خرید
                </Text>
            </View>
        </React.Fragment>
    );
}
