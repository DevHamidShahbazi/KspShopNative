import React,{useState,useEffect} from 'react';
import {NavigationSetOptionsPanel} from '../../Index/components/PanelStyles';
import {FlatList, ActivityIndicator, View,RefreshControl} from 'react-native';
import OrdersItem, {GetOrders, ImgEmpty} from './components/OrdersFunction';

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
            <View style={{flex:1,justifyContent:'center',backgroundColor:'#e5e7eb'}}>
                <ActivityIndicator style={{display:Loading?'flex':'none'}} animating={Loading} size="large" color="#213854" />
                <ImgEmpty IsEmpty={IsEmpty}/>
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
                    contentContainerStyle={{padding:10}}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </React.Fragment>
    );
}
