import React,{useState} from 'react';
import LinearGradient from "react-native-linear-gradient";
import {Text, View,TextInput,TouchableOpacity} from 'react-native';
import RegisterStyles from './components/RegisterStyles';
import GlobalStyles from '../../Global/components/GlobalStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

export default function Register (props) {
    const [Eye,setEye] = useState(false);
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
                         <TextInput placeholderTextColor="rgba(0,0,0,0.70)" style={RegisterStyles.Input} placeholder="نام و نام خانوادگی"/>
                     </View>

                     <View style={RegisterStyles.Input_Group}>
                         <View style={RegisterStyles.Icon_Label_Group}>
                             <Icon name="mobile-alt" size={15} color="rgba(0,0,0,0.70)" />
                         </View>
                         <TextInput placeholderTextColor="rgba(0,0,0,0.70)" keyboardType="numeric" style={RegisterStyles.Input} placeholder="شماره موبایل"/>
                     </View>

                     <View style={RegisterStyles.Input_Group}>
                         <View style={RegisterStyles.Icon_Label_Group}>
                             <Icon name="lock" size={15} color="rgba(0,0,0,0.70)" />
                         </View>
                         <TextInput secureTextEntry={Eye?false:true} placeholderTextColor="rgba(0,0,0,0.70)"  style={[RegisterStyles.Input,{width:'80%',borderTopRightRadius: 0, borderBottomRightRadius: 0}]} placeholder="رمز عبور"/>
                         <TouchableOpacity activeOpacity={.9} onPress={() => setEye(Eye?false:true)} style={[RegisterStyles.Icon_Label_Group,RegisterStyles.Icon_Label_Group_Right]}>
                             <Icon name={Eye?'eye':'eye-slash'} size={15} color="rgba(0,0,0,0.70)" />
                         </TouchableOpacity>
                     </View>

                     <View style={RegisterStyles.Input_Group}>
                         <View style={RegisterStyles.Icon_Label_Group}>
                             <Icon name="lock" size={15} color="rgba(0,0,0,0.70)" />
                         </View>
                         <TextInput secureTextEntry={Eye?false:true} placeholderTextColor="rgba(0,0,0,0.70)"  style={[RegisterStyles.Input]} placeholder="تکرار رمز عبور"/>
                     </View>

                     <TouchableOpacity activeOpacity={.7} style={[GlobalStyles.Btn_Royal,GlobalStyles.Shadow,{marginTop:'5%'}]}>
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
