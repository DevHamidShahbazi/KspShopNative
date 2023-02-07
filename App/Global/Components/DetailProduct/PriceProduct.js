import {React, TextRegular,Text,View,RFValue} from '../../Import/Imports';
export default function PriceProduct ({product,offer}) {
    const {discount,price,percent} = product
    if ( discount !== '0'  && offer == null){
        return (
            <React.Fragment>
                <View style={{flex:1}}>
                    <View style={{flex:2,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{paddingHorizontal:3,paddingVertical:2,backgroundColor:'#0891b2',borderBottomLeftRadius:15,borderTopRightRadius:15}}>
                            <Text style={{textAlign:'center',color:'#fff',fontSize:RFValue(14),fontFamily:'iranyekanbold(fanum)'}}>
                                {'%'+percent}
                            </Text>
                        </View>
                        <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
                            <Text style={{color:'#868686',fontFamily:'iranyekanbold(fanum)',fontSize:RFValue(15)}}>{' '+price}</Text>
                        </Text>
                    </View>
                    <View style={{flex:2}}>
                        <Text style={{textAlign:'center'}} >
                            <Text style={{color:'#000',fontFamily:'iranyekanbold(fanum)',fontSize:RFValue(19)}}>{discount}</Text>
                            <Text style={{color:'#000',fontFamily:'Vazir',fontSize:RFValue(15)}}>{' تومان '}</Text>
                        </Text>
                    </View>
                </View>
            </React.Fragment>
        );
    }else {
        return (
            <React.Fragment>
                <Text style={{fontSize:RFValue(20),textAlign:'center',fontFamily:'iranyekanbold(fanum)',color:'#000'}}>
                    {price}
                    <TextRegular style={{fontSize:RFValue(15)}}>
                        {' تومان '}
                    </TextRegular>
                </Text>
            </React.Fragment>
        );
    }
}
