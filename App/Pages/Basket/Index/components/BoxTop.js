import {
    React, Text, Icon,
    TouchableOpacity, View, useNavigation,
    AuthContext, UserContext, useContext,
} from '../../../../Global/Import/Imports';
import {PricesTopBox,BoxFactor} from './Components';
import Styles from './Styles';
import {handleOnPress} from '../../Map/components/handleOnPress';
export default function BoxTop({Basket,Factor,setFactor,Render,setRender}) {
    const navigation = useNavigation();
    const {Auth} = useContext(AuthContext);
    const {User} = useContext(UserContext);
    return (
        <React.Fragment>
            <View style={Styles.containerBoxTop}>
                <View style={{backgroundColor : '#213854'}}>
                    <Text style={Styles.titleBoxTop}>اطلاعات خرید</Text>
                </View>
                <View style={{padding:10,alignItems:'center'}}>
                    <PricesTopBox Basket={Basket}/>
                    {navigation.getState().index==0?
                        <TouchableOpacity onPress={() => handleOnPress(Auth,User,navigation)} style={Styles.btnSubmit} activeOpacity={.75}>
                            <Text style={Styles.textBtnSubmit}>ادامه ثبت سفارش</Text>
                            <Icon name={'shopping-basket'} color={'#fff'} size={17} />
                        </TouchableOpacity>:null}
                    <BoxFactor setRender={setRender} Render={Render} Basket={Basket}
                               setFactor={setFactor} Factor={Factor}/>
                </View>
            </View>
        </React.Fragment>
    );
}
