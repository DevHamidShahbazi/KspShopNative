import React, {useState} from 'react';
import {BoxAuth, GradientAuth, InputGroupAuth, InputGroupPassAuth} from '../components/FunctionAuth';
import {UseSetFields} from '../../Global/components/Hooks/CustomHooks';
import {
    BtnSubmitLogin,
    GoToForgetPasswordFromLogin,
    GoToRegisterFromLogin,
    handleLogin,
} from './components/FunctionLogin';

export default function Login ({navigation ,Route}) {

    const [Eye,setEye] = useState(false);
    const [Errors,setErrors] = useState('');
    const {Fields,handleChange} = UseSetFields({
        username: '',
        password: '',
    });

     return (
         <GradientAuth>
             <BoxAuth title={'ورود'} Errors={Errors}>
                 <InputGroupAuth name={'username'} type={'default'} icon='mobile-alt' handleChange={handleChange} placeholder="شماره موبایل یا ایمیل خود را وارد کنید" />
                 <InputGroupPassAuth name={'password'} Eye={Eye} setEye={setEye} icon='lock' handleChange={handleChange} placeholder="رمز عبور خود را وارد کنید" />
                 <BtnSubmitLogin handleLogin={handleLogin} Fields={Fields} setErrors={setErrors}/>
                 <GoToForgetPasswordFromLogin navigation={navigation}/>
                 <GoToRegisterFromLogin navigation={navigation}/>
             </BoxAuth>
         </GradientAuth>
     );
};
