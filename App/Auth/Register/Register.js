import {
    React, useState, useEffect, useContext, UseSetFields, GlobalStyles, AuthContext, UserContext, View,
    GoToLoginFromRegister, handleRegister, InputGroupPassConfirmAuth, NavigationSetOptionsRegister,
    BoxAuth, GradientAuth, InputGroupAuth, InputGroupPassAuth,
    Text, TouchableOpacity, ActivityIndicator, TextBold,
} from '../../Global/Import/Imports';
import Styles from '../../Pages/Basket/Index/components/Styles';
import PrivacyAndService from './components/PrivacyAndService';
import {BtnSubmit} from './components/FunctionRegister';
import ModalService from './components/ModalService';
import ModalPrivacy from './components/ModalPrivacy';
export default function Register ({navigation ,route}) {
    const [StatusModalPrivacy,setStatusModalPrivacy] = useState(false);
    const [StatusModalService,setStatusModalService] = useState(false);
    const [Privacy ,setPrivacy ] = useState(false);
    const [Loading,setLoading] = useState(false);
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
    },[StatusModalPrivacy,StatusModalService]);
    const handleOnClick = () => handleRegister(Fields,setErrors,navigation,setAuth,setUser,setLoading,Privacy)
 return (
     <React.Fragment>
         <GradientAuth>
             <BoxAuth title={'ثبت نام'} Errors={Errors}>
                 <InputGroupAuth  name={'name'} type={'default'} icon='user-alt' handleChange={handleChange} placeholder="نام و نام خانوادگی" />
                 <InputGroupAuth name={'phone'} type={'numeric'} icon='mobile-alt' handleChange={handleChange} placeholder="شماره موبایل" />
                 <InputGroupPassAuth name={'password'} Eye={Eye} setEye={setEye} icon='lock' handleChange={handleChange} placeholder="رمز عبور" />
                 <InputGroupPassConfirmAuth name={'password_confirmation'} Eye={Eye}  handleChange={handleChange} placeholder="تکرار رمز عبور" />
                 <ActivityIndicator style={{display:Loading?'flex':'none'}} animating={Loading} size="large" color="#213854" />
                 <ModalService StatusModalService={StatusModalService} setStatusModalService={setStatusModalService}/>
                 <ModalPrivacy StatusModalPrivacy={StatusModalPrivacy} setStatusModalPrivacy={setStatusModalPrivacy} />
                 <PrivacyAndService Privacy={Privacy} setPrivacy={setPrivacy}
                                    setStatusModalPrivacy={setStatusModalPrivacy}
                                    setStatusModalService={setStatusModalService}/>
                 <BtnSubmit Loading={Loading} handleClick={() => handleOnClick()}/>
                 <GoToLoginFromRegister navigation={navigation} setErrors={setErrors} />
             </BoxAuth>
         </GradientAuth>
     </React.Fragment>
 );
};
