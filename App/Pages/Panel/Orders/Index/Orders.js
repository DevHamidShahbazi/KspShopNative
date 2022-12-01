import React,{useState,useEffect} from 'react';
import {NavigationSetOptionsPanel} from '../../Index/components/PanelStyles';
import {FlatList, Text, View} from 'react-native';
import OrdersItem, {GetOrders} from './components/OrdersFunction';

export default function Orders ({navigation,route}) {
    const [Orders,setOrders] = useState(null);
    useEffect(()=>{
        GetOrders(setOrders)
        NavigationSetOptionsPanel(navigation,'سفارش ها')
    },[]);
    return (
        <React.Fragment>
            <View style={{flex:1,justifyContent:'center',backgroundColor:'#e5e7eb'}}>
                <FlatList
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
