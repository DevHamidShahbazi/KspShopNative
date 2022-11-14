import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default function Basket (props) {
    const StylesBasket = StyleSheet.create({
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
            <LinearGradient colors={[ '#1CB5E0', '#000046']} style={StylesBasket.Home} >
                <View style={StylesBasket.Home}>
                    <Text style={StylesBasket.text}>
                        سبدخرید
                    </Text>
                </View>
            </LinearGradient>
        </React.Fragment>
    );
}