import React,{useEffect} from 'react';
import {ActivityIndicator,View} from 'react-native';
import {GradientAuth} from '../../Auth/components/FunctionAuth';

export default function LoadingScreen (props) {
    useEffect(()=>{
        if (props.navigation != undefined){
            props.navigation.setOptions({
                headerShown: false
            })
        }
    },[]);
    return (
        <View style={{display:props.Loading?'flex':'none',flex:1,backgroundColor:'#eee',justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large" color="#155e75"/>
        </View>
    );
}
