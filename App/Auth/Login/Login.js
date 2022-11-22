import React, {useState,useEffect} from 'react';
import {BoxAuth, GradientAuth, InputGroupAuth, InputGroupPassAuth} from '../components/FunctionAuth';
import {UseSetFields} from '../../Global/components/Hooks/CustomHooks';
import {GoToForgetPasswordFromLogin, GoToRegisterFromLogin, handleLogin, NavigationSetOptionsLogin,} from './components/FunctionLogin';
import GlobalStyles from '../../Global/components/Styles/GlobalStyles';
import {Text, TouchableOpacity} from 'react-native';
export default function Login ({navigation ,route,setVerify,setAuth,setUser}) {
    const [Eye,setEye] = useState(false);
    const [Errors,setErrors] = useState('');
    const {Fields,handleChange} = UseSetFields({
        username: '',
        password: '',
    });
    useEffect(()=>{
        NavigationSetOptionsLogin(navigation)
    },[]);
     return (
         <GradientAuth>
             <BoxAuth title={'ورود'} Errors={Errors}>
                 <InputGroupAuth name={'username'} type={'default'} icon='mobile-alt' handleChange={handleChange} placeholder="شماره موبایل یا ایمیل خود را وارد کنید" />
                 <InputGroupPassAuth name={'password'} Eye={Eye} setEye={setEye} icon='lock' handleChange={handleChange} placeholder="رمز عبور خود را وارد کنید" />
                 <TouchableOpacity onPress={() => handleLogin(navigation ,Fields,setErrors,setAuth,setVerify,setUser)} activeOpacity={.7} style={[GlobalStyles.Btn_Royal,GlobalStyles.Shadow_lg,{marginTop:'5%'}]}>
                     <Text style={GlobalStyles.Text_Btn_Royal}>ورود</Text>
                 </TouchableOpacity>
                 <GoToForgetPasswordFromLogin navigation={navigation}/>
                 <GoToRegisterFromLogin navigation={navigation}/>
             </BoxAuth>
         </GradientAuth>
     );
};
