import React from 'react';
import {StyleSheet} from 'react-native';
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
        borderRadius: 20,
        fontFamily:"Vazir"
    },

});


export function TabScreenOptions (label,Icon) {
    return {
        headerShown: false,
        tabBarLabelStyle:{fontFamily:'Vazir'},
        tabBarLabel: label,
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name={Icon} color={color} size={size} />
        ),
    }
}
