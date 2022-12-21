import {React, TextBold, useNavigation, Image, TouchableOpacity, GlobalStyles} from '../Import/Imports';
import {Dimensions} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;

export function CategoryItem ({category}) {
    const navigation = useNavigation();
    const TypeCategory = category.type=='parent' ? 'ParentCategory':'ChildCategory';
    return (
        <React.Fragment>
            <TouchableOpacity onPress={() => navigation.navigate(TypeCategory,{params:1})} activeOpacity={1}
                              style={[GlobalStyles.ListItem,{width:ScreenWidth/2.1}]}>
                <Image  style={{width:ScreenWidth/2.2, height: ScreenWidth/2.2}} source={{uri:category.image}}/>
                <TextBold style={{textAlign:'center'}}>{category.name}</TextBold>
                <TextBold style={{textAlign:'center'}}>{null}</TextBold>
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
                <TextBold style={{textAlign:'center'}}>{null}</TextBold>
            </TouchableOpacity>
        </React.Fragment>
    );
}
