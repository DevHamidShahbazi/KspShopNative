import {
    React,useState,useEffect,useContext,UseSetFields,GlobalStyles,
    BoxAuth, GradientAuth, InputGroupAuth, InputGroupPassAuth,
    Text, TouchableOpacity,AuthContext, UserContext,
    GoToForgetPasswordFromLogin, GoToRegisterFromLogin, handleLogin, NavigationSetOptionsLogin
} from '../../Global/Import/Imports';
export default function Login ({navigation ,route}) {
    const {User,setUser} = useContext(UserContext)
    const {Auth,setAuth} = useContext(AuthContext)
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
                 <TouchableOpacity onPress={() => handleLogin(navigation ,Fields,setErrors,setAuth,setUser)} activeOpacity={.7} style={[GlobalStyles.Btn_Royal,GlobalStyles.Shadow_lg,{marginTop:'5%'}]}>
                     <Text style={GlobalStyles.Text_Btn_Royal}>ورود</Text>
                 </TouchableOpacity>
                 <GoToForgetPasswordFromLogin navigation={navigation}/>
                 <GoToRegisterFromLogin navigation={navigation} setErrors={setErrors}/>
             </BoxAuth>
         </GradientAuth>
     );
};
