import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import GlobalStyles from '../../Global/components/Styles/GlobalStyles';
import {LogOut} from '../../Auth/components/FunctionAuth';
import {AuthContext, UserContext} from '../../Global/components/Context/CustomContext';
import {NavigationSetOptionsProfile} from './components/ProfileFunction';

export default function Profile ({navigation,route}) {
    const {User,setUser} = useContext(UserContext);
    const {Auth,setAuth} = useContext(AuthContext);
    useEffect(()=>{
        NavigationSetOptionsProfile(navigation)
    },[]);
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontFamily:'Vazir',color:'#000',fontSize:15}}>
                {User.name}
            </Text>
            <TouchableOpacity onPress={() => LogOut(setAuth,setUser)} activeOpacity={.7} style={[GlobalStyles.Btn_Royal,GlobalStyles.Shadow_lg,{marginTop:'5%'}]}>
                <Text style={GlobalStyles.Text_Btn_Royal}>
                    خروج
                </Text>
            </TouchableOpacity>
        </View>
    );
}
