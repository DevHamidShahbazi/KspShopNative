import React from 'react';
import {StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default StylesGlobal = StyleSheet.create({
    Btn_Royal:{
        display : 'flex',
        justifyContent:'center',
        alignItems:'center',
        width:"100%",
        borderRadius: 20,
        padding: 10,
        backgroundColor : '#213854',
    },
    Btn_Primary:{
        display : 'flex',
        justifyContent:'center',
        alignItems:'center',
        width:"100%",
        borderRadius: 20,
        padding: 5,
        backgroundColor : '#0891b2',
    },
    Text_Btn_dark : {
        color : 'black',
        fontFamily:"Vazir",
        fontSize:17,
        textAlign:'center'
    },
    Text_Btn_white : {
        color : 'white',
        fontFamily:"Vazir",
        fontSize:17,
        textAlign:'center'
    },
    Text_Btn_Royal : {
        color : 'white',
        fontFamily:"Vazir",
        fontSize:17,
        textAlign:'center'
    },
    Shadow : {
        shadowColor: "rgba(0,0,0,0.67)",
        elevation: 2,
    },
    Shadow_lg : {
        shadowColor: "rgba(0,0,0,0.67)",
        elevation: 10,
    },
    Card_Header : {
        width : "100%",
        borderTopLeftRadius :20 ,
        borderTopRightRadius :20 ,
        backgroundColor: "#dbdbdb",
        fontFamily:"Vazir"
    },
    Card_Body : {
        width : "100%",
        fontFamily:"Vazir"
    },
    Card: {
        width : "100%",
        position: "relative",
        backgroundColor: "#fff",
        borderRadius: 15,
        fontFamily:"Vazir"
    },
    Input : {
        backgroundColor:'#fff',
        fontFamily:'Vazir',
        width : "100%",
        textAlign : 'right',
        color:'black',
        borderColor : 'rgba(0,0,0,0.21)',
        borderWidth : .8,
        borderRadius: 8,
        padding : 5,
    },
});
