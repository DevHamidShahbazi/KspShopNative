import React from 'react';
import axios from 'axios';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import StylesAuth from '../../components/StylesAuth';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import RegisterStyles from './RegisterStyles';

import {ResponseData_Register_and_Login} from '../../components/FunctionAuth';

export function handleRegister (Fields,setErrors,navigation,setAuth,setUser) {
    axios.post('v_1_0/register', {
        name: Fields.name,
        phone: Fields.phone,
        password: Fields.password,
        password_confirmation: Fields.password_confirmation,
    })
        .then(function (response) {
            ResponseData_Register_and_Login(response,setErrors,navigation,setAuth,setUser)
        })
        .catch(function (error) {
            console.log(error);
        });
}
export function InputGroupPassConfirmAuth (props) {
    return (
        <React.Fragment>
            <View style={StylesAuth.Input_Group}>
                <View style={StylesAuth.Icon_Label_Group}>
                    <Icon name="lock" size={15} color="rgba(0,0,0,0.70)" />
                </View>
                <TextInput onChangeText={val => props.handleChange(val,'password_confirmation')}
                           secureTextEntry={props.Eye?false:true}
                           placeholderTextColor="rgba(0,0,0,0.70)"
                           style={StylesAuth.Input}
                           placeholder={props.placeholder}
                />
            </View>
        </React.Fragment>
    );
}



export function GoToLoginFromRegister ({navigation,setErrors}) {
    return (
        <React.Fragment>
            <TouchableOpacity activeOpacity={.4} onPress={() => {setErrors('');navigation.navigate('Login')}}>
                <Text style={RegisterStyles.Text_before_Register}>
                    قبلا ثبت نام کرده ام!!
                </Text>
            </TouchableOpacity>
        </React.Fragment>
    );
}


export function NavigationSetOptionsRegister (navigation) {
    return (
        navigation.setOptions({
            headerShown: false
        })
    )
}
