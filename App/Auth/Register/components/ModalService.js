import {React,Modal,Text,View,TouchableOpacity,ScrollView} from '../../../Global/Import/Imports';
import {StyleSheet} from 'react-native';
export default function ModalService({setStatusModalService,StatusModalService}) {
    const handleClose = () => setStatusModalService(false);
    return (
        <React.Fragment>
            <Modal
                isVisible={StatusModalService}
                onBackdropPress={() => handleClose()}
                onRequestClose={() => handleClose()}
                onSwipeComplete={() => handleClose()}
                swipingDirection="down"
                animationIn="slideInUp"
                animationOut="slideOutDown"
                backdropTransitionInTiming={1000}
                backdropTransitionOutTiming={500}
                animationOutTiming={900}
                animationInTiming={500}
                style={{justifyContent: 'center',margin: 0}}>
                <View style={{justifyContent:'center',borderRadius:10,backgroundColor:'#fff',padding:10}}>
                    <ScrollView>
                        <Text style={[Style.textBold,{marginVertical:'2%'}]}>
                            شرکت کا اس پی
                        </Text>
                        <Text style={Style.text}>
                            کا اس پی در تولید و عرضه لوازم استاندارد قالب و لوازم جانبی قالب از جمله
                            سنبه پران پلاستیک - پران سراستوانه - پران تیغه ای - سنبه برش - پین تثبیت - پین رزوه دار -
                            میل راهنما p - میل راهنما T - رینگ سنتر کننده و ...
                            فعالیت دارد که امکان ساخت سفارشی محصولات در تمامی ابعاد وجود دارد
                        </Text>
                        <Text style={Style.text}>
                            لذا با توجه به گستردگی ابعاد هر محصول ما تمام تلاش خود را جهت تکمیل کردن لیست قیمت
                            در تمامی ابعاد بکار برده ایم تا در اختیار مشتریان عزیز قرار داده ایم
                            از این رو زمان تحویل برخی از محصولات که ابعادی خاص دارند و سفارش تولید کمی دارند
                            نسبت به دیگر محصولات بیشتر میشود و گاهی 10 الی 7 روز زمان برای تولید نیاز است
                        </Text>
                        <Text style={Style.text}>
                            - در صورتی که درخواست صدور فاکتور رسمی دارید باید اطلاعات مورد نیاز شرکتی که قرار است فاکتور برای آن صادر شود برای ما ارسال شود.
                        </Text>
                        <Text style={Style.text}>
                            - سفارش های شهرستان با تیپاکس ارسال می شود
                        </Text>
                        <View style={{justifyContent:'center',marginVertical:'2%'}}>
                            <TouchableOpacity
                                activeOpacity={.7}
                                style={{backgroundColor: '#155e75',padding:5,borderRadius:10}}
                                onPress={() => handleClose()}>
                                <Text style={Style.textBtn}>متوجه شدم</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        </React.Fragment>
    );
}
const Style =StyleSheet.create({
    text:{
        textAlign:'right',fontFamily:'Vazir',color:'#000'
    },
    textBtn:{
        textAlign:'center', fontFamily:'Vazir', color:'#fff', fontSize:16,
    },
    textBold:{
        textAlign:'center',fontFamily:'Vazir-Bold',color:'#000',fontSize:18,
    }
})
