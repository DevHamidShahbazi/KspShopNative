import {React, View, Text,FlatList} from '../../../../Global/Import/Imports';
import LeftColumn from '../components/LeftColumn';
import TitleRightColumn from './components/TitleRightColumn';
import {Styles} from './components/Styles';
import {ProductSizeStyles} from '../components/ProductSizeStyle';
export default function ProductSizeOne ({Data}) {
    const {sizes} = Data;
    return (
        <React.Fragment>
            <View style={ProductSizeStyles.container}>
                <LeftColumn type={Data.TypeSize} fontSize={17} data={sizes} name={'سایز'}/>
                <View style={{flex: 1, backgroundColor: 'white'}}>
                    <FlatList
                        data={sizes} keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        ListHeaderComponent={() => <TitleRightColumn/>}
                        renderItem={({item}) => (
                            <View style={Styles.ItemPrice}>
                                <Text style={[ProductSizeStyles.CellPrice,{fontSize:15.6}]}>
                                    {item.price??'__'}
                                </Text>
                            </View>
                        )}/>
                </View>
            </View>
        </React.Fragment>
    );
}
