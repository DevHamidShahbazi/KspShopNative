import {
    React, useState, useEffect, SearchBarTouchNavigationSetOptions,
   LoadingScreen, useContext, DisplayTabBarContext, useFocusEffect,
} from '../../Global/Import/Imports';
import getData from './components/getData';
import ProductType from './components/ProductType';
export default function Product ({navigation,route}) {
    const {setDisplayTabBar} = useContext(DisplayTabBarContext);
    const [Loading,setLoading] = useState(true);
    const [Data,setData] = useState({});
    const product_id = route.params;
    console.log(Data)
    useFocusEffect(
        React.useCallback(() => {
            setDisplayTabBar(false);
            setLoading(true);
        }, [])
    );
    useEffect(()=>{
        navigation.setOptions({headerShown:false})
        getData (product_id,setData,setLoading)
    },[product_id]);
    return (
        <React.Fragment>
            <SearchBarTouchNavigationSetOptions navigation={navigation} route={route}/>
            <LoadingScreen Loading={Loading}/>
            {Loading?null:<ProductType Data={Data}/>}
        </React.Fragment>
    );
}
