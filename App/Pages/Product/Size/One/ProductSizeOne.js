import {React,useState, TouchableOpacity, View, Text, TextBold, TextRegular} from '../../../../Global/Import/Imports';
import LeftColumn from '../components/LeftColumn';
import TitleRightColumn from './components/TitleRightColumn';
import {Styles} from './components/Styles';
import {ProductSizeStyles} from '../components/ProductSizeStyle';
import ProductDetailGlobal from '../../components/ProductDetailGlobal';
import {BtnAddToCartSize} from '../../components/BtnAddToCart';
export default function ProductSizeOne ({Data}) {
    const [ActiveSize,setActiveSize] = useState(null);
    return (
        <React.Fragment>
            <ProductDetailGlobal Data={Data}>
                <View style={{flex: 1}}>
                    <TextBold style={{fontSize:15}}>
                        <TextRegular>
                            {' قیمت : '}
                        </TextRegular>
                        تومان
                    </TextBold>
                </View>
                <View style={ProductSizeStyles.container}>
                    <LeftColumn type={Data.TypeSize}  data={Data.sizes} name={'سایز'}/>
                    <View style={{flex: 1, backgroundColor: 'white'}}>
                        <TitleRightColumn/>
                        {Data.sizes.map((item,index) => (
                            <TouchableOpacity key={index} style={[Styles.ItemPrice,ActiveSize != null && ActiveSize.id == item.id?ProductSizeStyles.ActiveItem:{}]}
                                              onPress={() => ActiveSize != null && ActiveSize.id == item.id ? setActiveSize({}) : setActiveSize(item)}
                                              activeOpacity={.85}>
                                <Text style={[ProductSizeStyles.CellPrice,{fontSize:15},ActiveSize != null && ActiveSize.id == item.id?{color:'#fff'}:{color:'#000'}]}>
                                    {item.price??'__'}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ProductDetailGlobal>
            {ActiveSize != null && ActiveSize.status != "0"?<BtnAddToCartSize product={ActiveSize}/>:null}
        </React.Fragment>
    );
}


