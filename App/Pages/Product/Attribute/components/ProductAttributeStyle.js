import {React} from '../../../../Global/Import/Imports';
import {StyleSheet} from 'react-native'
const ProductAttributeStyle = StyleSheet.create({
    ListItem:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff',
        marginTop:10,
        marginBottom:10,
        marginRight:2,
        marginLeft:2,
        padding:5,
        borderRadius:15,
    },
    ItemAttribute:{
        borderColor:'rgba(118,118,118,0.74)',
        borderWidth:1.7,
        paddingHorizontal:'10%',
    },
    ItemAttributeActive:{
        borderColor:'#0e7490',
        borderWidth:2,
        paddingHorizontal:'10%',
        elevation:8
    },

    TextAttribute:{
        color:'rgba(91,91,91,0.74)',
        fontFamily:'Vazir',
        fontSize:15
    },
    TextAttributeActive:{
        color:'#0e7490',
        fontFamily:'Vazir-Bold',
        fontSize:17
    }
});
export default ProductAttributeStyle;
