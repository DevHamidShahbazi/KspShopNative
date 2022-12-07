import React from 'react';
import {ActivityIndicator, Image, View} from 'react-native';

export default function ListIsEmpty ({Loading,IsEmpty}) {
    return (
        <React.Fragment>
            <View style={{display:Loading || IsEmpty?'flex':'none',flex:1,justifyContent:'center',backgroundColor:'#e5e7eb'}}>
                <ActivityIndicator style={{flex:1,display:Loading?'flex':'none'}} animating={Loading} size="large" color="#213854" />
                <View style={{display:IsEmpty?'flex':'none',justifyContent:'center',alignItems:'center'}}>
                    <Image  style={{width:300, height: 300}} source={require('../Images/box-empty.png')}/>
                </View>
            </View>
        </React.Fragment>
    );
}
