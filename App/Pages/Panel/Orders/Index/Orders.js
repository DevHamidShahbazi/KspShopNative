import {
    React,
    useContext,
    DisplayTabBarContext,
    FlatList,
    View,
    RefreshControl,
    useEffect,
    useState,
    useFocusEffect,
    useCallback,
    ListIsEmpty,
    NavigationSetOptionsPanel,
    LoadAgain,
} from '../../../../Global/Import/Imports';
import OrdersItem, {GetOrders} from './components/OrdersFunction';

export default function Orders ({navigation,route}) {
    const [Render,setRender] = useState(0);
    const [Loading,setLoading] = useState(true);
    const [Orders,setOrders] = useState(null);
    const [IsEmpty,setIsEmpty] = useState(false);
    const {setDisplayTabBar} = useContext(DisplayTabBarContext);
    const getData = () => GetOrders(setOrders,setLoading,setIsEmpty,Render,setRender);
    useFocusEffect(
        useCallback(() => {
            setDisplayTabBar(true)
            getData()
        }, [])
    );
    useEffect(()=>{
        getData()
        NavigationSetOptionsPanel(navigation,'لیست کل سفارشات')
    },[]);
    return (
        <React.Fragment>
            <ListIsEmpty IsEmpty={IsEmpty} Loading={Loading}/>
            <View style={{display:IsEmpty||Loading?'none':'flex',flex:1,justifyContent:'center',backgroundColor:'#e5e7eb'}}>
                <FlatList
                    refreshControl={
                        <RefreshControl refreshing={false} onRefresh={() => getData()}/>
                    }
                    data={Orders}
                    renderItem={({item}) => <OrdersItem item={item}/>}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{padding:10,display:Loading?'none':'flex'}}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </React.Fragment>
    );
}
