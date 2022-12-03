import React from 'react';
import {StyleSheet} from 'react-native';

const OrdersStyles = StyleSheet.create({
    Container:{
        padding:5,
        backgroundColor:'#fff',
        elevation:3,
        borderRadius:8,
        marginTop:'2%',
        marginBottom:'2%'
    },
    Header_Item:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    Header_Item_date:{
        color:'#000',
        fontSize:14,
        textAlign:'center',
        fontFamily:'iranyekanbold(fanum)'
    },
    Header_Item_Status:{
        fontFamily:'Vazir-Bold',
        fontSize:12,
        padding:3,
        borderRadius:5
    },
    Body_Images:{
        flex:1,alignItems:'center',
        flexWrap:'wrap',
        justifyContent:'flex-end',
        flexDirection:'row'
    },
    Body_Price:{
        color:'#000',
        fontSize:20,
        textAlign:'center',
        fontFamily:'iranyekanbold(fanum)'
    },
    Footer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'1%',
        marginBottom:'3%'
    },
    Btn:{
        flex:2,
        marginLeft:'1%',
        marginRight:"1%",
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#213854',
        padding:3,
        borderRadius:8,
        borderWidth:1,
        borderColor:'#312e81'
    }
});
export default OrdersStyles;

