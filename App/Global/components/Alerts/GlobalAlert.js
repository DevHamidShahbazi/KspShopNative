import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

export function Error (props) {
    const StylesError = StyleSheet.create({
        MainError:{
            width:'100%',
            marginTop:10,
            marginBottom:10,
        },
        ContainerError: {
            display:'flex',
            justifyContent: "center",
            alignItems: "center",
            padding: "2%",
            backgroundColor:'#ed3646',
            marginRight:5,
            marginLeft:5,
            borderRadius:5,
            elevation:10,
        },
        TextError : {
            width:'100%',
            fontFamily: 'Vazir',
            fontSize: 14,
            textAlign: 'center',
            color: 'white'
        },
        Danger : {
            fontFamily: 'Vazir',
            fontSize: 15,
            color: 'white',
        }
    });
    if (props.message != undefined){
        const list =
            Object.keys(props.message).map((error, index) => (
                <Text  key={index} style={StylesError.TextError}>
                    {index+1}.{" "+props.message[error][0]}
                </Text>
            ));
        return (
            <View style={[StylesError.MainError,{ display : Object.keys(props.message).length == 0 ? 'none' : 'flex'  }]}>
                <View style={StylesError.ContainerError}>
                    <View style={{justifyContent:'flex-end',flexDirection:'row',width:'100%'}}>
                        <Text style={StylesError.Danger}>
                            خطا !!
                        </Text>
                        <Icon style={{marginLeft: 5}} name="ban" size={18} color="white" />
                    </View>
                    {list}
                </View>
            </View>
        )
    }else {
        return null
    }
}


