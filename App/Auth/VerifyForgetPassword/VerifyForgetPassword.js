import React, {useState,useEffect,useContext} from 'react';
import {BoxAuth, GradientAuth, InputGroupAuth, TimerView} from '../components/FunctionAuth';
import {UseSetFields} from '../../Global/components/Hooks/CustomHooks';
import {Text, TouchableOpacity} from 'react-native';
import GlobalStyles from '../../Global/components/Styles/GlobalStyles';
import {handleVerifyForgetPassword,handleAgainVerifyForgetPassword} from './components/FunctionVerifyForgetPassword';
import {NavigationSetOptionsVerify} from '../Verify/components/FunctionVerify';
import {AuthContext, UserContext} from '../../Global/components/Context/CustomContext';

export default function VerifyForgetPassword ({navigation ,route}) {
    const {User,setUser} = useContext(UserContext)
    const {Auth,setAuth} = useContext(AuthContext)
    const {UserName} = route.params;
    const [Errors,setErrors] = useState('');
    const [Timer,setTimer] = useState(0);
    const [Successes,setSuccesses] = useState('');
    const {Fields,handleChange} = UseSetFields({
        code: '',
    });
    useEffect(()=>{
        NavigationSetOptionsVerify(navigation)
        setInterval(() => setTimer(seconds => seconds - 1), 1000);
    },[]);
    return (
        <GradientAuth>
            <BoxAuth title={'کد ارسال شده را وارد کنید'} Errors={Errors} Successes={Successes}>
                <InputGroupAuth  name={'code'} type={'numeric'} icon='mobile-alt' handleChange={handleChange} placeholder="کد ارسال شده را وارد کنید" />
                <TouchableOpacity onPress={() => handleVerifyForgetPassword(navigation,Fields,setErrors,setSuccesses,UserName,setAuth,setUser)} activeOpacity={.7} style={[GlobalStyles.Btn_Royal,GlobalStyles.Shadow_lg,{marginTop:'5%'}]}>
                    <Text style={GlobalStyles.Text_Btn_Royal}>
                        تایید
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} onPress={() => handleAgainVerifyForgetPassword(navigation,setErrors,setSuccesses,UserName,setTimer)} style={[GlobalStyles.Btn_Primary,GlobalStyles.Shadow,{marginTop:'5%'}]}>
                    <Text style={GlobalStyles.Text_Btn_white}>
                        دوباره ارسال کن
                    </Text>
                </TouchableOpacity>
                <TimerView Timer={Timer}/>
            </BoxAuth>
        </GradientAuth>
    );
}
