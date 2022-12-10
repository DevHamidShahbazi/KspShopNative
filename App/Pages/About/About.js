import React,{useEffect} from 'react';
import {NavigationSetOptionsAbout} from './components/AboutFunction';
import {Text, View} from 'react-native';
import {TextBold} from '../../Global/Components/Components';
export default function About ({navigation,route}) {
    useEffect(()=>{
        NavigationSetOptionsAbout(navigation)
    },[]);
    return (
        <React.Fragment>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
                <TextBold style={{fontFamily:'Vazir',textAlign:'center'}}>
                    درباره ما
                </TextBold>
            </View>
        </React.Fragment>
    );
}
