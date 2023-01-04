import {React, TextBold, TextRegular} from '../../../Global/Import/Imports';
import ProductDetailGlobal from '../components/ProductDetailGlobal';
import TypeProductSize from './components/TypeProductSize';
import {FlatList, View,ScrollView} from 'react-native';

const FakeData = [
    {id:1,name:'test1'},
    {id:2,name:'test2'},
    {id:3,name:'test3'},
    {id:4,name:'test4'},
]
export default function ProductSize ({Data}) {
    return (
        <React.Fragment>
            <ProductDetailGlobal Data={Data}>
                <View style={{flex: 1}}>
                    <TextBold style={{fontSize:16}}>
                        <TextRegular>
                            {' قیمت : '}
                        </TextRegular>
                        تومان
                    </TextBold>
                </View>
                <TypeProductSize TypeSize={Data.TypeSize} Data={Data} />
            </ProductDetailGlobal>
        </React.Fragment>
    );
}
