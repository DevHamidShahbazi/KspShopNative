import {React,ScrollView, useFocusEffect,View,useState ,Text, TextBold, NavigationSetOptionsPanel,useEffect} from '../../../Global/Import/Imports';
import getData from '../Index/components/getData';
import BoxTop from '../Index/components/BoxTop';
import Styles from './components/Styles';
import Form from './components/Form';
export default function LocationScreen({navigation,route}) {
    const [Render,setRender] = useState(1);
    const [Loading,setLoading] = useState(true);
    const [Basket,setBasket] = useState(null);
    const [IsEmpty,setIsEmpty] = useState(false);
    const [Factor,setFactor] = useState(false);
    useFocusEffect(
        React.useCallback(() => {
            setLoading(true)
            getData(setLoading,setBasket,setIsEmpty,setFactor,setRender,Render)
        }, [Factor,Render])
    );
    useEffect(()=>{
        NavigationSetOptionsPanel(navigation,'ثبت اطلاعات و پرداخت');
        getData(setLoading,setBasket,setIsEmpty,setFactor,setRender,Render)
    },[]);
    return (
        <React.Fragment>
            <View style={{flex:1,justifyContent:'center',backgroundColor:'#e5e7eb'}}>
                <ScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false}>
                    {Basket != null ? <BoxTop Render={Render} setRender={setRender} Basket={Basket}
                                              Factor={Factor} setFactor={setFactor}/>
                    :null}
                    <Form/>
                </ScrollView>
            </View>
        </React.Fragment>
    );
}
