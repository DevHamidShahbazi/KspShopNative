import {
    React, Text, TouchableOpacity,
    Icon, Modal, View, UseSetFields,TextBold,
    Error,useState, CustomTextInput, axios,
} from '../../../../Global/Import/Imports';
import Styles from './Styles';
export default function EditBasket({item,setRender,Render}) {
    const [ModalStatus,setModalStatus] = useState(false);
    return (
        <React.Fragment>
            <TouchableOpacity onPress={() => setModalStatus(true)} style={Styles.btnEdit} activeOpacity={.7}>
                <Text style={Styles.textBtnSubmit}>
                    ویرایش
                </Text>
                <Icon name={'edit'} color={'#fff'} size={14} />
            </TouchableOpacity>
            <ModalEdit Render={Render} ModalStatus={ModalStatus} setRender={setRender} item={item} setModalStatus={setModalStatus}/>
        </React.Fragment>
    );
}

const ModalEdit = ({setModalStatus,ModalStatus,item,setRender,Render}) => {
    const [Errors,setErrors] = useState('');
    const {Fields,handleChange} = UseSetFields({
        count: null,
    });
    const handleClose = () => {
        setErrors('');
        handleChange(null,'count');
        setModalStatus(false);
    };
     return (
        <React.Fragment>
            <Modal
                isVisible={ModalStatus}
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
                style={{justifyContent: 'flex-end',margin: 0}}>
                <View style={{borderTopRightRadius:10,borderTopLeftRadius:10,backgroundColor:'#e5e7eb',padding:10}}>
                    <TextBold style={{marginVertical:'1%',textAlign:'center'}}>{item.product.DefName}</TextBold>
                    <View style={{marginVertical:'1%'}}>
                        <Error message={Errors} type={'single'}/>
                    </View>
                    <CustomTextInput
                        handleSubmit={() => handleSubmit(handleClose,ModalStatus,item,setRender,Render,setErrors,Fields)}
                        value={Fields.name} name={'count'}
                        styleInput={{textAlign:'center',borderRadius:5, height:45}}
                        handleChange={handleChange} placeholder={'تعداد مورد نظر خود را وارد کنید'}
                        type={'numeric'} require={true} />

                    <View style={{margin:'2%',justifyContent:'center'}}>
                        <TouchableOpacity
                            style={{backgroundColor:'#213854',borderRadius:8.5,padding:8.5}}
                            activeOpacity={.7}
                            onPress={() => handleSubmit(handleClose,ModalStatus,item,setRender,Render,setErrors,Fields)}>
                            <Text style={{textAlign:'center',fontFamily:'Vazir-Bold',color:'#fff'}}>
                                ویرایش
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        </React.Fragment>
     );
};



const handleSubmit = (handleClose,ModalStatus,item,setRender,Render,setErrors,Fields) => {
    axios.post('v_1_0/basket/update', {
        count: Fields.count,
        id: item.id,
    })
        .then(function (response) {
            const {data} = response;
            if (data.status == 'success'){
                setRender(Render+1)
                setErrors('')
                handleClose()
            }else {
                setErrors(data.message);
            }
        })
        .catch(function (error) {
            console.log(error)
        });
};
