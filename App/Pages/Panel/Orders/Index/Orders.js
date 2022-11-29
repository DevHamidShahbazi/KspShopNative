import React,{useEffect} from 'react';
import {NavigationSetOptionsPanel} from '../../Index/components/PanelStyles';
import {Text, View} from 'react-native';

export default function Orders ({navigation,route}) {
    useEffect(()=>{
        NavigationSetOptionsPanel(navigation,'سفارش ها')
    },[]);
    return (
        <React.Fragment>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontFamily:'Vazir',textAlign:'center'}}>
                    سفارش ها
                </Text>
            </View>
        </React.Fragment>
    );
}
