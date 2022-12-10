 import {React,useContext, useEffect,View, AuthContext,UserContext, ProfileBody, ProfileHeader, NavigationSetOptionsProfile} from '../../../Global/Import/Imports';
export default function Profile ({navigation,route}) {
    const {User,setUser} = useContext(UserContext);
    const {Auth,setAuth} = useContext(AuthContext);
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
