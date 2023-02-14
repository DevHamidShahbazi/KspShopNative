import React from 'react';
import {StyleSheet} from 'react-native';

const OrderStyles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#e5e7eb',
        padding:8
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    rowItem:{
        flexDirection:'row',
        marginTop:"8%",
    },
    textBold:{
        fontSize:16,
        color:'#000',
        fontFamily:'Vazir-Bold'
    },
    title:{
        fontSize:14,
        color:'#000',
        fontFamily:'Vazir'
    },
    value:{
        fontSize:14,
        color:'#000',
        fontFamily:'iranyekanbold(fanum)'
    }
});
export default OrderStyles;
