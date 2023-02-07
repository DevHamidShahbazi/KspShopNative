import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const leftColumnWidth = 100;
export const ProductSizeStyles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    LeftColumn:{
        width: leftColumnWidth,
        backgroundColor: '#213854',
        borderRightWidth: 1,
        borderRightColor: '#eee',
    },
    ItemNameSize:{
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        justifyContent:'center'
    },
    NameSize:{
        textAlign: 'center',
        fontFamily:'Vazir',
        fontSize:RFValue(17+1),
        color:'#fff'
    },
    ListLeftColumn:{
        backgroundColor: '#213854',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        borderLeftWidth: 1,
        borderLeftColor: '#a9a9a9',
        justifyContent:'center'
    },
    CellItemLeftColumn:{
        fontSize:RFValue(15+1),
        textAlign: 'center',
        fontFamily:'iranyekanregular(fanum)',
        color:'#fff'
    },
    RightColumnTitle:{
        width:100,
        backgroundColor: '#213854',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        borderLeftWidth: .5,
        borderLeftColor: '#a9a9a9',
        justifyContent:'center',
    },
    ItemPrice:{
        width: leftColumnWidth,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderBottomColor: '#a9a9a9',
        borderRightColor: '#a9a9a9',
        justifyContent:'center'
    },
    CellPrice:{
        color:'#000',
        textAlign: 'center',
        fontSize:RFValue(15+1),
        fontFamily:'iranyekanregular(fanum)',
    },

    ActiveItem:{
        backgroundColor:'#075985'
    }
});
