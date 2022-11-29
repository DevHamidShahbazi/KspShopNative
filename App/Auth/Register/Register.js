import React,{useState,useEffect,useContext} from 'react';
import {UseSetFields} from '../../Global/Hooks/CustomHooks';
import {GoToLoginFromRegister, handleRegister, InputGroupPassConfirmAuth, NavigationSetOptionsRegister,} from './components/FunctionRegister';
import {BoxAuth, GradientAuth, InputGroupAuth, InputGroupPassAuth} from '../components/FunctionAuth';
import GlobalStyles from '../../Global/Styles/GlobalStyles';
import {Text, TouchableOpacity} from 'react-native';
import {AuthContext, UserContext} from '../../Global/Context/CustomContext';
export default function Register ({navigation ,route}) {
    const {User,setUser} = useContext(UserContext)
    const {Auth,setAuth} = useContext(AuthContext)
    const [Eye,setEye] = useState(false);
    const [Errors,setErrors] = useState('');
    const {Fields,handleChange} = UseSetFields({
        name: '',
        phone: '',
        password: '',
        password_confirmation: '',
    });
    useEffect(()=>{
        NavigationSetOptionsRegister(navigation)
    },[]);
 return (
     <React.Fragment>
         <GradientAuth>
             <BoxAuth title={'ثبت نام'} Errors={Errors}>
                 <InputGroupAuth  name={'name'} type={'default'} icon='user-alt' handleChange={handleChange} placeholder="نام و نام خانوادگی" />
                 <InputGroupAuth name={'phone'} type={'numeric'} icon='mobile-alt' handleChange={handleChange} placeholder="شماره موبایل" />
                 <InputGroupPassAuth name={'password'} Eye={Eye} setEye={setEye} icon='lock' handleChange={handleChange} placeholder="رمز عبور" />
                 <InputGroupPassConfirmAuth name={'password_confirmation'} Eye={Eye}  handleChange={handleChange} placeholder="تکرار رمز عبور" />
                 <TouchableOpacity onPress={() => handleRegister(Fields,setErrors,navigation,setAuth,setUser)} activeOpacity={.7} style={[GlobalStyles.Btn_Royal,GlobalStyles.Shadow_lg,{marginTop:'5%'}]}>
                     <Text style={GlobalStyles.Text_Btn_Royal}>
                         ثبت نام
                     </Text>
                 </TouchableOpacity>
                 <GoToLoginFromRegister navigation={navigation} setErrors={setErrors} />
             </BoxAuth>
         </GradientAuth>
     </React.Fragment>
 );
};
