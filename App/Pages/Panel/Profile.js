import React from 'react';
import {View,Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Profile (props) {
    return (
        <React.Fragment>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontFamily:'Vazir',color:'#000',fontSize:15}}>
                      profile
                </Text>
            </View>
        </React.Fragment>
    );
}
