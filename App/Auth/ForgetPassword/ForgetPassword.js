import {
    React,useEffect, useState,UseSetFields,
    BoxAuth, GradientAuth, InputGroupAuth,
    Text, TouchableOpacity,GlobalStyles,ActivityIndicator,
    handleForgetPassword, NavigationSetOptionsForgetPassword,
} from '../../Global/Import/Imports';
export default function ForgetPassword ({navigation,route}) {
    const [Loading,setLoading] = useState(false);
    const [Errors,setErrors] = useState('');
    const {Fields,handleChange} = UseSetFields({
        username: '',
    });
    useEffect(()=>{
        NavigationSetOptionsForgetPassword(navigation)
    },[]);
    return (
        <GradientAuth>
            <BoxAuth title={'فراموشی رمز عبور'} Errors={Errors}>
                <InputGroupAuth name={'username'} type={'default'} icon='mobile-alt' handleChange={handleChange} placeholder="شماره موبایل یا ایمیل خود را وارد کنید" />
                <ActivityIndicator style={{display:Loading?'flex':'none'}} animating={Loading} size="large" color="#213854" />
                <TouchableOpacity onPress={() => handleForgetPassword(navigation ,Fields,setErrors,setLoading)} activeOpacity={.7}
                                  style={[{display:!Loading?'flex':'none'},GlobalStyles.Btn_Royal,GlobalStyles.Shadow_lg,{marginTop:'5%'}]}>
                    <Text style={GlobalStyles.Text_Btn_Royal}>تایید</Text>
                </TouchableOpacity>
            </BoxAuth>
        </GradientAuth>
    );
}
