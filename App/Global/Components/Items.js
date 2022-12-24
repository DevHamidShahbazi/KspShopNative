import {
    React,
    View,
    TextBold,
    useNavigation,
    Image,
    TouchableOpacity,
    GlobalStyles,
    Text,
    TextRegular,
} from '../Import/Imports';
import {Dimensions} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;

export function CategoryItem ({category}) {
    const navigation = useNavigation();
    const TypeCategory = category.type=='parent' ? 'ParentCategory':'ChildCategory';
    return (
        <React.Fragment>
            <TouchableOpacity onPress={() => navigation.navigate(TypeCategory,category.id)} activeOpacity={1}
                              style={[GlobalStyles.ListItem,{width:ScreenWidth/2.1}]}>
                <Image  style={{width:ScreenWidth/2.2, height: ScreenWidth/2.2}} source={{uri:category.image}}/>
                <TextBold style={{textAlign:'center'}}>{category.name}</TextBold>
                <TextBold style={{textAlign:'center',paddingBottom:5}}>{null}</TextBold>
            </TouchableOpacity>
        </React.Fragment>
    );
}
export function ProductItem ({product}) {
    const navigation = useNavigation();
    return (
        <React.Fragment>
            <TouchableOpacity onPress={() =>  navigation.navigate('Product',product.id)}
                style={[GlobalStyles.ListItem,{width:ScreenWidth/2.1}]} activeOpacity={1}>
                <Image  style={{width:ScreenWidth/2.2, height: ScreenWidth/2.2}} source={{uri:product.image}}/>
                <TextBold style={{textAlign:'center',flexWrap:'wrap'}}>{product.name}</TextBold>

                <View style={{justifyContent:'center'}}>
                    <PriceUnderProduct product={product}/>
                </View>

            </TouchableOpacity>
        </React.Fragment>
    );
}


export function PriceUnderProduct ({product}) {
    const none = () => {
         return (
            <React.Fragment>
                <View style={{paddingHorizontal:10,paddingVertical:2,backgroundColor:'#0891b2',borderBottomLeftRadius:15,borderTopRightRadius:15}}>
                    <Text style={{textAlign:'center',color:'#fff',fontSize:13,fontFamily:'Vazir'}}>
                        ناموجود
                    </Text>
                </View>
            </React.Fragment>
         );
    };
    const discount = (price,discount,percent) => {
        return (
            <React.Fragment>
                <View style={{flexDirection:'row',alignItems:'center'}}>

                    <View style={{paddingHorizontal:3,paddingVertical:2,backgroundColor:'#0891b2',borderBottomLeftRadius:15,borderTopRightRadius:15}}>
                        <Text style={{textAlign:'center',color:'#fff',fontSize:13,fontFamily:'Vazir-Bold'}}>
                            {'%'+percent}
                        </Text>
                    </View>

                    <Text >
                        <Text style={{color:'#000',fontFamily:'iranyekanbold(fanum)',fontSize:15}}>{discount}</Text>
                        <Text style={{color:'#000',fontFamily:'Vazir',fontSize:12}}>تومان</Text>
                    </Text>

                    <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
                        <Text style={{color:'red',fontFamily:'iranyekanbold(fanum)',fontSize:13}}>{' '+price}</Text>
                    </Text>
                </View>
            </React.Fragment>
        );
    };
    const price = (price) => {
        return (
            <React.Fragment>
                <Text>
                    <Text style={{color:'#000',fontFamily:'iranyekanbold(fanum)',fontSize:15}}>{price}</Text>
                    <Text style={{color:'#000',fontFamily:'Vazir',fontSize:12}}>تومان</Text>
                </Text>
            </React.Fragment>
        );
    };


    if (product.status == '1'){
        return (
            <React.Fragment>
                {none()}
            </React.Fragment>
        )
    }else if (product.status == '2'){
        if (product.discount != '0'){
            return (
                <React.Fragment>
                    {discount(product.price,product.discount,product.percent)}
                </React.Fragment>
            );
        }else if (product.discount == '0' && product.type == 'simple'){
            return (
                <React.Fragment>
                    {price(product.price)}
                </React.Fragment>
            )
        }else if (product.type == 'attribute'){
            if (product.discountAttribute != null || product.priceAttribute != null){
                if (product.discountAttribute != null){
                    return (
                        <React.Fragment>
                            {discount(product.price,product.discountAttribute,product.percentAttribute)}
                        </React.Fragment>
                    )
                }else {
                    return (
                        <React.Fragment>
                            {price(product.priceAttribute)}
                        </React.Fragment>
                    )
                }
            }else {
                return (
                    <React.Fragment>
                        {price(product.priceRandomAttribute)}
                    </React.Fragment>
                )
            }1
        }
        if (product.type == 'size'){
            return (
                <React.Fragment>
                    <TextBold style={{textAlign:'center',paddingBottom:5}}>{null}</TextBold>
                </React.Fragment>
            )
        }
    }
}
