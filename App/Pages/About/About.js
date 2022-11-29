import React,{useEffect} from 'react';
import {NavigationSetOptionsAbout} from './components/AboutFunction';
import {Text, View} from 'react-native';
export default function About ({navigation,route}) {
    useEffect(()=>{
        NavigationSetOptionsAbout(navigation)
    },[]);
    return (
        <React.Fragment>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
                <Text style={{fontFamily:'Vazir',textAlign:'center'}}>
                    درباره ما
                </Text>
            </View>
        </React.Fragment>
    );
}
