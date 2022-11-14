import React, {useEffect} from 'react';
import {StyleSheet, View,Text} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
export default function Home ({navigation ,Route}) {

    useEffect(()=>{
        navigation.setOptions({
            title:'خانه',
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

    const StylesHome = StyleSheet.create({
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
            <LinearGradient colors={[ '#70c8b7', '#0e3f5f']} style={StylesHome.Home} >
                <View style={StylesHome.Home}>
                    <Text style={StylesHome.text}>
                        صفحه اصلی
                    </Text>
                </View>
            </LinearGradient>
        </React.Fragment>
    );
}
