import 'react-native-gesture-handler';
import {React,useState,useEffect,StatusBar,axios,
    AuthContext,UserContext,DisplayTabBarContext,createBottomTabNavigator,
    Home,IndexCategory,Basket,Chat,Panel,CheckToken,TabScreenOptions,
    NavigationContainer,
} from './Global/Import/Imports';
// .axios.defaults.baseURL = 'https://ksp-shop.com/';
axios.defaults.baseURL = 'http://192.168.100.15:8000/api/';
export default App = () => {
    const [Auth,setAuth] = useState(null);
    const [User,setUser] = useState(null);
    const [DisplayTabBar,setDisplayTabBar] = useState(true);
    const [Setting,setSetting] = useState(null);
    useEffect(()=>{
        CheckToken(setAuth,setUser)
    },[]);
    const Tab = createBottomTabNavigator();
    return (
        <AuthContext.Provider value={{Auth,setAuth}}>
            <UserContext.Provider value={{User,setUser}}>
                <DisplayTabBarContext.Provider value={{DisplayTabBar,setDisplayTabBar}}>
                    <StatusBar backgroundColor="#213854"   barStyle="light-content"/>
                    <NavigationContainer>
                        <Tab.Navigator  initialRouteName="Home" screenOptions={{tabBarHideOnKeyboard: true,tabBarStyle: {display:DisplayTabBar?'flex':'none'}}}>
                            <Tab.Screen name="Panel" component={Panel} options={TabScreenOptions('پنل کاربری','account')}/>
                            <Tab.Screen name="Chat" component={Chat} options={TabScreenOptions('پیام رسان','chat')}/>
                            <Tab.Screen name="Basket" component={Basket} options={TabScreenOptions('سبد خرید','cart')}/>
                            <Tab.Screen name="Category" component={IndexCategory} options={TabScreenOptions('دسته بندی ها','view-dashboard')}/>
                            <Tab.Screen name="Home" component={Home} options={TabScreenOptions('خانه','home')}/>
                        </Tab.Navigator>
                    </NavigationContainer>
                </DisplayTabBarContext.Provider>
            </UserContext.Provider>
        </AuthContext.Provider>
    );
};


