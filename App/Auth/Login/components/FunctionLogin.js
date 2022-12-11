import {
    React,Text, TouchableOpacity,axios,
    ResponseData_Register_and_Login,
} from '../../../Global/Import/Imports';
import LoginStyles from './LoginStyle';


export function handleLogin (navigation ,Fields,setErrors,setAuth,setUser) {
    axios.post('v_1_0/login', {
        username: Fields.username,
        password: Fields.password,
    })
        .then(function (response) {
            ResponseData_Register_and_Login(response,setErrors,navigation,setAuth,setUser)
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function GoToForgetPasswordFromLogin ({navigation}) {
    return (
        <React.Fragment>
            <TouchableOpacity activeOpacity={.4} onPress={() => navigation.navigate('ForgetPassword')}>
                <Text style={LoginStyles.Text_Go_To_ForgetPassword}>
                    رمز عبور را فراموش کردم !!
                </Text>
            </TouchableOpacity>
        </React.Fragment>
    );
}
 export function GoToRegisterFromLogin ({navigation,setErrors}) {
     return (
         <React.Fragment>
             <TouchableOpacity activeOpacity={.4} onPress={() => {setErrors(''),navigation.navigate('Register')}}>
                 <Text style={LoginStyles.Text_Go_To_Register}>
                     هنوز ثبت نام نکردم !!
                 </Text>
             </TouchableOpacity>
         </React.Fragment>
     );
 }

 export function NavigationSetOptionsLogin (navigation) {
     return (
         navigation.setOptions({
             headerShown: false
         })
     )
 }
