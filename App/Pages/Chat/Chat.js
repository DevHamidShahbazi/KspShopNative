import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default function Chat (props) {
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