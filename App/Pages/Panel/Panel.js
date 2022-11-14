import React,{useEffect} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default function Panel ({navigation ,Route}) {
    useEffect(()=>{
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
    },[]);

    const StylesPanel = StyleSheet.create({
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
            <LinearGradient colors={[ '#34e89e', '#0f3443']} style={StylesPanel.Home} >
                <View style={StylesPanel.Home}>
                    <Text style={StylesPanel.text}>
                        پنل کاربری
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                    <Text>
                        Go to Home
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
        </React.Fragment>
    );
}
