import {
    React, TextBold, TextRegular, View, Modal, TextInput,
    MiddlewareNotAuth, MiddlewareAuth, Text, useState,Alert,
    TouchableOpacity, UseSetFields, CustomTextInput, AsyncStorage, axios, Error, Success,
} from '../../../Global/Import/Imports';
export default function Comment ({product_id,comments}) {
    const [ModalStatus,setModalStatus] = useState(false);
    return (
        <React.Fragment>
            <View style={{flex:1,marginVertical:'1%'}}>
                <TextBold style={{marginBottom:5,textAlign:'center',fontSize:18}}>نظرات</TextBold>
            </View>
            {comments!=null?
                <View style={{flex:1,marginVertical:'1%'}}>
                    {comments.map((item,index) => (
                        <View key={index} style={{flex:1,marginVertical:'2%',borderRadius:5,padding:3,backgroundColor:'#f5f5f5',elevation:3}}>
                            <View style={{marginBottom:5,flexDirection:'row',justifyContent:'space-between'}}>
                                <TextRegular>{item.created_at}</TextRegular>
                                <TextRegular>{item.user}</TextRegular>
                            </View>
                            <TextRegular style={{textAlign:'right',fontSize:16}}>{item.comment}</TextRegular>
                        </View>
                    ))}
                </View>
            :null}
            <MiddlewareNotAuth>
                <View style={{flex:1,padding:10,borderRadius:5,backgroundColor:'#ffc107',marginVertical:'2%',justifyContent:'center'}}>
                    <TextBold style={{textAlign:'center'}}>برای ثبت نظر ابتدا باید ثبت نام کنید</TextBold>
                </View>
            </MiddlewareNotAuth>

            <MiddlewareAuth>
                <View style={{flex:1,marginVertical:'2%',justifyContent:'center'}}>
                        <TouchableOpacity
                            style={{backgroundColor:'#213854',borderRadius:8.5,padding:8.5}}
                            activeOpacity={.7}
                            onPress={() => setModalStatus(true)}>
                            <Text style={{textAlign:'center',fontFamily:'Vazir-Bold',color:'#fff'}}>
                                ثبت نظر
                            </Text>
                        </TouchableOpacity>
                    </View>
            <AddComment setModalStatus={setModalStatus} ModalStatus={ModalStatus} product_id={product_id}/>
            </MiddlewareAuth>

        </React.Fragment>
    );
}

function AddComment ({ModalStatus,setModalStatus,product_id}) {
    const [Errors,setErrors] = useState('');
    const [Successes,setSuccesses] = useState('');
    const {Fields,handleChange} = UseSetFields({
        comment: null,
    });
    const handleClose = () => {
        setModalStatus(false);
        setSuccesses('');
        setErrors('')
        handleChange(null,'comment')
    };
    return (
        <React.Fragment>
                <Modal
                    backdropTransitionInTiming={100}
                    backdropTransitionOutTiming={100}
                    animationOutTiming={100}
                    style={{justifyContent: 'flex-end',margin: 0}}
                    isVisible={ModalStatus}
                    onBackdropPress={() => handleClose()}
                    onRequestClose={() => handleClose() }>
                    <View style={{borderTopRightRadius:10,borderTopLeftRadius:10,backgroundColor:'#fff',padding:10}}>
                        <View style={{marginVertical:'1%'}}>
                            <Error message={Errors}/>
                            <Success message={Successes}/>
                        </View>
                        <TextRegular style={{marginVertical:'1%',textAlign:'center'}}>نظر خود را وارد کنید</TextRegular>
                        <CustomTextInput
                            value={Fields.name} name={'comment'}
                            styleInput={{borderRadius:5, height:80,}}
                            handleChange={handleChange} placeholder={'متن خود را وارد کنید'}
                            type={'default'} require={true} />

                        <View style={{margin:'2%',justifyContent:'center'}}>
                            <TouchableOpacity
                                style={{backgroundColor:'#213854',borderRadius:8.5,padding:8.5}}
                                activeOpacity={.7}
                                onPress={() => handleSubmit(Fields,product_id,setErrors,setSuccesses,handleClose)}>
                                <Text style={{textAlign:'center',fontFamily:'Vazir-Bold',color:'#fff'}}>
                                    ارسال
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
        </React.Fragment>
    );
}

const handleSubmit = (Fields,product_id,setErrors,setSuccesses,handleClose) => {
    AsyncStorage.getItem('api_token',(error, result) => {
        if (result){
            axios.post('v_1_0/store-comment', {
                comment: Fields.comment,
                product_id: product_id,
            },{
                headers:{
                    api_token:result
                }
            })
                .then(function (response) {
                    const {data} = response;
                    if (data.status == 'success'){
                        setErrors('')
                        handleClose()
                        Alert.alert(data.message)
                    }else {
                        setSuccesses('')
                        setErrors(data.message);
                    }
                })
                .catch(function (error) {
                    console.log(error)
                });
        }else {
            console.log('توکن نامعتبر')
        }

    })
};
