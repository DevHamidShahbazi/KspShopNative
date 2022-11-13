import {StyleSheet} from 'react-native';
export default  StylesAuth = StyleSheet.create({
    ContainerRegister: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        paddingRight : "8%",
        paddingLeft : "8%",
    },
    Header_box : {
        fontFamily:'Vazir',
        fontSize :20,
        textAlign:'center',
        color:'black'
    },
    Body_box : {
        padding : '3%'
    },
    Box : {
        borderRadius : 15,
        backgroundColor:"white",
        width : '100%',
        shadowColor: "rgba(0,0,0,0.67)",
        elevation: 2,
    },
    Icon_Label_Group : {
        paddingTop : 8,
        width : "10%",
        display:'flex',
        alignItems : 'center',
        padding : 5,
        textAlign: 'center',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor : '#e9ecef',
        borderWidth: 1,
        borderColor: '#cad0d6',
    },
    Icon_Label_Group_Right : {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    Input_Group : {
        width : "100%",
        display:'flex',
        flexDirection : 'row',
        marginBottom : "5%",
    },
    Input : {
        fontFamily:'Vazir',
        width : "90%",
        textAlign : 'right',
        color:'black',
        borderColor : 'rgba(0,0,0,0.21)',
        borderWidth : .8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        padding : 5,
    },
});
