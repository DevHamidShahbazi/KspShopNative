import {
    React, useState, useEffect, SearchBarTouchNavigationSetOptions,
   LoadingScreen, useContext, DisplayTabBarContext, useFocusEffect,
} from '../../Global/Import/Imports';
import getData from './components/getData';
import ProductType from './components/ProductType';
export default function Product ({navigation,route}) {
    const [Render,setRender] = useState(1);
    const {setDisplayTabBar} = useContext(DisplayTabBarContext);
    const [Loading,setLoading] = useState(true);
    const [Data,setData] = useState({});
    const product_id = route.params;
    useFocusEffect(
        React.useCallback(() => {
            setDisplayTabBar(false);
            setLoading(true);
        }, [])
    );
    useEffect(()=>{
        setLoading(true);
        navigation.setOptions({headerShown:false})
        getData(product_id,setData,setLoading,setRender,Render)
    },[product_id,Render]);
    return (
        <React.Fragment>
            <SearchBarTouchNavigationSetOptions navigation={navigation} route={route}/>
            <LoadingScreen Loading={Loading}/>
            {Loading?null:<ProductType Data={Data}/>}
        </React.Fragment>
    );
}
