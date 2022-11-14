import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default function Panel (props) {
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
            </LinearGradient>
        </React.Fragment>
    );
}
