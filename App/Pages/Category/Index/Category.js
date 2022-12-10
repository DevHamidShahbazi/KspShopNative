import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import {CategoryNavigationSetOptions} from './components/CategoryFunctions';
import {TextBold} from '../../../Global/Components/Components';

export default function Category ({navigation ,Route}) {

    useEffect(()=>{
        CategoryNavigationSetOptions(navigation)
    },[]);

    return (
        <React.Fragment>
            <View style={{flex:1,justifyContent: 'center'}}>
                <TextBold style={{textAlign:'center'}}>
                    دسته بندی ها
                </TextBold>
            </View>
        </React.Fragment>
    );
}
