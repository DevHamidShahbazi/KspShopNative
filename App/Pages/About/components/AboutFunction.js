import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export function NavigationSetOptionsAbout (navigation) {
    return (
        navigation.setOptions({
            headerTitle: 'فروشگاه کا اس پی',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontFamily:'Vazir-Bold',
                color:'#213854'
            },
            headerStyle: {
                backgroundColor: '#fff',
                elevation:0,
            },
            headerLeft: false,
            headerRight: () => {
                return (
                    <TouchableOpacity activeOpacity={.7} onPress={() =>  navigation.goBack()} style={{marginRight:8}}>
                        <MaterialCommunityIcons name={'close'} color={'#213854'} size={30} />
                    </TouchableOpacity>
                )
            },
        })
    )
}
