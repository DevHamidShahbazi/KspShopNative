import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default function Category ({navigation ,Route}) {

    useEffect(()=>{
        navigation.setOptions({
            title:'دسته بندی ها',
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


    const StylesCategory = StyleSheet.create({
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
            <LinearGradient colors={['#AA076B', '#61045F']} style={StylesCategory.Home} >
                <View style={StylesCategory.Home}>
                    <Text style={StylesCategory.text}>
                        دسته بندی ها
                    </Text>
                </View>
            </LinearGradient>
        </React.Fragment>
    );
}
