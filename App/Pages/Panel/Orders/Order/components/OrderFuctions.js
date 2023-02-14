import {React,Text,View,GlobalStyles} from '../../../../../Global/Import/Imports';
import OrderStyles from './OrderStyles';
import {ColorTypeStatus, TextTypeStatus} from '../../../../../Global/Components/Components';


export function OrderTopItems ({order}) {
    return (
        <React.Fragment>
            <View style={[GlobalStyles.Card,GlobalStyles.Shadow,{borderRadius:5,padding:'2%'}]}>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:2,alignItems:'flex-end'}}>
                        <StatusWithValue title={'وضعیت'} status={order.status}/>
                        <TitleWithValue price={true} title={'قیمت کالا'} value={order.price_all}/>
                        <TitleWithValue price={true} title={'ارزش افزوده'} value={order.price_all_tax}/>
                        <TitleWithValue title={'نام خانوادگی'} value={order.last_name}/>
                        <TitleWithValue title={'استان'} value={order.state}/>
                        <TitleWithValue title={'شماره موبایل'} value={order.number}/>
                        <TitleWithValue title={'واحد'} value={order.unit}/>
                    </View>
                    <View style={{flex:2,alignItems:'flex-end',padding:2}}>
                        <TitleWithValue title={'تاریخ ثبت'} value={order.created_at}/>
                        <TitleWithValue price={true} title={'قیمت نهایی'} value={order.price}/>
                        <TitleWithValue price={true} title={'هزینه ارسال'} value={order.price_send}/>
                        <TitleWithValue title={'نام'} value={order.name}/>
                        <TitleWithValue title={'شهر'} value={order.city}/>
                        <TitleWithValue title={'کدپستی'} value={order.code_post}/>
                        <TitleWithValue title={'پلاک'} value={order.plaque}/>
                    </View>
                </View>
                <OrderAddress address={order.address}/>
            </View>
        </React.Fragment>
    );
}

export function TitleWithValue ({title,value,price}) {
    return (
        <React.Fragment>
            <View style={OrderStyles.rowItem}>
                <Text style={OrderStyles.value}>
                    {value}
                    {
                        price?
                            <Text style={[OrderStyles.value,{fontSize:10}]}>
                                {' تومان'}
                            </Text>
                            :null
                    }
                </Text>
                <Text style={OrderStyles.title}>
                    {title} :
                </Text>
            </View>
        </React.Fragment>
    );
}

export function StatusWithValue ({title,status}) {
    return (
        <React.Fragment>
            <View style={OrderStyles.rowItem}>
                <Text style={[OrderStyles.value,{marginRight:10,backgroundColor:ColorTypeStatus(status)+'10',color:ColorTypeStatus(status),borderRadius:5}]}>
                    {TextTypeStatus(status)}
                </Text>
                <Text style={[OrderStyles.title]}>
                    {title} :
                </Text>
            </View>
        </React.Fragment>
    );
}

export function OrderAddress ({address}) {
    return (
        <React.Fragment>
            <View style={{flexDirection:'row',justifyContent:'flex-end',padding:2,marginTop:'5%'}}>
                <View>
                    <Text style={{color:'#000',fontFamily:'Vazir-Bold'}}>
                        آدرس :
                    </Text>
                    <Text style={{color:'#000',fontFamily:'Vazir'}}>
                        {address}
                    </Text>
                </View>
            </View>
        </React.Fragment>
    );
}
