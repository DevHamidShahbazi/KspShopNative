import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
    containerBoxTop: {
        margin: 7,
        backgroundColor: '#fff',
        elevation: 7,
    },
    titleBoxTop: {
        marginVertical: 10,
        textAlign: 'center',
        fontFamily: 'Vazir-Bold',
        fontSize: 18,
        color: '#fff',
    },
    textPriceFinal: {
        color: 'red',
        fontSize: 19,
        fontFamily: 'iranyekanbold(fanum)',
    },
    textRed: {
        color: 'red',
        fontFamily: 'Vazir',
        fontSize: 12,
    },
    textRed2: {
        color: 'red',
        fontFamily: 'iranyekanbold(fanum)',
        fontSize: 14,
    },
    btnSubmit: {
        alignItems: 'center',
        elevation: 5,
        flexDirection: 'row-reverse',
        backgroundColor: '#213854',
        marginVertical: 12,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    textBtnSubmit: {
        color: '#fff',
        fontFamily: 'Vazir',
        fontSize: 15,
        marginHorizontal: 10,
    },
    boxFactor: {
        padding: 8,
        backgroundColor: 'rgba(33,56,84,0.05)',
        borderColor: 'rgba(0,0,0,0.44)',
        borderWidth: 1,
    },
    touch: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    },
    textFactor: {
        fontFamily: 'Vazir',
        fontSize: 13,
        color: '#696969',
        textAlign: 'center',
    },
    selectBoxFactor: {
        backgroundColor: '#fff',
        padding: 1,
        borderWidth: 1,
        borderColor: '#000',
        width: 20,
        height: 20,
        marginHorizontal: 10,
    },
    ActiveSelectBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#155e75',
    },
    defNameProduct: {
        fontSize:17,
        color: '#155e75',
        fontFamily: 'Vazir-Bold',
        textAlign: 'center',
    },
    containerProduct: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 5,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.45)',
    },
    detailsProduct: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    footerProduct: {
        padding:3,
        width: '100%',
        flexDirection: 'row-reverse',
        alignItems:'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.45)',
    },
    btnEdit:{
        alignItems: 'center',
        justifyContent:'center',
        elevation: 2,
        flexDirection: 'row-reverse',
        backgroundColor: '#17a2b8',
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderRadius: 3,
    },
    btnDelete:{
        alignItems: 'center',
        justifyContent:'center',
        elevation: 2,
        flexDirection: 'row-reverse',
        backgroundColor: '#dc3545',
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderRadius: 3,
    },
    Text_Normal:{
        color:"#000",fontSize:12, fontFamily: 'Vazir'
    },
    Text_Blue:{
        color:"#007bff",fontSize:12, fontFamily: 'Vazir',marginHorizontal:3
    }
});
export default Styles;
