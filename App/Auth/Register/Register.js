import React,{useState} from 'react';
import LinearGradient from "react-native-linear-gradient";
import {Text, View,TextInput,TouchableOpacity} from 'react-native';
import RegisterStyles from './components/RegisterStyles';
import GlobalStyles from '../../Global/components/GlobalStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import axios from "axios";

export default function Register (props) {
    const [Eye,setEye] = useState(false);
    const [Name,setName] = useState('');
    const [Phone,setPhone] = useState('');
    const [Password,setPassword] = useState('');
    const [PasswordConfirmation,setPasswordConfirmation] = useState('');
    const handleRegister = () => {
        // fetch('http://192.168.100.15:8000/api/v_1_0', {
        //     method: 'POST',
            // headers: {
            //     Accept: 'application/json',
            //     'Content-Type': 'application/json'
            // },
        //     body: JSON.stringify({
        //         name: Name,
        //         phone: Phone,
        //         password: Password,
        //         password_confirmation: PasswordConfirmation,
        //     })
        // });

        axios.post('http://192.168.100.15:8000/api/v_1_0/register', {
            name: Name,
            phone: Phone,
            password: Password,
            password_confirmation: PasswordConfirmation,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
 return (
     <React.Fragment>
         <LinearGradient style={RegisterStyles.ContainerRegister} colors={['#eee', '#70c8b7', '#0e3f5f']} >
             <View style={RegisterStyles.Box}>
                 <Text style={RegisterStyles.Header_box}>ثبت نام</Text>
                 <View style={RegisterStyles.Body_box}>

                     <View style={RegisterStyles.Input_Group}>
                         <View style={RegisterStyles.Icon_Label_Group}>
                             <Icon name="user-alt" size={15} color="rgba(0,0,0,0.70)" />
                         </View>
                         <TextInput onChangeText={value => setName(value)} placeholderTextColor="rgba(0,0,0,0.70)" style={RegisterStyles.Input} placeholder="نام و نام خانوادگی"/>
                     </View>

                     <View style={RegisterStyles.Input_Group}>
                         <View style={RegisterStyles.Icon_Label_Group}>
                             <Icon name="mobile-alt" size={15} color="rgba(0,0,0,0.70)" />
                         </View>
                         <TextInput onChangeText={value => setPhone(value)} placeholderTextColor="rgba(0,0,0,0.70)" keyboardType="numeric" style={RegisterStyles.Input} placeholder="شماره موبایل"/>
                     </View>

                     <View style={RegisterStyles.Input_Group}>
                         <View style={RegisterStyles.Icon_Label_Group}>
                             <Icon name="lock" size={15} color="rgba(0,0,0,0.70)" />
                         </View>
                         <TextInput onChangeText={value => setPassword(value)} secureTextEntry={Eye?false:true} placeholderTextColor="rgba(0,0,0,0.70)"  style={[RegisterStyles.Input,{width:'80%',borderTopRightRadius: 0, borderBottomRightRadius: 0}]} placeholder="رمز عبور"/>
                         <TouchableOpacity activeOpacity={.9} onPress={() => setEye(Eye?false:true)} style={[RegisterStyles.Icon_Label_Group,RegisterStyles.Icon_Label_Group_Right]}>
                             <Icon name={Eye?'eye':'eye-slash'} size={15} color="rgba(0,0,0,0.70)" />
                         </TouchableOpacity>
                     </View>

                     <View style={RegisterStyles.Input_Group}>
                         <View style={RegisterStyles.Icon_Label_Group}>
                             <Icon name="lock" size={15} color="rgba(0,0,0,0.70)" />
                         </View>
                         <TextInput onChangeText={value => setPasswordConfirmation(value)} secureTextEntry={Eye?false:true} placeholderTextColor="rgba(0,0,0,0.70)"  style={[RegisterStyles.Input]} placeholder="تکرار رمز عبور"/>
                     </View>

                     <TouchableOpacity onPress={() => handleRegister()} activeOpacity={.7} style={[GlobalStyles.Btn_Royal,GlobalStyles.Shadow,{marginTop:'5%'}]}>
                         <Text style={GlobalStyles.Text_Btn_Royal}>
                             ثبت نام
                         </Text>
                     </TouchableOpacity>
                     <TouchableOpacity activeOpacity={.4}>
                         <Text style={RegisterStyles.Text_before_Register}>
                             قبلا ثبت نام کرده ام!!
                         </Text>
                     </TouchableOpacity>
                 </View>
             </View>
         </LinearGradient>
     </React.Fragment>
 );
};
