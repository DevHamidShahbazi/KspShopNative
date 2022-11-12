import {StyleSheet} from 'react-native';
export default StylesGlobal = StyleSheet.create({

    Btn_Royal:{
        display : 'flex',
        justifyContent:'center',
        alignItems:'center',
        width:"100%",
        borderRadius: 25,
        padding: 10,
        backgroundColor : '#213854',
    },
    Text_Btn_Royal : {
        color : 'white',
        fontFamily:"Vazir",
        fontSize:15,
        textAlign:'center'
    },
    Shadow : {
        shadowColor: "rgba(0,0,0,0.67)",
        elevation: 2,
    },
    Card_Header : {
        width : "100%",
        borderTopLeftRadius :20 ,
        borderTopRightRadius :20 ,
        backgroundColor: "#dbdbdb",
        fontFamily:"Vazir"
    },
    Card_Body : {
        width : "100%",
        fontFamily:"Vazir"
    },
    Card: {
        width : "100%",
        position: "relative",
        backgroundColor: "#fff",
        borderRadius: 20,
        fontFamily:"Vazir"
    },

});
