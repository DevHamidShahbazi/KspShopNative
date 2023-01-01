import {CarouselProducts,PriceProduct,TouchableOpacity,
    React, ScrollView, View, TextBold,Text, TextRegular,
    OfferProduct,ProductNotCount} from '../../../Global/Import/Imports';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import TextBody from '../components/TextBody';
import {Dimensions} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
export default function ProductSimple ({Data}) {
    const {status,offer}= Data
    return (
        <React.Fragment>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                style={{flex:1,backgroundColor:'#fff'}}>
                <Gallery gallery={Data.gallery} ParentImage={Data.image}/>
                <View style={{flex:1,padding:5}}>
                    <Header Data={Data} />
                    {status != "2"?<ProductNotCount/>:null}
                    <OfferProduct offer={offer}/>
                    <TextBody body={Data.body} check={Data.check}/>
                </View>
                <CarouselProducts
                    data={Data.join}
                    title={'محصولات مرتبط'}
                    image={require('../../../Global/Images/bg-category.png')}
                />
            </ScrollView>
            {status == "2"?

                <View style={{height:65,flexDirection:'row',borderTopWidth:1,borderTopColor:'rgb(160,160,160)',bottom:0,width:ScreenWidth,backgroundColor:'#efefef'}}>

                   <View style={{flex:3,justifyContent:'center',padding:5}}>
                       <PriceProduct product={Data} offer={Data.offer}/>
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

                :null}

        </React.Fragment>
    );
}
