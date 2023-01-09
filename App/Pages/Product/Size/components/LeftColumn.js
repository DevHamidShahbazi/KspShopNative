import {React,ScrollView, Text, View} from '../../../../Global/Import/Imports';
import {ProductSizeStyles} from './ProductSizeStyle';


export default function LeftColumn ({type,name,data}) {
    const ShowItem = ({item}) => {
        switch (type) {
            case 'one':
                return item.size;
                break
            case 'two':
                return item.diameter+' mm';
                break
            case 'three':
                return item.diameter+' × '+item.width;
                break
            case 'four':
                return item.diameter+'×'+item.width+'×'+item.height;
                break
        }
    }
    return (
        <React.Fragment>
            <View style={ProductSizeStyles.LeftColumn}>

                <View style={ProductSizeStyles.ItemNameSize}>
                    <Text style={ProductSizeStyles.NameSize}>{name}</Text>
                </View>

                <ScrollView
                    style={{flex: 1}}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}>
                    {
                        data.map((item,key) => {
                            return (
                                <View key={key} style={ProductSizeStyles.ListLeftColumn}>
                                    <Text style={[ProductSizeStyles.CellItemLeftColumn]}>
                                        <ShowItem item={item}/>
                                    </Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </React.Fragment>
    );
}
