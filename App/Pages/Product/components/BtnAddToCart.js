import {PriceProduct, React,Text, TouchableOpacity, View} from '../../../Global/Import/Imports';
import {Dimensions} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
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
