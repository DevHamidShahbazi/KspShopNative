 import {React,useContext, useEffect,useCallback,useFocusEffect,View, AuthContext,UserContext,DisplayTabBarContext, ProfileBody, ProfileHeader, NavigationSetOptionsProfile} from '../../../Global/Import/Imports';
export default function Profile ({navigation,route}) {
    const {User,setUser} = useContext(UserContext);
    const {Auth,setAuth} = useContext(AuthContext);
    const {setDisplayTabBar} = useContext(DisplayTabBarContext);
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
