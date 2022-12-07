import React, {useContext, useEffect,useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {ScrollView, View} from 'react-native';
import {ProfileBody, ProfileHeader, ProfileItemBody} from './components/ProfileFunction';
import  {NavigationSetOptionsProfile} from './components/ProfileStyle';
import {AuthContext, DisplayTabBarContext, UserContext} from '../../../Global/Context/CustomContext';
export default function Profile ({navigation,route}) {
    const {User,setUser} = useContext(UserContext);
    const {Auth,setAuth} = useContext(AuthContext);
    const {DisplayTabBar,setDisplayTabBar} = useContext(DisplayTabBarContext);
    useFocusEffect(
        useCallback(() => {
            setDisplayTabBar(true)
        }, [])
    );
    useEffect(()=>{
        NavigationSetOptionsProfile(navigation)
    },[]);
    return (
        <React.Fragment>
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <ProfileHeader User={User}/>
                <ProfileBody User={User} navigation={navigation} setUser={setUser} setAuth={setAuth} />
            </View>
        </React.Fragment>
    );
}