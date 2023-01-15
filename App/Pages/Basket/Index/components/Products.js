import {
    React, Image, Text, View, FinalPriceDetailProduct,
    GlobalStyles, number_format, TouchableOpacity, Icon,
} from '../../../../Global/Import/Imports';
import {OfferAndDiscount, priceFinalForProduct, ProductDetailBasket} from './Components';
import Styles from './Styles';
import DeleteBasket from './DeleteBasket';
import EditBasket from './EditBasket';
export default function Products({Basket,setRender,Render}) {
    return (
        Object.entries(Basket.all).map((item,index) =>{
            const product = item[1].product;
            return (
                <View key={index} style={[GlobalStyles.Card,GlobalStyles.Shadow,{padding:8,marginTop:"2%",borderRadius:5}]}>
                    <Text style={Styles.defNameProduct}>{product.DefName}</Text>
                    <View style={Styles.containerProduct}>
                        <View style={Styles.detailsProduct}>
                            <ProductDetailBasket product={product} item={item[1]}/>
                            <OfferAndDiscount item={item[1]} product={product}/>
                        </View>
                        <View style={{flex:2,justifyContent:'center'}}>
                            <Image  style={{width:80, height: 80}} source={{uri:product.DefImage}}/>
                        </View>
                    </View>
                    <View style={Styles.footerProduct}>
                        <FinalPriceDetailProduct discount={false}
                                                 price={number_format(priceFinalForProduct(item[1],product))} />
                        <View style={{flex:2,flexDirection:'row-reverse',justifyContent:'space-around'}}>
                            <EditBasket item={item[1]} setRender={setRender} Render={Render}/>
                            <DeleteBasket item={item[1]} setRender={setRender} Render={Render}/>
                        </View>
                    </View>
                </View>
            )
        })
    )
}
