import {Dimensions, StyleSheet} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
export const CategoriesStyles = StyleSheet.create({
    container:{
        flex:1,width:ScreenWidth-30,padding:10,
    },
    box:{
        flex:1,
        backgroundColor:'#fff',
        // borderRadius: 8,
        flexDirection:'row',
        borderWidth:2.5,
        borderColor:'#ffc107'
    },
    input:{
        flex:15,
        justifyContent:'center',
        alignItems:'flex-end',
        padding:5
    },
    btnSearch:{
        flex:2,padding:5,justifyContent:'center',
        alignItems:'center',backgroundColor: '#ffc107',
        // borderTopRightRadius:7,
        // borderBottomRightRadius:7,
    },
});
