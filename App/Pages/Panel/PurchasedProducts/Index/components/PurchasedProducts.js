import React from 'react';
import {Image, Text, View} from 'react-native';
import GlobalStyles from '../../../../../Global/Styles/GlobalStyles';
import {
    DetailProduct,
    FinalPriceDetailProduct,
    NameDetailProduct,
} from '../../../../../Global/Components/DetailProduct/DetailProduct';

export function PurchasedProductItems ({product}) {
    console.log(product)
    return (
        <React.Fragment>
            <View style={[GlobalStyles.Card,GlobalStyles.Shadow,{padding:8,marginTop:"2%",borderRadius:5}]}>
                <Text style={{color:'#155e75',fontFamily:'Vazir-Bold',textAlign:'center'}}>
                    {product.DefName}
                </Text>
                <View style={{justifyContent:'center',flexDirection:'row',marginBottom:5,marginTop:5,borderTopWidth:1,borderTopColor:'rgba(0,0,0,0.45)'}}>
                    <View style={{flex:8,justifyContent:'center',alignItems:'flex-end'}}>
                            {
                                product.DefType === 'size' || product.DefType === 'attribute' ?
                                    product.DefType === 'size' ?
                                        <DetailProduct item={product}/>
                                        :
                                        <Text style={{color:'#000',fontFamily:'Vazir'}}>
                                            {product.name} :
                                            <Text style={{color:'#000',fontFamily:'Vazir-Bold'}}>
                                                {product.value}
                                            </Text>
                                        </Text>
                                    :
                                    <Text style={{color:'#000',fontFamily:'Vazir-Bold'}}>
                                        {product.name}
                                    </Text>
                            }
                            <NameDetailProduct name={'تعداد : '} item={product.quantity} prefix={' عدد '}/>
                            <NameDetailProduct name={'قیمت واحد : '} item={product.price_one} prefix={' تومان '}/>
                            {product.discount !== '0' ? <FinalPriceDetailProduct discount={true} price={product.some_discount} percent={product.percent} /> : null}
                            <FinalPriceDetailProduct percent={product.percent} discount={false} price={product.price} />
                    </View>
                    <View style={{flex:2,justifyContent:'center'}}>
                        <Image  style={{width:80, height: 80}} source={{uri:product.DefImage}}/>
                    </View>
                </View>
            </View>
        </React.Fragment>
    );
}
