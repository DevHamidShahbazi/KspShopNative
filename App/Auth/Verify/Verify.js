import {React,useState, useEffect, useContext,UseSetFields,GlobalStyles,AuthContext, UserContext, Text, TouchableOpacity,BoxAuth, GradientAuth, InputGroupAuth, TimerView, handleAgainVerify, handleVerify, NavigationSetOptionsVerify, SendCodeWithViewVerify,} from '../../Global/Import/Imports';
export default function VerifyScreen ({navigation}) {
    const [Loading,setLoading] = useState(false);
    const {User,setUser} = useContext(UserContext)
    const {Auth,setAuth} = useContext(AuthContext)
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
                    <TouchableOpacity onPress={() => handleVerify(navigation,Fields,setErrors,setSuccesses,setUser,setAuth)} activeOpacity={.7} style={[GlobalStyles.Btn_Royal,GlobalStyles.Shadow_lg,{marginTop:'5%'}]}>
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
