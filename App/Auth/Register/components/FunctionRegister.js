import React from 'react';
import axios from 'axios';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import StylesAuth from '../../components/StylesAuth';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import GlobalStyles from '../../../Global/components/Styles/GlobalStyles';
import RegisterStyles from './RegisterStyles';

export function handleRegister (Fields,setErrors) {
    axios.post('register', {
        name: Fields.name,
        phone: Fields.phone,
        password: Fields.password,
        password_confirmation: Fields.password_confirmation,
    })
        .then(function (response) {
            const {data} = response;
            if (data.status == 'success'){
                console.log(data)
            }else {
                setErrors(data.message);
            }
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
                           placeholder={props.placeholder}/>
            </View>
        </React.Fragment>
    );
}

export function BtnSubmitRegister (props) {
    return (
        <React.Fragment>
            <TouchableOpacity onPress={() => props.handleRegister(props.Fields,props.setErrors)} activeOpacity={.7} style={[GlobalStyles.Btn_Royal,GlobalStyles.Shadow_lg,{marginTop:'5%'}]}>
                <Text style={GlobalStyles.Text_Btn_Royal}>
                    ثبت نام
                </Text>
            </TouchableOpacity>
        </React.Fragment>
    );
}

export function GoToLoginFromRegister () {
    return (
        <React.Fragment>
            <TouchableOpacity activeOpacity={.4}>
                <Text style={RegisterStyles.Text_before_Register}>
                    قبلا ثبت نام کرده ام!!
                </Text>
            </TouchableOpacity>
        </React.Fragment>
    );
}
