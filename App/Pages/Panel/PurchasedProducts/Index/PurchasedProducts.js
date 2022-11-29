import React,{useEffect} from 'react';
import {NavigationSetOptionsPanel} from '../../Index/components/PanelStyles';
import {Text, View} from 'react-native';

export default function PurchasedProducts ({navigation,route}) {
    useEffect(()=>{
        NavigationSetOptionsPanel(navigation,'محصولات خریداری شده')
    },[]);
    return (
        <React.Fragment>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontFamily:'Vazir',textAlign:'center'}}>
                    محصولات خریداری شده
                </Text>
            </View>
        </React.Fragment>
    );
}
