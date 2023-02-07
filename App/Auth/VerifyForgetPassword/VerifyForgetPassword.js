import {
    React,useState,useEffect,useContext,UseSetFields,
    BoxAuth, GradientAuth, InputGroupAuth, TimerView,ActivityIndicator,
    Text, TouchableOpacity,GlobalStyles,NavigationSetOptionsVerify,
    handleVerifyForgetPassword,handleAgainVerifyForgetPassword,
    AuthContext, UserContext,
} from '../../Global/Import/Imports';
import LoginStyles from '../Login/components/LoginStyle';
export default function VerifyForgetPassword ({navigation ,route}) {
    const [Loading,setLoading] = useState(false);
    const {User,setUser} = useContext(UserContext);
    const {Auth,setAuth} = useContext(AuthContext);
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
                <ActivityIndicator style={{display:Loading?'flex':'none'}} animating={Loading} size="large" color="#213854" />
                <TouchableOpacity onPress={() => handleVerifyForgetPassword(navigation,Fields,setErrors,setSuccesses,UserName,setAuth,setUser,setLoading)}
                                  activeOpacity={.7}
                                  style={[{display:!Loading?'flex':'none'},GlobalStyles.Btn_Royal,GlobalStyles.Shadow_lg,{marginTop:'5%'}]}>
                    <Text style={GlobalStyles.Text_Btn_Royal}>تایید</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7}
                                  onPress={() => handleAgainVerifyForgetPassword(navigation,setErrors,setSuccesses,UserName,setTimer,setLoading)}
                                  style={[{display:!Loading?'flex':'none'},GlobalStyles.Btn_Primary,GlobalStyles.Shadow,{marginTop:'5%'}]}>
                    <Text style={GlobalStyles.Text_Btn_white}>دوباره ارسال کن</Text>
                </TouchableOpacity>
                <TimerView Timer={Timer}/>
                <TouchableOpacity activeOpacity={.4} onPress={() => {setErrors(''),navigation.navigate('Login')}}>
                    <Text style={LoginStyles.Text_Go_To_Register}>
                        بازگشت به صفحه ورود !!
                    </Text>
                </TouchableOpacity>
            </BoxAuth>
        </GradientAuth>
    );
}
