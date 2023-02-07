import React from 'react';
import {StyleSheet, View} from 'react-native';
export default StylesGlobal = StyleSheet.create({
    ListItem:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff',
        marginTop:10,
        marginBottom:10,
        marginRight:2,
        marginLeft:2,
        padding:5,
        borderRadius:5,
        elevation: 5
    },
    ListGrid:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-around'
    },
    Btn_Royal:{
        justifyContent:'center',
        alignItems:'center',
        width:"100%",
        borderRadius: 20,
        padding: 10,
        backgroundColor : '#213854',
    },
    Btn_Primary:{
        justifyContent:'center',
        alignItems:'center',
        width:"100%",
        borderRadius: 20,
        padding: 5,
        backgroundColor : '#0891b2',
    },
    Text_Btn_dark : {
        alignItems:'center',
        color : 'black',
        fontFamily:"Vazir",
        fontSize:17,
        textAlign:'center'
    },
    Text_Btn_white : {
        justifyContent:'center',
        alignItems:'center',
        color : 'white',
        fontFamily:"Vazir",
        fontSize:15,
        textAlign:'center'
    },
    Text_Btn_Royal : {
        justifyContent:'center',
        alignItems:'center',
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
    Font_Bold:{
      fontFamily:'Vazir-Bold'
    },
    Text_Dark:{
        color:'#000',
        fontFamily:'Vazir',
    },
    Text_White:{
        color:'#fff',
        fontFamily:'Vazir',
    }
});
