import {React,useContext,DisplayTabBarContext,FlatList, View,RefreshControl,useEffect,useState,useFocusEffect,useCallback,ListIsEmpty,NavigationSetOptionsPanel} from '../../../../Global/Import/Imports';
import OrdersItem, {GetOrders} from './components/OrdersFunction';

export default function Orders ({navigation,route}) {
    const [Loading,setLoading] = useState(true);
    const [Orders,setOrders] = useState(null);
    const [IsEmpty,setIsEmpty] = useState(false);
    const {setDisplayTabBar} = useContext(DisplayTabBarContext);
    useFocusEffect(
        useCallback(() => {
            setDisplayTabBar(true)
        }, [])
    );
    useEffect(()=>{
        GetOrders(setOrders,setLoading,setIsEmpty)
        NavigationSetOptionsPanel(navigation,'لیست کل سفارشات')
    },[]);
    return (
        <React.Fragment>
            <ListIsEmpty IsEmpty={IsEmpty} Loading={Loading}/>
            <View style={{display:Loading || IsEmpty?'none':'flex',flex:1,justifyContent:'center',backgroundColor:'#e5e7eb'}}>
                <FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={false}
                            onRefresh={() => GetOrders(setOrders,setLoading,setIsEmpty)}
                        />
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
