import {React,GlobalStyles,RFValue,TextBold,Text, TouchableOpacity, View} from '../../../../Global/Import/Imports';
import ProductAttributeStyle from './ProductAttributeStyle';
export default function AttributeItems ({Data,setActiveAttribute,ActiveAttribute}) {
    return (
        <React.Fragment>
            <TextBold style={{fontSize:RFValue(19)}}>{Data.NameAttribute} :</TextBold>
            <View style={[GlobalStyles.ListGrid]}>
                {Data.attributes.map((attribute,index) => (
                    <TouchableOpacity
                        onPress={() => setActiveAttribute(attribute)}
                        activeOpacity={.75}
                        style={[ActiveAttribute.id==attribute.id?ProductAttributeStyle.ItemAttributeActive:ProductAttributeStyle.ItemAttribute, ProductAttributeStyle.ListItem]} key={index} >
                        <Text style={[ActiveAttribute.id==attribute.id?ProductAttributeStyle.TextAttributeActive:ProductAttributeStyle.TextAttribute]}>
                            {attribute.value}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </React.Fragment>
    );
}
