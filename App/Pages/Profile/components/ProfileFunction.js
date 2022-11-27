import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Badge} from 'react-native-paper';

export function NavigationSetOptionsProfile (navigation) {
    return (
        navigation.setOptions({
            // headerTitleAlign: 'center',
            // headerShown:false
            headerTitleStyle: {
                display:'none'
            },
            headerStyle: {
                backgroundColor: 'white',
                elevation:0,
            },
            headerLeft: () => {
                return (
                    <TouchableOpacity onPress={() =>  console.log('test')} style={{marginLeft:8,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <MaterialCommunityIcons name={'cart'} color={'#000'} size={30} />
                        <Badge size={25} style={{fontFamily:'Vazir',fontSize:15}}>3</Badge>
                    </TouchableOpacity>
                )
            },
            headerRight: () => {
                return (
                    <TouchableOpacity onPress={() =>  console.log('test')} style={{marginRight:8}}>
                        <MaterialCommunityIcons name={'menu'} color={'#000'} size={30} />
                    </TouchableOpacity>
                )
            },
        })
    )
}
