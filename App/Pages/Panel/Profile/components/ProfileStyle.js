import {React,TouchableOpacity,MaterialCommunityIcons} from '../../../../Global/Import/Imports';
import {StyleSheet} from 'react-native';
import {CustomBadge} from '../../../../Global/Components/Components';
const ProfileStyles = StyleSheet.create({
    Body:{
        // backgroundColor:'blue',
        flex:10,
        justifyContent:'center',
        margin:10
    },
    Items:{
        paddingRight:"5%",
        paddingLeft:"5%",
        justifyContent:'space-between',
        backgroundColor: '#fff',
    },
    Item_Body:{
        height:60,
        borderWidth : .6,
        borderRightColor:'rgba(0,0,0,0)',
        borderLeftColor:'rgba(0,0,0,0)',
        borderTopColor:'rgba(0,0,0,0.10)',
        borderBottomColor:'rgba(0,0,0,0.10)',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: '#fff',
    },
    Name_Item_Body:{
        paddingRight:"2%",
        fontFamily:'Vazir',
        fontSize:17,
        color:'rgba(0,0,0,0.75)',
    },
    Container_Item_Body:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
    },
    Orders:{
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
        backgroundColor: '#fff',
    },
});
export default ProfileStyles;


export function NavigationSetOptionsProfile (navigation,BasketCount) {
    return (
        navigation.setOptions({
            headerTitleStyle: {
                display:'none'
            },
            headerStyle: {
                backgroundColor: '#213854',
                elevation:0,
            },
            headerLeft: () => {
                return (
                    <TouchableOpacity activeOpacity={.7} onPress={() =>  navigation.navigate('BasketIndex')} style={{marginLeft:8,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <MaterialCommunityIcons name={'cart'} color={'#eee'} size={30} />
                        {BasketCount==0?null:<CustomBadge/>}
                    </TouchableOpacity>
                )
            },
            headerRight: () => {
                return (
                    <TouchableOpacity activeOpacity={.7} onPress={() =>  navigation.navigate('About')} style={{marginRight:8}}>
                        <MaterialCommunityIcons name={'menu'} color={'#eee'} size={30} />
                    </TouchableOpacity>
                )
            },
        })
    )
}
