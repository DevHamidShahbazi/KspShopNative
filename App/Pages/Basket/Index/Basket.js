import {
    React, useEffect, View, TextBold, useState, ListIsEmpty, ScrollView,useFocusEffect
} from '../../../Global/Import/Imports';
import getData from './components/getData';
import BoxTop from './components/BoxTop';
import Products from './components/Products';
import TopNavigation from './components/TopNavigation';
export default function Basket ({navigation ,Route}) {
    const [Render,setRender] = useState(1);
    const [Loading,setLoading] = useState(true);
    const [Basket,setBasket] = useState(null);
    const [IsEmpty,setIsEmpty] = useState(false);
    const [Factor,setFactor] = useState(false);
    useFocusEffect(
        React.useCallback(() => {
            setLoading(true)
            setIsEmpty(false)
            getData(setLoading,setBasket,setIsEmpty,setFactor,setRender,Render)
        }, [])
    );
    useEffect(()=>{
        navigation.setOptions({headerShown:false})
        getData(setLoading,setBasket,setIsEmpty,setFactor,setRender,Render)
    },[Factor,Render]);
    return (
        <React.Fragment>
            <TopNavigation/>
            <ListIsEmpty IsEmpty={IsEmpty} Loading={Loading}/>
            <View style={{display:Loading || IsEmpty?'none':'flex',flex:1,justifyContent:'center',backgroundColor:'#e5e7eb'}}>
                {Basket != null?
                    <ScrollView
                        keyboardShouldPersistTaps='handled'
                        showsVerticalScrollIndicator={false}>
                        <BoxTop Render={Render} setRender={setRender} Basket={Basket} Factor={Factor} setFactor={setFactor}/>
                        <Products Basket={Basket} setRender={setRender} Render={Render}/>
                    </ScrollView>
                    :null}
            </View>
        </React.Fragment>
    );
}
