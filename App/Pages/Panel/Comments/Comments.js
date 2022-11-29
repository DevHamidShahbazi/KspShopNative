import React,{useEffect} from 'react';
import {Text, View} from 'react-native';
import {NavigationSetOptionsPanel} from '../Index/components/PanelStyles';

export default function Comments ({navigation,route}) {
    useEffect(()=>{
        NavigationSetOptionsPanel(navigation,'نظرات من')
    },[]);
    return (
        <React.Fragment>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontFamily:'Vazir',textAlign:'center'}}>
                    نظرات من
                </Text>
            </View>
        </React.Fragment>
    );
}
