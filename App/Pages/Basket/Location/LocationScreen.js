import {
    React, Linking, ScrollView, useFocusEffect, View, useState,
    Text, TextBold, NavigationSetOptionsPanel, useEffect, Alert, BasketContext, useContext,
} from '../../../Global/Import/Imports';
import getData from './components/getData';
import BoxTop from '../Index/components/BoxTop';
import Form from './components/Form';
import RemoveBasket from './components/RemoveBasket';
export default function LocationScreen({navigation,route}) {
    const [Location,setLocation] = useState(null);
    const [Render,setRender] = useState(1);
    const [Loading,setLoading] = useState(true);
    const [Basket,setBasket] = useState(null);
    const [IsEmpty,setIsEmpty] = useState(false);
    const [Factor,setFactor] = useState(false);
    // const {setBasketCount} = useContext(BasketContext);
    useFocusEffect(
        React.useCallback(() => {
            Linking.addEventListener('url', handleOpenURL);
            setLoading(true)
            getData(setLocation,setLoading,setBasket,setIsEmpty,setFactor,setRender,Render)
        }, [Factor,Render])
    );
    useEffect(()=>{
        Linking.addEventListener('url', handleOpenURL);
        NavigationSetOptionsPanel(navigation,'ثبت اطلاعات و پرداخت');
        getData(setLocation,setLoading,setBasket,setIsEmpty,setFactor,setRender,Render)
    },[]);
    const handleOpenURL = (event) => {
        Linking.getInitialURL().then(url => {
            navigate(event.url);
        });
    }
    const navigate = (url) => {
        if (url == 'kspshopandroid://orders/1'){
            RemoveBasket()
            navigation.navigate('Home')
        }
        if (url == 'kspshopandroid://orders/0'){
            Alert.alert('پرداخت انجام نشد')
        }
    }

    return (
        <React.Fragment>
            <View style={{flex:1,justifyContent:'center',backgroundColor:'#e5e7eb'}}>
                <ScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false}>
                    {Basket != null ? <BoxTop Render={Render} setRender={setRender} Basket={Basket}
                                              Factor={Factor} setFactor={setFactor}/> :null}
                    {Location != null ?<Form Location={Location}/>:null}
                </ScrollView>
            </View>
        </React.Fragment>
    );
}
