import React from 'react';
import StylesAuth from './StylesAuth';
import LinearGradient from "react-native-linear-gradient";
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Error} from '../../Global/components/Alerts/GlobalAlert';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

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
            <View style={StylesAuth.Box}>
                <Text style={StylesAuth.Header_box}>{props.title}</Text>
                <Error message={props.Errors}/>
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
                           style={StylesAuth.Input} placeholder={props.placeholder}/>
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
