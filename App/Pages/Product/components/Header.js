import {
    React,
    TouchableOpacity,
    View,
    TextBold,
    AttributeDetailProduct,
    useCallback,
    Alert,
    GlobalStyles,
    Text,
    Linking,
    useNavigation,
} from '../../../Global/Import/Imports';
import Breadcrumb from './Breadcrumb';
const url = "https://ksp-shop.com/Upload/image/product/file/eLjIN-KspShop.jpg";

export default function Header ({Data}) {



    return (
        <React.Fragment>
            <Breadcrumb ProductName={Data.name} category={Data.category} ParentCategory={Data.ParentCategory} />
            <View style={{paddingBottom:10}}>
                <TextBold style={{fontSize:24,textAlign:'center'}}>{Data.h1 ?? Data.name}</TextBold>
                <TextBold style={{fontSize:13,paddingVertical:'1%',borderTopWidth:1,borderColor:'#000',textAlign:'right',marginVertical:'2%'}}>{' مقایسه، مشاهده قیمت و خرید آنلاین '+(Data.h1 ?? Data.name)}</TextBold>
                {
                    Data.filter_attribute.map((item,index) => (
                        <View key={index} style={{textAlign:'right',alignItems:'flex-end'}}>
                            <AttributeDetailProduct  name={item.name} value={item.value}/>
                        </View>
                    ))
                }
            </View>
        </React.Fragment>
    );
}


//تابع برای باز کردن لینک در مرورگر
// const handlePress = useCallback(async () => {
//     const supported = await Linking.canOpenURL(url);
//
//     if (supported) {
//         await Linking.openURL(url);
//     } else {
//         Alert.alert(`Don't know how to open this URL: ${url}`);
//     }
// }, [url]);
