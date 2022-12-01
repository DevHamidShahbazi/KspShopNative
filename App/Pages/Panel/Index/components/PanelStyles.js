import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PanelStyles = StyleSheet.create({
    Container_Header_Panel:{
        // backgroundColor : 'red',
        flex:2,
    },
    Header_Panel : {
        // bottom: "5%",
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        backgroundColor : '#213854',
    },
    Box_Header_Panel : {
        padding:15,
        marginRight:'10%',
        marginLeft:'10%',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius: 10,
        top: "20%",
        backgroundColor: '#fff',
    },
    Text_Box_Header_Panel : {
        fontFamily:'Vazir-Bold'
        ,color:'#000'
        ,fontSize:20
        ,marginBottom:5
    },
});
export default PanelStyles;


export function NavigationSetOptionsPanel (navigation,title) {
    navigation.setOptions({
        headerTitle: title,
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontFamily:'Vazir',
            color:'#fff'
        },
        headerStyle: {
            backgroundColor: '#213854',
            elevation:0,
        },
        headerLeft: false,
        headerRight: () => {
            return (
                <TouchableOpacity activeOpacity={.7} onPress={() =>  {navigation.goBack()}} style={{marginRight:8}}>
                    <MaterialCommunityIcons name={'arrow-right'} color={'#eee'} size={30} />
                </TouchableOpacity>
            )
        },
    })
}
