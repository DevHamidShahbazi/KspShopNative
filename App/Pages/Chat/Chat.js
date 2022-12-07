import React, {useEffect,useState,useContext} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
export const ChatStack = createStackNavigator();
import LinearGradient from "react-native-linear-gradient";

export default function Chat ({navigation,route}) {
    useEffect(()=>{

        navigation.setOptions({
            title:'پیام رسان',
            headerStyle: {
                backgroundColor: '#eee',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#000',
            headerTitleStyle: {
                fontFamily:'Vazir-Bold'
            },
        })

    },[]);

    const StylesChat = StyleSheet.create({
        Home : {
            height:'100%',
            padding : 5,
            display:'flex',
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "stretch",
            alignItems: "center",
        },
        text : {
            color:'white',
            fontSize:20,
            fontFamily:'Vazir',
        }
    });

    return (
        <React.Fragment>
            <LinearGradient colors={[ '#9D50BB', '#6E48AA']} style={StylesChat.Home} >
                <View style={StylesChat.Home}>
                    <Text style={StylesChat.text}>
                        پیام رسان
                    </Text>
                </View>
            </LinearGradient>
        </React.Fragment>
    );
}
