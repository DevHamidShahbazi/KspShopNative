import React, {useContext, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {ProfileBody, ProfileHeader} from './components/ProfileFunction';
import  {NavigationSetOptionsProfile} from './components/ProfileStyle';
import {AuthContext, UserContext} from '../../../Global/Context/CustomContext';
export default function Profile ({navigation,route}) {
    const {User,setUser} = useContext(UserContext);
    const {Auth,setAuth} = useContext(AuthContext);
    useEffect(()=>{
        NavigationSetOptionsProfile(navigation)
    },[]);
    return (
        <React.Fragment>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flex:1,backgroundColor:'#fff'}}>
                <ProfileHeader User={User}/>
                <ProfileBody User={User} navigation={navigation} />
            </ScrollView>
        </React.Fragment>
    );
}
