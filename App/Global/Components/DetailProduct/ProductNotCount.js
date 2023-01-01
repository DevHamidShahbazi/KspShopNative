import {React,View,TextBold,TextRegular} from '../../Import/Imports';

export default function ProductNotCount (props) {
    return (
        <React.Fragment>
            <View style={{flex:1,borderRadius:5,backgroundColor:'#ffc107'}}>
                <TextBold style={{textAlign:'center',fontSize:15}}>امکان خرید این محصول به صورت آنلاین وجود ندارد</TextBold>
                <TextRegular style={{textAlign:'center'}}>جهت خرید تماس بگیرید</TextRegular>
                <TextBold style={{textAlign:'center',marginTop:'2%'}}>021-46119400</TextBold>
            </View>
        </React.Fragment>
    );
}
