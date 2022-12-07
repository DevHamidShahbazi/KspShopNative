import React,{useState,useEffect} from 'react';
import {NavigationSetOptionsPanel} from '../../Index/components/PanelStyles';
import {FlatList, ActivityIndicator, View,RefreshControl} from 'react-native';
import OrdersItem, {GetOrders} from './components/OrdersFunction';
import ListIsEmpty from '../../../../Global/Components/IsEmpty';

export default function Orders ({navigation,route}) {
    const [Loading,setLoading] = useState(true);
    const [Orders,setOrders] = useState(null);
    const [IsEmpty,setIsEmpty] = useState(false);
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
