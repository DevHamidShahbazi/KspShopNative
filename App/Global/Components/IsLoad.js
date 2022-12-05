import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const IsLoaded = ({status,method}) => {
     return (
         <View style={{display:status?'none':'flex',flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#e5e7eb'}}>
             <TouchableOpacity onPress={() => {method}} activeOpacity={.7} style={{padding:10,borderRadius:25,backgroundColor:'rgba(39,49,62,0.88)'}}>
                 <MaterialCommunityIcons name={'refresh'} color={'#fff'} size={30} />
             </TouchableOpacity>
             <Text style={{fontFamily:'Vazir',color:'#000'}}>
                 بارگیری نشد دوباره امتحان کن
             </Text>
         </View>
     );
};
export default IsLoaded;
