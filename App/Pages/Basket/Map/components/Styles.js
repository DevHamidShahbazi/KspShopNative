import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container:{
        flex:1,
        padding:5,
        backgroundColor:'#fff'
    },
    SectionBottom:{
        flex:2,
        justifyContent:'center'
    },
   btn:{
       backgroundColor:'#213854',
       alignItems: 'center',
       justifyContent:'center',
       elevation: 2,
       flexDirection: 'row-reverse',
       paddingVertical: 8,
       paddingHorizontal: 5,
       borderRadius: 3
   },
    textBtn:{
        fontSize:18,textAlign:'center',fontFamily:'Vazir-Bold',color:'#fff'
    }
});

export default Styles;
