import React from 'react';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export  const CategoryNavigationSetOptions = (navigation) => {
    const configOpen = {
        animation: 'spring',
        config: {
            stiffness: 500,
            damping: 500,
            mass: 1,
            overshootClamping: true,
            restDisplacementThreshold: 0.001,
            restSpeedThreshold: 0.001,
        },
    };

    const configClose = {
        animation: 'timing',
        config: {
            stiffness: 1000,
            damping: 500,
            mass: 1,
            overshootClamping: true,
            restDisplacementThreshold: 0.001,
            restSpeedThreshold: 0.001,
        },
    };

    navigation.setOptions({
        gestureEnabled:true,
        gestureDirection:'horizontal',
        cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
        transitionSpec:{
            open:configOpen,
            close:configClose,
        },
        headerTitle: 'دسته بندی ها',
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontFamily:'Vazir',
            color:'#fff',
            // fontFamily:'iranyekanbold(fanum)'
        },
        headerStyle: {
            backgroundColor: '#213854',
            elevation:0,
        },
        headerLeft: false,
        headerRight: () => {
            return (
                <TouchableOpacity activeOpacity={.7} onPress={() =>  {navigation.goBack()}} style={{marginRight:8}}>
                    <MaterialCommunityIcons name={'arrow-right'} color={'#eee'} size={30} />
                </TouchableOpacity>
            )
        },
    })
};
