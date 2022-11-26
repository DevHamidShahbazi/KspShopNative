import React,{useState} from 'react';
import {BoxAuth, GradientAuth, InputGroupAuth} from '../components/FunctionAuth';
import {UseSetFields} from '../../Global/components/Hooks/CustomHooks';
import GlobalStyles from '../../Global/components/Styles/GlobalStyles';
import {Text, TouchableOpacity} from 'react-native';
import handleForgetPassword from './components/ForgetPasswordFunction';

export default function ForgetPassword ({navigation,route}) {
    const [Errors,setErrors] = useState('');
    const {Fields,handleChange} = UseSetFields({
        username: '',
    });
    return (
        <GradientAuth>
            <BoxAuth title={'فراموشی رمز عبور'} Errors={Errors}>
                <InputGroupAuth name={'username'} type={'default'} icon='mobile-alt' handleChange={handleChange} placeholder="شماره موبایل یا ایمیل خود را وارد کنید" />
                <TouchableOpacity onPress={() => handleForgetPassword(navigation ,Fields,setErrors)} activeOpacity={.7} style={[GlobalStyles.Btn_Royal,GlobalStyles.Shadow_lg,{marginTop:'5%'}]}>
                    <Text style={GlobalStyles.Text_Btn_Royal}>تایید</Text>
                </TouchableOpacity>
            </BoxAuth>
        </GradientAuth>
    );
}
