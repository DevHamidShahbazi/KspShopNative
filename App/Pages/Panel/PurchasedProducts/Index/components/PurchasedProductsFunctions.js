import React from 'react';
import {Image, Text, View} from 'react-native';
import GlobalStyles from '../../../../../Global/Styles/GlobalStyles';
import {ContainerDetailProduct,} from '../../../../../Global/Components/DetailProduct/DetailProduct';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import collect from "collect.js";

export const PurchasedProductGetProducts = (setProducts,setLoading,setIsEmpty) => {
    AsyncStorage.getItem('api_token',(error, result) => {
        if (result){
            axios.post('v_1_0/products/purchased', {},{
                headers:{
                    'api_token':result
                }
            })
                .then(function (response) {
                    const {data} = response;

                    if (data.status == 'success'){
                        if (collect(data.products).first()){
                            setIsEmpty(false)
                        }else {
                            setIsEmpty(true)
                        }
                        setLoading(false)
                        setProducts(data.products)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    })
};

export function PurchasedProductItems ({product}) {
    return (
        <React.Fragment>
            <View style={[GlobalStyles.Card,GlobalStyles.Shadow,{padding:8,marginTop:"2%",borderRadius:5}]}>
                <Text style={{color:'#155e75',fontFamily:'Vazir-Bold',textAlign:'center'}}>
                    {product.DefName}
                </Text>
                <View style={{justifyContent:'center',flexDirection:'row',marginBottom:5,marginTop:5,borderTopWidth:1,borderTopColor:'rgba(0,0,0,0.45)'}}>
                    <View style={{flex:8,justifyContent:'center',alignItems:'flex-end'}}>
                        <ContainerDetailProduct product={product}/>
                    </View>
                    <View style={{flex:2,justifyContent:'center'}}>
                        <Image  style={{width:80, height: 80}} source={{uri:product.DefImage}}/>
                    </View>
                </View>
            </View>
        </React.Fragment>
    );
}
