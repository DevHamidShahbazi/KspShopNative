import React,{useState,useEffect} from 'react';
import {UseSetFields} from '../../Global/components/Hooks/CustomHooks';
import {BtnSubmitRegister, GoToLoginFromRegister, handleRegister, InputGroupPassConfirmAuth,} from './components/FunctionRegister';
import {BoxAuth, GradientAuth, InputGroupAuth, InputGroupPassAuth} from '../components/FunctionAuth';
export default function Register ({navigation ,Route}) {
    const [Eye,setEye] = useState(false);
    const [Errors,setErrors] = useState('');
    const {Fields,handleChange} = UseSetFields({
        name: '',
        phone: '',
        password: '',
        password_confirmation: '',
    });
 return (
     <React.Fragment>
         <GradientAuth>
             <BoxAuth title={'ثبت نام'} Errors={Errors}>
                 <InputGroupAuth  name={'name'} type={'default'} icon='user-alt' handleChange={handleChange} placeholder="نام و نام خانوادگی" />
                 <InputGroupAuth name={'phone'} type={'numeric'} icon='mobile-alt' handleChange={handleChange} placeholder="شماره موبایل" />
                 <InputGroupPassAuth name={'password'} Eye={Eye} setEye={setEye} icon='lock' handleChange={handleChange} placeholder="رمز عبور" />
                 <InputGroupPassConfirmAuth name={'password_confirmation'} Eye={Eye}  handleChange={handleChange} placeholder="تکرار رمز عبور" />
                 <BtnSubmitRegister navigation={navigation} handleRegister={handleRegister} Fields={Fields} setErrors={setErrors}/>
                 <GoToLoginFromRegister navigation={navigation} />
             </BoxAuth>
         </GradientAuth>
     </React.Fragment>
 );
};
