import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    FormContainer:{
        margin: 7,
        backgroundColor: '#fff',
        elevation: 5,
    },
    titleBox: {
        marginVertical: 10,
        textAlign: 'center',
        fontFamily: 'Vazir-Bold',
        fontSize: 18,
        color: '#fff',
    },
    btnSubmit: {
        width:'35%',
        justifyContent:'space-around',
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
        fontSize: 18,
        marginHorizontal: 10,
    },
});

export default Styles;
