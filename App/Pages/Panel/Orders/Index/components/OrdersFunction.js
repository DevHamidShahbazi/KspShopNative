import React from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const GetOrders =(setOrders) => {
    AsyncStorage.getItem('api_token',(error, result) => {
        if (result){
            axios.post('v_1_0/orders', {},{
                headers:{
                    'api_token':result
                }
            })
                .then(function (response) {
                    const {data} = response;
                    if (data.status == 'success'){
                        setOrders(data.orders)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    })
}

export default function OrdersItem ({item}) {
    return (
        <React.Fragment>
            <View style={{padding:10,backgroundColor:'#fff',elevation:8,borderRadius:8,marginTop:5,marginBottom:5}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'#000',fontSize:14,textAlign:'center',fontFamily:'iranyekanbold(fanum)'}}>
                        {item.created_at}
                    </Text>
                    <Text>
                        status
                    </Text>
                </View>
                <View style={{backgroundColor:'Body'}}>
                    <Text style={{color:'#000',fontSize:20,textAlign:'center',fontFamily:'iranyekanbold(fanum)'}}>
                        {
                            item.status == 'unpaid'?
                                item.price_data
                                :item.price
                        } تومان
                    </Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>
                        Footer
                    </Text>
                    <Text>
                        Footer
                    </Text>
                </View>
            </View>
        </React.Fragment>
    );
}
