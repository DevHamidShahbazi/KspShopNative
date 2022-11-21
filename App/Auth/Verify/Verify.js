import React,{useState,useEffect} from 'react';
import { Text, TouchableOpacity,View} from 'react-native';
import {BoxAuth, GradientAuth, InputGroupAuth} from '../components/FunctionAuth';
import {UseSetFields} from '../../Global/components/Hooks/CustomHooks';
import {handleVerify, NavigationSetOptionsVerify} from './components/FunctionVerify';
import GlobalStyles from '../../Global/components/Styles/GlobalStyles';

export default function VerifyView ({navigation ,route,Auth,setAuth,setVerify}) {
    const [Errors,setErrors] = useState('');
    const {Fields,handleChange} = UseSetFields({
        code: '',
    });
    useEffect(()=>{
        NavigationSetOptionsVerify(navigation)
    },[]);
    return (
        <React.Fragment>
            <GradientAuth>
                <BoxAuth title={'کد ارسال شده را وارد کنید'} Errors={Errors}>
                    <InputGroupAuth  name={'code'} type={'numeric'} icon='mobile-alt' handleChange={handleChange} placeholder="کد ارسال شده به موبایل را وارد کنید" />
                    <TouchableOpacity onPress={() => handleVerify(Fields,setVerify,setErrors)} activeOpacity={.7} style={[GlobalStyles.Btn_Royal,GlobalStyles.Shadow_lg,{marginTop:'5%'}]}>
                        <Text style={GlobalStyles.Text_Btn_Royal}>
                            تایید
                        </Text>
                    </TouchableOpacity>
                </BoxAuth>
            </GradientAuth>
        </React.Fragment>
    );
}
