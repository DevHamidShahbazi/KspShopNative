import React from 'react';
import {StyleSheet} from 'react-native';

export default StylesPanel = StyleSheet.create({
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


export function NavigationSetOptionsPanel (navigation) {
    return (
        navigation.setOptions({
            title:'پنل کاربری',
            headerStyle: {
                backgroundColor: '#eee',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#000',
            headerTitleStyle: {
                fontFamily:'Vazir-Bold'
            },
        })
    )
}
