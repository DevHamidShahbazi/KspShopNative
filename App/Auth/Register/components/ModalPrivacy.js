import {React,Modal,Text,View,ScrollView,TouchableOpacity} from '../../../Global/Import/Imports';
import {StyleSheet} from 'react-native';
export default function ModalPrivacy({setStatusModalPrivacy,StatusModalPrivacy}) {
    const handleClose = () => setStatusModalPrivacy(false);
    return (
        <React.Fragment>
            <Modal
                isVisible={StatusModalPrivacy}
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
                            جهت خرید از فروشگاه نیاز است که اطلاعات کاربر سفارش دهنده از جمله :
                        </Text>
                        <Text style={Style.text}>
                             - لوکیشن دقیق ، که در زمان ثبت سفارش توسط کاربر تکمیل می شود
                        </Text>
                        <Text style={Style.text}>
                            شماره تلفن - آدرس دقیق به همراه کدپستی و شماره تلفن شخص تحویل گیرنده گرفته شود تا تمامی مراحل ارسال بدون مشکل انجام شود
                        </Text>
                        <Text style={[Style.text,{marginVertical:'2%'}]}>
                            این اطلاعات نزد شرکت محفوظ است، به هیچ عنوان از آن‌ها سواستفاده نخواهد شد و در اختیار شخص یا سازمان ثالثی قرار نمیگیرد.
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
