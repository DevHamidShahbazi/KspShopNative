import React,{useEffect} from 'react';
import {Text, View} from 'react-native';
import {NavigationSetOptionsPanel} from '../Index/components/PanelStyles';

export default function ResetPassword ({navigation,route}) {
    useEffect(()=>{
        NavigationSetOptionsPanel(navigation,'تغییر رمز عبور')
    },[]);
    return (
        <React.Fragment>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontFamily:'Vazir',textAlign:'center'}}>
                    تغییر رمز عبور
                </Text>
            </View>
        </React.Fragment>
    );
}
