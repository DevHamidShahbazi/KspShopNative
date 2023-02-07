import 'react-native-gesture-handler';
import {
    React, StatusBar, axios, createBottomTabNavigator,useEffect,
    IndexHome, IndexCategory, BasketIndex, Chat, Panel,useState,
    TabScreenOptions, NavigationContainer, CheckToken, CheckBasket,
    UserContext, BasketContext, DisplayTabBarContext, AuthContext,LogBox
} from './Global/Import/Imports';
// LogBox.ignoreLogs(['Remote debugger','Please report']);
LogBox.ignoreAllLogs()
// axios.defaults.baseURL = 'https://ksp-shop.com/api/';
axios.defaults.baseURL = 'http://192.168.100.15:8000/api/';
export default App = () => {
    const [Auth,setAuth] = useState(null);
    const [User,setUser] = useState(null);
    const [DisplayTabBar,setDisplayTabBar] = useState(true);
    const [BasketCount,setBasketCount] = useState(0);
    useEffect(()=>{
        CheckToken(setAuth,setUser)
        CheckBasket(setBasketCount)
    },[]);
    const Tab = createBottomTabNavigator();
    return (
        <AuthContext.Provider value={{Auth,setAuth}}>
            <UserContext.Provider value={{User,setUser}}>
                <BasketContext.Provider value={{BasketCount,setBasketCount}}>
                    <DisplayTabBarContext.Provider value={{DisplayTabBar,setDisplayTabBar}}>
                        <NavigationContainer>
                            <Tab.Navigator  initialRouteName="IndexHome" screenOptions={{tabBarHideOnKeyboard: true,tabBarStyle: {display:DisplayTabBar?'flex':'none'}}}>
                                <Tab.Screen name="Panel" component={Panel} options={TabScreenOptions('پنل کاربری','account')}/>
                                {/*<Tab.Screen name="Chat" component={Chat} options={TabScreenOptions('پیام رسان','chat')}/>*/}
                                <Tab.Screen name="BasketIndex" component={BasketIndex} options={TabScreenOptions('سبد خرید','cart',BasketCount==0?null:BasketCount)}/>
                                <Tab.Screen name="Category" component={IndexCategory} options={TabScreenOptions('دسته بندی ها','view-dashboard')}/>
                                <Tab.Screen name="IndexHome" component={IndexHome} options={TabScreenOptions('خانه','home')}/>
                            </Tab.Navigator>
                        </NavigationContainer>
                    </DisplayTabBarContext.Provider>
                </BasketContext.Provider>
            </UserContext.Provider>
        </AuthContext.Provider>
    );
};
