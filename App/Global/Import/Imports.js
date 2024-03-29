

export {default as React,useEffect,useCallback,useState,useContext,useRef,ReactNode,useImperativeHandle } from 'react';
export {
    View,Text,ScrollView,FlatList,Alert,StatusBar,StyleSheet,
    Image,RefreshControl,Button,Linking,PermissionsAndroid,
    TouchableOpacity,TouchableNativeFeedback,TextInput,
    ActivityIndicator,Dimensions,ImageBackground,Animated,
    LogBox,Platform,ToastAndroid,BackHandler,
} from 'react-native';
// export { RFValue } from "react-native-responsive-fontsize";
// export function RFValue (number) {return number-1}
export {default as Modal} from "react-native-modal";
export {default as collect} from "collect.js";
export {default as Slick} from 'react-native-slick';
export {default as AsyncStorage} from '@react-native-async-storage/async-storage';
export { NavigationContainer ,useFocusEffect,useNavigation  } from '@react-navigation/native';
export {DisplayTabBarContext,AuthContext,UserContext,BasketContext} from '../Context/CustomContext';
export {createStackNavigator} from '@react-navigation/stack';
export {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
export {default as axios} from 'axios';
export {CardStyleInterpolators} from '@react-navigation/stack';
export {default as LinearGradient} from "react-native-linear-gradient";
export {default as Icon} from 'react-native-vector-icons/dist/FontAwesome5';
export {default as MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
export {default as GlobalStyles} from '../Styles/GlobalStyles';
export {UseSetFields} from '../Hooks/CustomHooks';
export {default as LoadAgain} from '../Components/LoadAgain';
export {TextBold,TextRegular} from '../Components/Components';
export {default as MiddlewareNotAuth} from '../middleware/MiddlewareNotAuth';
export {default as MiddlewareNotVerify} from '../middleware/MiddlewareNotVerify';
export {default as MiddlewareAuth} from '../middleware/MiddlewareAuth';
export {default as MiddlewareVerify} from '../middleware/MiddlewareVerify';
export {default as MiddlewareVerifyShow} from '../middleware/MiddlewareVerifyShow';
export {default as Profile} from '../../Pages/Panel/Profile/Profile';
export {default as EditProfile} from '../../Pages/Panel/EditProfile/EditProfile';
export {default as Register} from '../../Auth/Register/Register';
export {default as Login} from '../../Auth/Login/Login';
export {default as BasketIndex} from '../../Pages/Basket/Index/IndexBasket';
export {default as Basket} from '../../Pages/Basket/Index/Basket';
export {default as IndexCategory} from '../../Pages/Category/Index/IndexCategory';
export {default as Home} from '../../Pages/Home/Home';
export {default as Product} from '../../Pages/Product/Product';
export {default as IndexHome} from '../../Pages/Home/IndexHome';
export {default as Chat} from '../../Pages/Chat/Chat';
export {default as Panel} from '../../Pages/Panel/Index/Panel';
export {default as ForgetPassword} from '../../Auth/ForgetPassword/ForgetPassword';
export {default as VerifyForgetPassword} from '../../Auth/VerifyForgetPassword/VerifyForgetPassword';
export {default as VerifyScreen} from '../../Auth/Verify/Verify';
export {default as Orders} from '../../Pages/Panel/Orders/Index/Orders';
export {default as PurchasedProducts} from '../../Pages/Panel/PurchasedProducts/Index/PurchasedProducts';
export {default as Comments} from '../../Pages/Panel/Comments/Comments';
export {default as ResetPassword} from '../../Pages/Panel/ResetPassword/ResetPassword';
export {default as About} from '../../Pages/About/About';
export {default as Order} from '../../Pages/Panel/Orders/Order/Order';
export {default as ParentCategory} from '../../Pages/Category/ParentCategory/ParentCategory';
export {default as ChildCategory} from '../../Pages/Category/ChildCategory/ChildCategory';
export {default as Categories} from '../../Pages/Category/Index/Categories';
export {default as Company} from '../../Pages/Panel/Compnay/Company';
export {default as Search} from '../../Pages/Search/Search';
export {default as StylesAuth} from '../../Auth/components/StylesAuth';
export {default as LoadingScreen} from '../../Pages/Loading/LoadingScreen';
export {default as CarouselProducts} from '../Components/CarouselProducts';
export {handleAgainVerify, handleVerify, NavigationSetOptionsVerify, SendCodeWithViewVerify,} from '../../Auth/Verify/components/FunctionVerify';
export {LogOut,CheckToken,BoxAuth, GradientAuth, InputGroupAuth, InputGroupPassAuth, ResponseData_Register_and_Login,TimerView} from '../../Auth/components/FunctionAuth';
export {Error,Success} from '../Alerts/GlobalAlert';
export {CustomBadge,TabScreenOptions,CustomTextInput,number_format,CheckBasket} from '../Components/Components';
export {ProfileBody, ProfileHeader} from '../../Pages/Panel/Profile/components/ProfileFunction';
export {default as ProfileStyles,NavigationSetOptionsProfile} from '../../Pages/Panel/Profile/components/ProfileStyle';
export {default as PanelStyles,NavigationSetOptionsPanel} from '../../Pages/Panel/Index/components/PanelStyles';
export {handleEditProfile,TextWarningPhoneMustNotNull} from '../../Pages/Panel/EditProfile/components/EditProfileFunction';
export {default as handleForgetPassword} from '../../Auth/ForgetPassword/components/ForgetPasswordFunction';
export {NavigationSetOptionsForgetPassword,handleVerifyForgetPassword,handleAgainVerifyForgetPassword} from '../../Auth/VerifyForgetPassword/components/FunctionVerifyForgetPassword';
export {GoToForgetPasswordFromLogin, GoToRegisterFromLogin, handleLogin, NavigationSetOptionsLogin} from '../../Auth/Login/components/FunctionLogin';
export {GoToLoginFromRegister, handleRegister, InputGroupPassConfirmAuth, NavigationSetOptionsRegister} from '../../Auth/Register/components/FunctionRegister';
export {NavigationSetOptionsAbout} from '../../Pages/About/components/AboutFunction';
export {default as CommentsStyles} from '../../Pages/Panel/Comments/components/CommentsStyles';
export {default as ListIsEmpty} from '../Components/IsEmpty';
export {CommentItems,CommentPanelGetComment} from '../../Pages/Panel/Comments/components/CommentFunction';
export {CompanyStyles} from '../../Pages/Panel/Compnay/components/CompanyStyles';
export {CompanyAlertStatus, CompanySection, CompanyInputs, handleSubmitCompanyWithText, CompanyObjectStates} from '../../Pages/Panel/Compnay/components/CompanyFunction';
export {CategoriesBanner,SearchBarTouchNavigationSetOptions} from '../../Pages/Category/Index/components/CategoriesFunctions';
export {getSliders, ShowSliders, SliderSlick} from '../Components/Sliders';
export {CategoryItem,ProductItem} from '../Components/Items';
export {DetailProduct,ContainerDetailProduct,AttributeDetailProduct,CheckTypeDetailProduct, FinalPriceDetailProduct, NameValueDetailProduct} from '../Components/DetailProduct/DetailProduct';
export {default as ProductNotCount} from '../Components/DetailProduct/ProductNotCount';
export {default as PriceProduct} from '../Components/DetailProduct/PriceProduct';
export {default as OfferProduct} from '../Components/DetailProduct/OfferProduct';
