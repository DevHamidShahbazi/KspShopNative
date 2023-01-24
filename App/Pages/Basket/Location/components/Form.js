import {React, View, Text, TextBold,useState, UseSetFields,CustomTextInput} from '../../../../Global/Import/Imports';
import Styles from './Styles';
export default function Form(props) {
    const [Errors,setErrors] = useState('');
    const {Fields,handleChange} = UseSetFields({
        name: null,
        last_name: null,
        address: null,
    });
    return (
        <React.Fragment>
            <View style={Styles.FormContainer}>
                <View style={{backgroundColor : '#213854'}}>
                    <Text style={Styles.titleBox}>
                        تکمیل اطلاعات برای پرداخت
                    </Text>
                </View>
                <View style={{flex:1,padding:5}}>
                    <CustomTextInput
                        placeholder={'نام گیرنده محصول را وارد کنید'}
                        styleContainer={{marginVertical:'2%'}}
                        Label={'نام گیرنده'} require={true}
                        value={Fields.name} name={'name'}/>
                    <CustomTextInput
                        placeholder={'نام خانوادگی گیرنده محصول را وارد کنید'}
                        styleContainer={{marginVertical:'2%'}}
                        Label={'نام خانوادگی گیرنده'} require={true}
                        value={Fields.last_name} name={'last_name'}/>
                    <CustomTextInput
                        styleInput={{height:90}}
                        placeholder={'آدرس محل دریافت محصول را وارد کنید'}
                        styleContainer={{marginVertical:'2%'}}
                        Label={'آدرس'} require={true}
                        value={Fields.address} name={'address'}/>
                </View>
            </View>
        </React.Fragment>
    );
}
