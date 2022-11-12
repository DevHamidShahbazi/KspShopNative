import React, {useState} from 'react';
import {BoxAuth, GradientAuth, InputGroupAuth, InputGroupPassAuth} from '../components/FunctionAuth';
import {UseSetFields} from '../../Global/components/Hooks/CustomHooks';

export default function Login (props) {
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
             </BoxAuth>
         </GradientAuth>
     );
};
