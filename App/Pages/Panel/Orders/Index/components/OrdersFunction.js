import React from 'react';
import {Text, View, TouchableNativeFeedback, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import collect from 'collect.js';
import {ColorTypeStatus, TextTypeStatus} from '../../../../../Global/Components/Components';
import GlobalStyles from '../../../../../Global/Styles/GlobalStyles';
import OrdersStyles from './OrdersStyles';

export const GetOrders =(setOrders,setLoading,setIsEmpty) => {
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
                        if (collect(data).first()){
                            setIsEmpty(false)
                        }else {
                            setIsEmpty(true)
                        }
                        setLoading(false)
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
            <View style={OrdersStyles.Container}>
                <Header created_at={item.created_at} status={item.status}/>
                <Body price={item.price} price_data={item.price_data} status={item.status} images={item.images}/>
                <Footer status={item.status} tax={item.tax}/>
            </View>
        </React.Fragment>
    );
}

const Header = ({created_at,status}) => {
     return (
         <View style={OrdersStyles.Header_Item}>
             <Text style={OrdersStyles.Header_Item_date}>
                 {created_at}
             </Text>
             <Text style={[OrdersStyles.Header_Item_Status,{backgroundColor:ColorTypeStatus(status)+'10',color:ColorTypeStatus(status)}]}>
                 {TextTypeStatus(status)}
             </Text>
         </View>
     );
};

const Body = ({price,price_data,status,images}) => {
     return (
        <React.Fragment>
            <View style={{marginTop:'2%',marginBottom:'2%'}}>
                <View style={OrdersStyles.Body_Images}>
                    {
                        images.map((image,index) => (
                            <Image key={index} style={{width: 60, height: 60}} source={{uri:image}}/>
                        ))
                    }
                </View>
                <Text style={OrdersStyles.Body_Price}>
                    {
                        status == 'unpaid'?
                            price_data
                            :price
                    } تومان
                </Text>
            </View>
        </React.Fragment>
     );
};

const Footer = ({status,tax}) => {
     return (
         <View style={OrdersStyles.Footer}>
             {
                 tax != '0' && status != 'unpaid'?
                     <Btn text={'فاکتور رسمی'} type={'ShowFactor'}/>:null
             }
             <Btn text={'مشاهده سفارش'} type={'ShowOrder'}/>
         </View>
     );
};

const Btn = ({text,type}) => {
     return (
         <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple('#e4e4e4')}>
             <View style={[OrdersStyles.Btn,type=='ShowFactor'?{backgroundColor:'fff'}:null]}>
                 <Text style={[type=='ShowOrder'?GlobalStyles.Text_Btn_white:GlobalStyles.Text_Btn_dark]}>
                     {text}
                 </Text>
             </View>
         </TouchableNativeFeedback>
     );
};
