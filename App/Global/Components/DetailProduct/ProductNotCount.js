import {React,View,TextBold,TextRegular,RFValue,Linking,TouchableOpacity} from '../../Import/Imports';
export default function ProductNotCount () {
    return (
        <React.Fragment>
            <View style={{flex:1,borderRadius:5,backgroundColor:'#ffc107'}}>
                <TextBold style={{textAlign:'center',fontSize:RFValue(15+1)}}>امکان خرید این محصول به صورت آنلاین وجود ندارد</TextBold>
                <TextRegular style={{textAlign:'center',fontSize:RFValue(14+1)}}>جهت خرید تماس بگیرید</TextRegular>
                <TouchableOpacity onPress={() => Linking.openURL('tel:09124949028')}>
                    <TextBold style={{textAlign:'center',marginTop:'2%',fontSize:RFValue(14+1)}}>09124949028</TextBold>
                </TouchableOpacity>
            </View>
        </React.Fragment>
    );
}
