import {React, View, Text, LinearGradient} from '../../Import/Imports';

export default function OfferProduct ({offer}) {
    return (
        <React.Fragment>
            {
                offer != null?
                    <View style={{marginVertical:'2%'}}>
                        <LinearGradient style={{
                            padding:8,justifyContent:'center',
                            flex:1,borderRadius:8,
                            alignItems:'center'
                        }} useAngle={true} angle={45} colors={['#3498db','#2c3e50']}>
                            <Text style={{textAlign:'center',color:'#fff',fontSize:17,fontFamily:'Vazir'}}>
                                تخفیف ویژه
                            </Text>

                            <Text style={{textAlign:'center',fontFamily:'Vazir',color:'#fff'}}>
                                خرید از
                                <Text style={{fontFamily:'Vazir-Bold',color:'#fff'}} >{' 1 '}</Text>
                                عدد تا
                                <Text style={{fontFamily:'Vazir-Bold',color:'#fff'}} >{' '+offer.countDown+' '}</Text>
                                عدد شامل
                                <Text style={{fontFamily:'Vazir-Bold',color:'#fff'}} >{' '+offer.percentDown+' % '}</Text>
                                تخفیف می باشد
                            </Text>

                            <Text style={{textAlign:'center',fontFamily:'Vazir',color:'#fff'}}>
                                {'خرید بالای '}
                                <Text style={{fontFamily:'Vazir-Bold',color:'#fff'}} >{' '+offer.countUp-1+' '}</Text>
                                عدد شامل
                                <Text style={{fontFamily:'Vazir-Bold',color:'#fff'}} >{' '+offer.percentUp+' % '}</Text>
                                تخفیف می باشد
                            </Text>
                        </LinearGradient>
                    </View>
                    :null
            }
        </React.Fragment>
    );
}
