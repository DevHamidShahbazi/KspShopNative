import 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';
import {
    MiddlewareAuth,MiddlewareVerify,MiddlewareNotAuth,MiddlewareVerifyShow,
    Profile,EditProfile,Register,Login,ForgetPassword,Comments,React,useContext,
    ResetPassword,VerifyForgetPassword,VerifyScreen,Orders,PurchasedProducts,
    About,useCallback,PanelStack,DisplayTabBarContext
} from './components/PanelFunctions';
import Order from '../Orders/Order/Order';
import Company from '../Compnay/Company';
export default function Panel ({navigation ,route}) {
    // const {DisplayTabBar,setDisplayTabBar} = useContext(DisplayTabBarContext);
    // useFocusEffect(
    //     useCallback(() => {
    //         setDisplayTabBar(true)
    //     }, [])
    // );
    return (
        <React.Fragment>

            <MiddlewareAuth>
                <MiddlewareVerify>
                    <PanelStack.Navigator>
                        <PanelStack.Screen name="Profile" component={Profile}/>
                        <PanelStack.Screen name="EditProfile" component={EditProfile}/>
                        <PanelStack.Screen name="Orders" component={Orders}/>
                        <PanelStack.Screen name="Order" component={Order}/>
                        <PanelStack.Screen name="Company" component={Company}/>
                        <PanelStack.Screen name="PurchasedProducts" component={PurchasedProducts}/>
                        <PanelStack.Screen name="Comments" component={Comments}/>
                        <PanelStack.Screen name="ResetPassword" component={ResetPassword}/>
                        <PanelStack.Screen name="About" component={About}/>
                    </PanelStack.Navigator>
                </MiddlewareVerify>
            </MiddlewareAuth>

            <MiddlewareNotAuth>
                <PanelStack.Navigator>
                    <PanelStack.Screen name="Register" component={Register} />
                    <PanelStack.Screen name="Login" component={Login}/>
                    <PanelStack.Screen name="ForgetPassword" component={ForgetPassword} />
                    <PanelStack.Screen name="VerifyForgetPassword" component={VerifyForgetPassword}/>
                </PanelStack.Navigator>
            </MiddlewareNotAuth>

            <MiddlewareAuth>
                <MiddlewareVerifyShow>
                    <PanelStack.Navigator>
                        <PanelStack.Screen name="Verify" component={VerifyScreen}/>
                    </PanelStack.Navigator>
                </MiddlewareVerifyShow>
            </MiddlewareAuth>

        </React.Fragment>
    );
}
