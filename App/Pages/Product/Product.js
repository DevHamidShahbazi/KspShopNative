import {
    React, useState, useEffect, View, SearchBarTouchNavigationSetOptions,
    TextBold, Image, TouchableOpacity, Text, LoadingScreen,
    useContext, DisplayTabBarContext, useFocusEffect,} from '../../Global/Import/Imports';
import getData from './components/getData';
import Gallery from './components/Gallery';
import Header from './components/Header';
import ProductType from './components/ProductType';
export default function Product ({navigation,route}) {
    const {setDisplayTabBar} = useContext(DisplayTabBarContext);
    const [Loading,setLoading] = useState(true);
    const [Data,setData] = useState({});
    const product_id = route.params;
    useFocusEffect(
        React.useCallback(() => {
            setDisplayTabBar(false)
        }, [])
    );
    console.log(Data.type)
    useEffect(()=>{
        navigation.setOptions({headerShown:false})
        getData (product_id,setData,setLoading)
    },[product_id]);
    return (
        <React.Fragment>
            <SearchBarTouchNavigationSetOptions navigation={navigation} route={route}/>
            <LoadingScreen Loading={Loading}/>
            {
                Loading?null:
                    <React.Fragment>
                        <View style={{flex:1,backgroundColor:'#fff'}}>
                           <Gallery gallery={Data.gallery} ParentImage={Data.image}/>
                            <View style={{flex:1,padding:5}}>
                                <Header name={Data.name} category={Data.category} h1={Data.h1} ParentCategory={Data.ParentCategory} />
                                <ProductType Data={Data}/>
                            </View>
                        </View>
                    </React.Fragment>
            }
        </React.Fragment>
    );
}
