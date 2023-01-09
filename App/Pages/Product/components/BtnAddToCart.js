import {
    PriceProduct,
    ProductNotCount,
    React,
    Text,
    TextRegular,
    TouchableOpacity,
    View,
} from '../../../Global/Import/Imports';
import {Dimensions} from 'react-native';
import {DetailProduct} from '../../../Global/Components/DetailProduct/DetailProduct';
import OfferProduct from '../../../Global/Components/DetailProduct/OfferProduct';
const ScreenWidth = Dimensions.get('window').width;

export function BtnAddToCartSize ({product}) {
    return (
        <React.Fragment>
            {product.offer != null?
                    <View style={{height:95,width:ScreenWidth,justifyContent:'center',flexDirection:'row',bottom:0}}>
                        <OfferProduct offer={product.offer}/>
                    </View>:null}
            <View style={{height:95,flexDirection:'row',borderTopWidth:1,borderTopColor:'rgb(160,160,160)',bottom:0,width:ScreenWidth,backgroundColor:'#efefef'}}>
                <View style={{flex:2,justifyContent:'center',padding:3}}>
                    {product.status == '2'?<View style={{flex:1,justifyContent:'center'}}>
                        <Text style={{fontSize:16,textAlign:'center',fontFamily:'iranyekanbold(fanum)',color:'#000'}}>
                            {product.price}
                            <TextRegular style={{fontSize:14}}>
                                {' تومان '}
                            </TextRegular>
                        </Text>
                    </View>:null}
                    {product.status == '2'?
                        <TouchableOpacity
                            style={{backgroundColor:'#213854',borderRadius:8.5,padding:8.5}}
                            activeOpacity={.7}
                            onPress={() => console.log('Add to Cart')}>
                            <Text style={{textAlign:'center',fontFamily:'Vazir-Bold',color:'#fff'}}>
                                افزودن به سبد خرید
                            </Text>
                        </TouchableOpacity>
                        :<ProductNotCount/>}
                </View>
                {product.status == '2'?
                    <View style={{flex:3,flexDirection:'row',alignItems:'center',padding:5}}>
                        <View style={{flex:1}}>
                            <DetailProduct item={product}/>
                        </View>
                    </View>:null}
            </View>
        </React.Fragment>
    );
}

export default function BtnAddToCart ({product}) {
    return (
        <React.Fragment>
            <View style={{height:65,flexDirection:'row',borderTopWidth:1,borderTopColor:'rgb(160,160,160)',bottom:0,width:ScreenWidth,backgroundColor:'#efefef'}}>

                <View style={{flex:3,justifyContent:'center',padding:5}}>
                    <PriceProduct product={product} offer={product.offer}/>
                </View>

                <View style={{flex:3,justifyContent:'center',padding:5}}>
                    <TouchableOpacity
                        style={{backgroundColor:'#213854',elevation:4,borderRadius:8.5,padding:8.5}}
                        activeOpacity={.7}
                        onPress={() => console.log('Add to Cart')}>
                        <Text style={{textAlign:'center',fontFamily:'Vazir-Bold',color:'#fff'}}>
                            افزودن به سبد خرید
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </React.Fragment>
    );
}
