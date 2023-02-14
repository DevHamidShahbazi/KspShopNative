import {
    React,TouchableOpacity,Icon,Platform,
    View, Text, TextBold,useState,Linking,
    UseSetFields,CustomTextInput} from '../../../../Global/Import/Imports';
import Styles from './Styles';
import handleSubmit from './handleSubmit';
export default function Form({Location}) {
    const [Errors,setErrors] = useState('');
    const {Fields,handleChange} = UseSetFields({
        name: Location.name,
        last_name: Location.last_name,
        state: Location.state,
        city: Location.city,
        address: Location.address,
        plaque: Location.plaque,
        unit: Location.unit,
        code_post: Location.code_post,
        number: Location.number,
    });
    return (
        <React.Fragment>
            <View style={Styles.FormContainer}>
                <View style={{backgroundColor : '#213854'}}>
                    <Text style={Styles.titleBox}>تکمیل اطلاعات برای پرداخت</Text>
                </View>
                <View style={{flex:1,padding:5}}>
                    <CustomTextInput
                        handleChange={handleChange}
                        placeholder={'نام گیرنده محصول را وارد کنید'}
                        styleContainer={{marginVertical:'2%'}}
                        Label={'نام گیرنده'} require={true}
                        value={Fields.name} name={'name'}/>
                    <CustomTextInput
                        handleChange={handleChange}
                        placeholder={'نام خانوادگی گیرنده محصول را وارد کنید'}
                        styleContainer={{marginVertical:'2%'}}
                        Label={'نام خانوادگی گیرنده'} require={true}
                        value={Fields.last_name} name={'last_name'}/>
                    <CustomTextInput
                        handleChange={handleChange}
                        placeholder={'استان خود را وارد کنید'}
                        styleContainer={{marginVertical:'2%'}}
                        Label={'استان'} require={true}
                        value={Fields.state} name={'state'}/>
                    <CustomTextInput
                        handleChange={handleChange}
                        placeholder={'شهر خود را وارد کنید'}
                        styleContainer={{marginVertical:'2%'}}
                        Label={'شهر'} require={true}
                        value={Fields.city} name={'city'}/>
                    <CustomTextInput
                        handleChange={handleChange}
                        multiline={true} styleInput={{height:90}}
                        placeholder={'آدرس محل دریافت محصول را وارد کنید'}
                        styleContainer={{marginVertical:'2%'}}
                        Label={'آدرس'} require={true}
                        value={Fields.address} name={'address'}/>
                    <Text style={{color:'red',marginBottom:'2%',fontSize:12,fontFamily:'Vazir'}}>
                        آدرس طبق موقعیت مکانی که انتخاب کردید ثبت شده است در صورت عدم تطابق با آدرس شما ، آدرس دقیق خود را وارد کنید
                    </Text>
                    <CustomTextInput
                        handleChange={handleChange}
                        placeholder={'پلاک خود را وارد کنید'}
                        styleContainer={{marginVertical:'2%'}}
                        Label={'پلاک'} require={true}
                        value={Fields.plaque} name={'plaque'}/>
                    <CustomTextInput
                        handleChange={handleChange}
                        type={'numeric'}
                        placeholder={'شماره واحد خود را وارد کنید'}
                        styleContainer={{marginVertical:'2%'}}
                        Label={'واحد'} require={true}
                        value={Fields.unit} name={'unit'}/>
                    <CustomTextInput
                        handleChange={handleChange}
                        type={'numeric'}
                        placeholder={'کدپستی خود را وارد کنید'}
                        styleContainer={{marginVertical:'2%'}}
                        Label={'کدپستی'} value={Fields.code_post}
                        name={'code_post'}/>
                    <CustomTextInput
                        handleChange={handleChange}
                        type={'numeric'}
                        placeholder={'شماره موبایل خود را وارد کنید'}
                        styleContainer={{marginVertical:'2%'}}
                        Label={'شماره موبایل'} value={Fields.number}
                        require={true} name={'number'}/>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity style={Styles.btnSubmit} onPress={() => handleSubmit(setErrors,Fields)} activeOpacity={.7}>
                                <Text style={Styles.textBtnSubmit}>
                                    پرداخت
                                </Text>
                                <Icon  size={18} color={'#fff'} name={'credit-card'}/>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
        </React.Fragment>
    );
}
