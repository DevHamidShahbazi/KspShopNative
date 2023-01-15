import {React,Text,Icon, TouchableOpacity, View} from '../../../../Global/Import/Imports';
import {PricesTopBox,BoxFactor} from './Components';
import Styles from './Styles';
export default function BoxTop({Basket,Factor,setFactor,Render,setRender}) {
    return (
        <React.Fragment>
            <View style={Styles.containerBoxTop}>
                <View style={{backgroundColor : '#213854'}}>
                    <Text style={Styles.titleBoxTop}>اطلاعات خرید</Text>
                </View>
                <View style={{padding:10,alignItems:'center'}}>
                    <PricesTopBox Basket={Basket}/>
                    <TouchableOpacity onPress={() => console.log('go to map')} style={Styles.btnSubmit} activeOpacity={.75}>
                        <Text style={Styles.textBtnSubmit}>ادامه ثبت سفارش</Text>
                        <Icon name={'shopping-basket'} color={'#fff'} size={17} />
                    </TouchableOpacity>
                    <BoxFactor setRender={setRender} Render={Render} Basket={Basket}
                               setFactor={setFactor} Factor={Factor}/>
                </View>
            </View>
        </React.Fragment>
    );
}
