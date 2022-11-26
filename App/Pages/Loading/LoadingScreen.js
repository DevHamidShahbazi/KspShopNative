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
        <GradientAuth>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large" color="#fff"/>
            </View>
        </GradientAuth>
    );
}
