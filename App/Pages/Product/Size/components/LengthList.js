import {React,Text, View} from '../../../../Global/Import/Imports';
import {ProductSizeStyles} from './ProductSizeStyle';
export default function LengthList ({Lengths}) {
    return (
        <View style={{flexDirection: 'row'}}>
            {Lengths.map((item,index) => (
            <View key={index} style={ProductSizeStyles.RightColumnTitle}>
                <Text style={ProductSizeStyles.NameSize}>
                    {item.length}
                </Text>
            </View>
            ))}
        </View>
    )
}
