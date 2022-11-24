import React,{useState,useEffect} from 'react';
import { Text, TouchableOpacity,View} from 'react-native';
import {BoxAuth, GradientAuth, InputGroupAuth} from '../components/FunctionAuth';
import {UseSetFields} from '../../Global/components/Hooks/CustomHooks';
import {
    handleAgainVerify,
    handleVerify,
    NavigationSetOptionsVerify,
    SendCodeWithViewVerify, TimerView,
} from './components/FunctionVerify';
import GlobalStyles from '../../Global/components/Styles/GlobalStyles';

export default function VerifyView ({navigation ,route,Auth,setAuth,setVerify}) {
    const [Errors,setErrors] = useState('');
    const [Timer,setTimer] = useState(0);
    const [Successes,setSuccesses] = useState('');
    const {Fields,handleChange} = UseSetFields({
        code: '',
    });
    useEffect(()=>{
        NavigationSetOptionsVerify(navigation)
        SendCodeWithViewVerify(setSuccesses,setTimer,setErrors)
        setInterval(() => setTimer(seconds => seconds - 1), 1000);
    },[]);
    return (
        <React.Fragment>
            <GradientAuth>
                <BoxAuth title={'کد ارسال شده را وارد کنید'} Errors={Errors} Successes={Successes}>
                    <InputGroupAuth  name={'code'} type={'numeric'} icon='mobile-alt' handleChange={handleChange} placeholder="کد ارسال شده را وارد کنید" />
                    <TouchableOpacity onPress={() => handleVerify(navigation,Fields,setVerify,setErrors,setSuccesses)} activeOpacity={.7} style={[GlobalStyles.Btn_Royal,GlobalStyles.Shadow_lg,{marginTop:'5%'}]}>
                        <Text style={GlobalStyles.Text_Btn_Royal}>
                            تایید
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} onPress={() => handleAgainVerify(navigation,setErrors,setSuccesses,setTimer)} style={[GlobalStyles.Btn_Primary,GlobalStyles.Shadow,{marginTop:'5%'}]}>
                        <Text style={GlobalStyles.Text_Btn_white}>
                            دوباره ارسال کن
                        </Text>
                    </TouchableOpacity>
                    <TimerView Timer={Timer}/>
                </BoxAuth>
            </GradientAuth>
        </React.Fragment>
    );
}
