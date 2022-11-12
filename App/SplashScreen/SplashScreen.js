import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default function SplashScreen () {

    const StylesSplashScreen = StyleSheet.create({
        SplashScreen : {
            height:'100%',
            padding : 5,
            display:'flex',
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "stretch",
            alignItems: "flex-start",
        },
    });

    return (
        <React.Fragment>
            <LinearGradient colors={['#eee','#eee', '#70c8b7', '#0e3f5f']} style={StylesSplashScreen.SplashScreen} >
                <View style={StylesSplashScreen.SplashScreen}>
                    <Image style={{width: '100%', height: 300}} source={{uri: 'https://ksp-shop.com/Upload/image/logo/.png'}}/>
                </View>
            </LinearGradient>
        </React.Fragment>
    );
};
