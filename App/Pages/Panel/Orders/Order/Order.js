import React, {useEffect, useState} from 'react';
import {NavigationSetOptionsPanel} from '../../Index/components/PanelStyles';
import {ScrollView} from 'react-native';
import OrderStyles from './components/OrderStyles';
import {OrderTopItems} from './components/OrderFuctions';
import {PurchasedProductItems} from '../../PurchasedProducts/Index/components/PurchasedProductsFunctions';

export default function Order ({navigation,route}) {
    const {order}=route.params;
    useEffect(()=>{
        NavigationSetOptionsPanel(navigation,'سفارش '+order.code);
    },[]);
    return (
        <React.Fragment>
            <ScrollView style={OrderStyles.Container} showsVerticalScrollIndicator={false}>
                <OrderTopItems order={order}/>
                {order.products.map((order,index) => <PurchasedProductItems key={index} product={order}/>)}
            </ScrollView>
        </React.Fragment>
    );
}
