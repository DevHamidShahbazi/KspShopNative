import {Dimensions, StyleSheet} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
export const CategoriesStyles = StyleSheet.create({
    container:{
        height:60,
        backgroundColor: '#213854',
        elevation:0,
        top:0,
        padding:10,
    },
    box:{
        flex:1,
        backgroundColor:'#fff',
        borderRadius: 3,
        flexDirection:'row',
    },
    input:{
        flex:15,
        justifyContent:'center',
        alignItems:'flex-end',
        padding:5
    },
    text:{
        fontFamily:'Vazir',
        color:'rgba(33,56,84,0.65)',
        fontSize:15,
    },
    btnSearch:{
        flex:2,padding:5,justifyContent:'center',
        alignItems:'center',
        // borderTopRightRadius:7,
        // borderBottomRightRadius:7,
    },
});
