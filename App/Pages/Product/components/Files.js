import {React,Linking,RFValue,TouchableOpacity,Text,View,Icon} from '../../../Global/Import/Imports';
import {StyleSheet} from 'react-native'
export default function Files({files}) {
    return (
        <React.Fragment>
            {
                files!=null?
                    files.map((item,index) => (
                        <View style={{alignItems:'flex-end'}} key={index}>
                            <TouchableOpacity style={Styles.btn}
                                              onPress={() => Linking.openURL(item.url)} activeOpacity={.7}>
                                <Icon color={'#fff'} size={15} name={'download'}/>
                                <Text style={Styles.text}>{item.title}</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                    :null
            }
        </React.Fragment>
    );
}

const Styles = StyleSheet.create({
    btn:{
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
        backgroundColor:'#0e7490',
        marginVertical:'3%',
        elevation:4,
        borderRadius:5,
        padding:5,
    },
    text:{
        marginHorizontal:7.5,
        fontFamily:'Vazir',
        fontSize:RFValue(17),
        color:'#fff'
    }
})
