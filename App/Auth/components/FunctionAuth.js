import React from 'react';
import StylesAuth from './StylesAuth';
import LinearGradient from "react-native-linear-gradient";
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Error, Success} from '../../Global/components/Alerts/GlobalAlert';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import GlobalStyles from '../../Global/components/Styles/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export function CheckToken (setAuth,setUser) {

    AsyncStorage.getItem('api_token',(error, result) => {
        if (result){
            axios.post('v_1_0/auth', {},{
                headers:{
                    'api_token':result
                }
            })
                .then(function (response) {
                    const {data} =response;
                    if (data.status == 'success'){
                        CheckAuth(setAuth)
                        CheckUser(setUser)
                    }else {
                        LogOut(setAuth,setUser)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }else {
            LogOut(setAuth,setUser)
        }
    })
    return null;
}

export function CheckAuth (setAuth) {
    AsyncStorage.getItem('Auth',(error, result) => {
        JSON.parse(result) ? setAuth(true):setAuth(false)
    })
    return null;
}
export function CheckUser (setUser) {
    AsyncStorage.getItem('user',(error, result) => {
        JSON.parse(result) == null ? setUser(null):setUser([JSON.parse(result)])
    })
    return null;
}

export function LogOut (setAuth,setUser) {
    AsyncStorage.removeItem('Auth')
    AsyncStorage.removeItem('user')
    setAuth(false)
    setUser(null)
    return null;
}
export function ResponseData_Register_and_Login (response,setErrors,navigation,setAuth,setUser) {
    const {data} = response;
    if (data.status == 'success'){
        setErrors('')
        AsyncStorage.setItem('Auth',JSON.stringify(true))
        AsyncStorage.setItem('api_token',data.user.api_token)
        AsyncStorage.setItem('user',JSON.stringify(data.user[0]))
        setUser([data.user])
        setAuth(true)
        // if (data.user.verify == '1'){
            navigation.navigate('Panel',{initial: false})
        // }else {
        //     navigation.navigate('Verify',{initial: false})
        // }
    }else {
        setErrors(data.message);
    }
     return null;
}
export function GradientAuth (props) {
    return (
        <LinearGradient style={StylesAuth.ContainerRegister} colors={['#eee', '#70c8b7', '#0e3f5f']} >
            {props.children }
        </LinearGradient>
    )
}

export function BoxAuth (props) {
    return (
        <React.Fragment>
            <View style={[StylesAuth.Box,GlobalStyles.Shadow_lg]}>
                <Text style={StylesAuth.Header_box}>{props.title}</Text>
                <Error message={props.Errors}/>
                {
                    props.Successes != undefined ? <Success message={props.Successes}/>:null
                }
                <View style={StylesAuth.Body_box}>
                    {props.children }
                </View>
            </View>
        </React.Fragment>
    );
}

export function InputGroupAuth (props) {
    return (
        <React.Fragment>
            <View style={StylesAuth.Input_Group}>
                <View style={StylesAuth.Icon_Label_Group}>
                    <Icon name={props.icon} size={15} color="rgba(0,0,0,0.70)" />
                </View>
                <TextInput keyboardType={props.type}
                           onChangeText={val => props.handleChange(val,props.name)}
                           placeholderTextColor="rgba(0,0,0,0.70)"
                           style={StylesAuth.Input}
                           placeholder={props.placeholder}/>
            </View>
        </React.Fragment>
    );
}

export function InputGroupPassAuth (props) {
    return (
        <React.Fragment>
            <View style={StylesAuth.Input_Group}>
                <View style={StylesAuth.Icon_Label_Group}>
                    <Icon name={props.icon} size={15} color="rgba(0,0,0,0.70)" />
                </View>
                <TextInput secureTextEntry={props.Eye?false:true}
                           onChangeText={val => props.handleChange(val,props.name)}
                           placeholderTextColor="rgba(0,0,0,0.70)"
                           style={[StylesAuth.Input,{width:'80%',borderTopRightRadius: 0, borderBottomRightRadius: 0}]}
                           placeholder={props.placeholder}/>
                <TouchableOpacity activeOpacity={.9} onPress={() => props.setEye(props.Eye?false:true)} style={[StylesAuth.Icon_Label_Group,StylesAuth.Icon_Label_Group_Right]}>
                    <Icon name={props.Eye?'eye':'eye-slash'} size={15} color="rgba(0,0,0,0.70)" />
                </TouchableOpacity>
            </View>
        </React.Fragment>
    );
}


export function TimerView ({Timer}) {
    return (
        <React.Fragment>
            <Text style={{display:Timer <= 0?'none':'flex',textAlign:'center',marginTop:'2%',fontFamily:'Vazir',fontSize:15,color:'#21252985'}}>
                ارسال دوباره پیامک تا {Timer} ثانیه دیگر مجاز است
            </Text>
        </React.Fragment>
    );
}
