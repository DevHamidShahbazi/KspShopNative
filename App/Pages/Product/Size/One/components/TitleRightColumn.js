import {React,Text,View} from '../../../../../Global/Import/Imports';
import {Styles} from './Styles';
import {ProductSizeStyles} from '../../components/ProductSizeStyle';
export default function TitleRightColumn () {
    return (
        <View style={[Styles.RightColumnTitle]}>
            <Text style={[ProductSizeStyles.NameSize]}>
                قیمت
            </Text>
        </View>
    );
}
