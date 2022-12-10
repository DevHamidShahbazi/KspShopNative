import React,{useEffect,useState} from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {NavigationSetOptionsPanel} from '../Index/components/PanelStyles';
import {Error, Success} from '../../../Global/Alerts/GlobalAlert';
import {UseSetFields} from '../../../Global/Hooks/CustomHooks';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {CustomTextInput} from '../../../Global/Components/Components';
import StylesAuth from '../../../Auth/components/StylesAuth';
import GlobalStyles from '../../../Global/Styles/GlobalStyles';
import {handleResetPassword} from './components/ResetPasswordFunction';


export default function ResetPassword ({navigation,route}) {
    const [Errors,setErrors] = useState('');
    const [Successes,setSuccesses] = useState('');
    const [Eye,setEye] = useState(true);
    const {Fields,handleChange} = UseSetFields({
        password: null,
        password_confirmation: null,
    });
    useEffect(()=>{
        NavigationSetOptionsPanel(navigation,'تغییر رمز عبور')
    },[]);
    return (
        <React.Fragment>
            <ScrollView contentContainerStyle={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>

                <View style={{padding:15,flex:1,width:"100%"}}>
                    <Error message={Errors}/>
                    <Success message={Successes}/>
                    <CustomTextInput autoFocus={true} value={Fields.name} name={'password'} styleInput={{marginBottom:'5%'}} Eye={Eye} handleChange={handleChange} placeholder={'رمز عبور جدید خود را وارد کنید'} type={'default'} require={true} />

                    <View style={StylesAuth.Input_Group}>
                        <TextInput secureTextEntry={Eye}
                                   onChangeText={val => handleChange(val,'password_confirmation')}
                                   placeholderTextColor="rgba(0,0,0,0.55)"
                                   style={[StylesAuth.Input,{width:'90%',borderTopLeftRadius: 8, borderBottomLeftRadius: 8,borderTopRightRadius: 0, borderBottomRightRadius: 0}]}
                                   placeholder={'رمز عبور خود را تکرار کنید'}/>
                        <TouchableOpacity activeOpacity={.9} onPress={() => setEye(Eye?false:true)} style={[StylesAuth.Icon_Label_Group,StylesAuth.Icon_Label_Group_Right]}>
                            <Icon name={Eye?'eye-slash':'eye'} size={15} color="rgba(0,0,0,0.70)" />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity onPress={() => handleResetPassword(Fields,setErrors,setSuccesses)}
                                  activeOpacity={.7}
                                  style={[GlobalStyles.Btn_Royal,GlobalStyles.Shadow,{width:'95%',bottom:15}]}>
                    <Text style={GlobalStyles.Text_Btn_Royal}>تغییر رمز</Text>
                </TouchableOpacity>

            </ScrollView>
        </React.Fragment>
    );
}
